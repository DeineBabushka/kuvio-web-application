const {getMongoDB} = require('../database/mongodb')
const {ObjectId} = require("mongodb");

async function getAllRecipes() {
    const db = await getMongoDB()
    return await db.collection('recipes').find().toArray();
}

async function getRecipeById(id) {
    const db = await getMongoDB()
    const objectId = new ObjectId(id);
    return await db.collection('recipes').findOne({_id: objectId});
}

async function getRandomRecipes() {
    try {
        const db = await getMongoDB();
        const recipes = await db.collection('recipes').aggregate([
            {$sample: {size: 15}}
        ]).toArray();

        if (recipes.length === 0) {
            return {message: 'No recipes found.', code: 404};
        }

        return {message: recipes, code: 200};
    } catch (err) {
        return {message: `Error requesting recipes: ${err}`, code: 500};
    }
}

async function getRecipeByQuery(filterSettings) {
    const filters = [];

    if (!filterSettings) {
        return {message: "Request should contain a body with Filter Settings but delivered nothing instead", code: 500};
    }

    if (filterSettings.all) {
        filters.push("Alles")
    }

    if (filterSettings.vegan) {
        filters.push("Vegan");
    }

    if (filterSettings.vegetarian) {
        filters.push("Vegetarisch");
    }

    if (filterSettings.glutenFree) {
        filters.push("Glutenfrei");
    }

    if (filterSettings.keto) {
        filters.push("Keto");
    }

    if (filterSettings.raw) {
        filters.push("Rohkost");
    }

    if (filterSettings.meat) {
        filters.push("Fleisch");
    }

    if (filterSettings.lowCalorie) {
        filters.push("Kalorienarm");
    }

    if (filterSettings.fish) {
        filters.push("Fisch");
    }



    try {
        const db = await getMongoDB();

        const finalquery = [];

        if (filterSettings.search && filterSettings.search !== "") {
            finalquery.push({title: {$regex: filterSettings.search, $options: "i"}});
        }

        if (filters.length > 0) {
            finalquery.push({
                $and: filters.map(filter => ({
                    diet_types: {$regex: filter, $options: "i"}
                }))
            });
        }

        const recipes = await db.collection('recipes').find(
            finalquery.length > 0 ? {$and: finalquery} : {}
        ).toArray();


        return {message: recipes, code: 200};
    } catch (err) {
        return {message: `Error Searching recipes: ${err}`, code: 500};
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    getRandomRecipes,
    getRecipeByQuery
};
