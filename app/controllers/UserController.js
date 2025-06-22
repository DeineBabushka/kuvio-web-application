const { get, getAll, getUserPublic, update, deleteUser, deleteUserPermanently } = require("../models/UserModel");


async function getUserAction(request, response) {
    let userid = request.params.id
    let user = await get(userid)
    response.status(user.code).json(user.message)
}

async function getUserPublicAction(request, response) {
    let username = request.params.username;
    if (!username) {
        response.status(400).json({ message: 'Username is required' });
    }
    let status = await getUserPublic(username);
    response.status(status.code).json(status.message);
}


async function getOwnProfileAction(req, res) {
    const userID = req.user.id;
    console.log('Token liefert ID:', req.user.id);
    console.log('Parsed userID:', userID);


    try {
        const user = await get(userID);
        res.status(200).json(user.message);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Serverfehler' });
    }
}

async function getAllUsersAction(request, response) {
    let user = await getAll()
    response.status(user.code).json(user.message)
}

async function updateUserAction(request, response) {
    let jsonObject = await readUserFromRequest(request)
    let status = await update(jsonObject)
    response.status(status.code).json(status.message)
}

async function deleteUserAction(request, response) {
    try {
        if (!request.params.id) {
            return response.status(400).json({ error: 'No user specified' });
        }
        let userid = request.params.id
        let status = await deleteUser(userid); // await wichtig hier
        response.status(status.code).json(status.message);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

//wichtig, da nur Admin Profil endgültig löschen darf
async function deleteUserPermanentlyAction(request, response) {
    try {
        if (!request.params.id) {
            return response.status(400).json({ error: 'No user specified' });
        }
        let userid = request.params.id
        let status = await deleteUserPermanently(userid);
        response.status(status.code).json(status.message);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}


async function readUserFromRequest(request) {
    let userid = request.params.id
    let firstname = request.body.firstname
    let lastname = request.body.lastname
    let picture = request.body.picture
    let password = request.body.password
    let preferences = request.body.preferences

    return {
        'userid': userid,
        'firstname': firstname,
        'lastname': lastname,
        'picture': picture,
        'password': password,
        'preferences': preferences
    }
}

module.exports = {
    getUserAction,
    getUserPublicAction,
    getAllUsersAction,
    updateUserAction,
    deleteUserAction,
    deleteUserPermanentlyAction,
    getOwnProfileAction
}