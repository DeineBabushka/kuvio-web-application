db = db.getSiblingDB('mongo_fullstack_db');

db.recipes.insertMany([
{
    title: "Gemüsepfanne mit Halloumi",
    image: "recipe_1.jpg",
    portions: 2,
    ingredients: [
      "1 Zucchini",
      "1 rote Paprika",
      "1 gelbe Paprika",
      "1 rote Zwiebel",
      "2 EL Olivenöl",
      "200 g Halloumi",
      "1 TL Paprikapulver",
      "1 TL getrockneter Thymian",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Zucchini, Paprika und Zwiebel in Streifen schneiden.",
      "2. Halloumi in Scheiben schneiden und beiseitelegen.",
      "3. Öl in einer großen Pfanne erhitzen.",
      "4. Zwiebeln anbraten, dann das restliche Gemüse hinzufügen.",
      "5. Mit Paprikapulver, Thymian, Salz und Pfeffer würzen.",
      "6. Halloumi separat in einer beschichteten Pfanne goldbraun braten.",
      "7. Das Gemüse auf Tellern anrichten, Halloumi darauf verteilen.",
      "8. Nach Belieben mit frischen Kräutern garnieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 490,
      protein_g: 23,
      carbohydrates_g: 16,
      fat_g: 36
    },
    id: "2d5d3a48-2f8d-4c9d-9e96-30b8bf56b0d4"
  },
{
    title: "Tomaten-Mozzarella-Salat mit Basilikum",
    image: "recipe_2.jpg",
    portions: 2,
    ingredients: [
      "3 Tomaten",
      "150 g Mozzarella",
      "1 Handvoll Basilikum",
      "2 EL Olivenöl",
      "1 EL Balsamico",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Tomaten und Mozzarella in Scheiben schneiden.",
      "2. Basilikum grob zupfen.",
      "3. Auf einem Teller abwechselnd Tomaten und Mozzarella anrichten.",
      "4. Mit Basilikum bestreuen.",
      "5. Öl und Balsamico darüber träufeln.",
      "6. Mit Salz und Pfeffer würzen und sofort servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
      "Rohkost",
    ],
    categories: [
      "Vorspeise",
      "Kalorienarm"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 310,
      protein_g: 16,
      carbohydrates_g: 5,
      fat_g: 25
    },
    id: "688982a6-9622-4352-9caf-7fd4cd7bdae8"
  },
{
    title: "Zucchini-Nudeln mit Pesto",
    image: "recipe_3.jpg",
    portions: 2,
    ingredients: [
      "2 Zucchini",
      "50 g Parmesan",
      "30 g Pinienkerne",
      "1 Bund Basilikum",
      "1 Knoblauchzehe",
      "3 EL Olivenöl",
      "1 TL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Zucchini mit Spiralschneider zu Nudeln verarbeiten.",
      "2. Pinienkerne in einer Pfanne ohne Öl anrösten.",
      "3. Basilikum, Parmesan, Knoblauch, Zitronensaft und Olivenöl zu einem Pesto mixen.",
      "4. Zucchini-Nudeln in einer Pfanne 2–3 Min. anbraten.",
      "5. Pesto unterheben, mit Salz und Pfeffer abschmecken.",
      "6. Sofort servieren, optional mit extra Parmesan garnieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 370,
      protein_g: 14,
      carbohydrates_g: 9,
      fat_g: 30
    },
    id: "de19d576-4538-4f4d-aac0-4b5e5b33f869"
  },
{
    title: "Vegetarisches Chili sin Carne",
    image: "recipe_4.jpg",
    portions: 2,
    ingredients: [
      "1 Dose Kidneybohnen",
      "1 Dose Mais",
      "1 Dose gehackte Tomaten",
      "1 rote Paprika",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 TL Paprikapulver",
      "1 TL Kreuzkümmel",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Zwiebel und Knoblauch fein hacken.",
      "2. Paprika würfeln.",
      "3. Öl in einem Topf erhitzen und Zwiebel sowie Knoblauch anbraten.",
      "4. Paprika zugeben und 5 Min. mitdünsten.",
      "5. Bohnen, Mais und Tomaten in den Topf geben.",
      "6. Mit Paprika, Kreuzkümmel, Salz und Pfeffer würzen.",
      "7. Ca. 15–20 Minuten köcheln lassen.",
      "8. Noch einmal abschmecken und heiß servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 430,
      protein_g: 17,
      carbohydrates_g: 38,
      fat_g: 17
    },
    id: "4dfbf828-f4c9-49dd-9403-0180d14aceb4"
  },
{
    title: "Rührei mit Champignons",
    image: "recipe_5.jpg",
    portions: 2,
    ingredients: [
      "4 Eier",
      "200 g Champignons",
      "1 EL Butter",
      "2 EL Milch",
      "1 EL Schnittlauch",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Champignons in Scheiben schneiden.",
      "2. Butter in der Pfanne erhitzen, Pilze darin anbraten.",
      "3. Eier mit Milch, Salz und Pfeffer verquirlen.",
      "4. Eiermasse über die Pilze geben.",
      "5. Bei mittlerer Hitze stocken lassen, dabei regelmäßig rühren.",
      "6. Mit Schnittlauch bestreuen und servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Frühstück",
      "Hauptgericht"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 390,
      protein_g: 23,
      carbohydrates_g: 5,
      fat_g: 31
    },
    id: "c0e7d806-d046-4323-99c8-ddaf48557e96"
  },
{
    title: "Gemüsesuppe mit Lauch und Karotten",
    image: "recipe_6.jpg",
    portions: 2,
    ingredients: [
      "2 Karotten",
      "1 Stange Lauch",
      "1/4 Sellerieknolle",
      "1 Liter Gemüsebrühe (glutenfrei)",
      "1 EL Olivenöl",
      "1 TL Majoran",
      "Salz",
      "Pfeffer",
      "Petersilie"
    ],
    instructions: [
      "1. Gemüse schälen, waschen und klein schneiden.",
      "2. Öl in einem Topf erhitzen, Gemüse darin kurz anbraten.",
      "3. Mit Brühe ablöschen.",
      "4. Mit Salz, Pfeffer und Majoran würzen.",
      "5. 20 Minuten köcheln lassen.",
      "6. Petersilie fein hacken und beim Servieren darüberstreuen."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Vorspeise",
      "Kalorienarm",
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 200,
      protein_g: 4,
      carbohydrates_g: 20,
      fat_g: 8
    },
    id: "cf8c264e-21d7-48bf-9fcd-314d92c04ed6"
  },
{
    title: "Kartoffelgratin mit Käse",
    image: "recipe_7.jpg",
    portions: 2,
    ingredients: [
      "500 g Kartoffeln",
      "150 ml Sahne",
      "100 g geriebener Käse",
      "1 Knoblauchzehe",
      "1 Prise Muskat",
      "Salz",
      "Pfeffer",
      "Butter für die Form"
    ],
    instructions: [
      "1. Kartoffeln schälen und in dünne Scheiben schneiden.",
      "2. Eine Auflaufform mit Butter ausstreichen, Knoblauch hineinreiben.",
      "3. Kartoffeln einschichten, jede Schicht würzen.",
      "4. Sahne mit Muskat vermengen, über die Kartoffeln gießen.",
      "5. Käse darüberstreuen.",
      "6. Im vorgeheizten Ofen bei 180 °C ca. 40 Minuten backen."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Beilage",
      "Hauptgericht"
    ],
    preparation_time: "50 Minuten",
    nutrition: {
      calories: 560,
      protein_g: 18,
      carbohydrates_g: 46,
      fat_g: 34
    },
    id: "2bbbf7c2-e7aa-4bd0-bdca-51f465f11c5d"
  },
{
    title: "Auberginenröllchen mit Ricotta",
    image: "recipe_8.jpg",
    portions: 2,
    ingredients: [
      "1 Aubergine",
      "150 g Ricotta",
      "1 TL Zitronensaft",
      "2 EL Olivenöl",
      "1 EL gehacktes Basilikum",
      "1 Knoblauchzehe",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Aubergine längs in dünne Scheiben schneiden.",
      "2. In einer Pfanne mit etwas Öl von beiden Seiten anbraten.",
      "3. Ricotta mit Zitronensaft, Basilikum, gepresstem Knoblauch, Salz und Pfeffer verrühren.",
      "4. Die Auberginenscheiben mit der Ricottamischung bestreichen.",
      "5. Aufrollen, ggf. mit Zahnstochern fixieren.",
      "6. Warm oder kalt servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Vorspeise",
      "Snack",
      "Kalorienarm"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 320,
      protein_g: 14,
      carbohydrates_g: 8,
      fat_g: 26
    },
    id: "b09c9751-f767-4cbb-9b58-2ae038b500c2"
  },
{
    title: "Vegetarischer Linseneintopf",
    image: "recipe_9.jpg",
    portions: 2,
    ingredients: [
      "150 g rote Linsen",
      "1 Karotte",
      "1 Kartoffel",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 EL Olivenöl",
      "800 ml Gemüsebrühe (glutenfrei)",
      "1 TL Kreuzkümmel",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Gemüse klein schneiden.",
      "2. Öl in einem Topf erhitzen, Zwiebel und Knoblauch anbraten.",
      "3. Karotte und Kartoffel zugeben, 5 Minuten mitdünsten.",
      "4. Linsen einrühren, mit Brühe auffüllen.",
      "5. Mit Gewürzen abschmecken und 25 Minuten köcheln lassen.",
      "6. Optional pürieren oder stückig lassen."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 410,
      protein_g: 22,
      carbohydrates_g: 40,
      fat_g: 12
    },
    id: "c4d7fe55-cb79-47a0-93d5-55514e312bf7"
  },
{
    title: "Bulgursalat mit Gemüse",
    image: "recipe_10.jpg",
    portions: 2,
    ingredients: [
      "150 g glutenfreier Buchweizen oder Hirse",
      "1 Paprika",
      "1 Gurke",
      "2 Tomaten",
      "1 Bund Petersilie",
      "2 EL Olivenöl",
      "2 EL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Getreide nach Packungsanweisung garen und abkühlen lassen.",
      "2. Gemüse klein schneiden.",
      "3. Petersilie fein hacken.",
      "4. Alles in einer Schüssel vermengen.",
      "5. Mit Öl, Zitronensaft, Salz und Pfeffer abschmecken.",
      "6. Gut durchziehen lassen und kalt servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Beilage",
      "Kalorienarm",
      "Snack"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 360,
      protein_g: 10,
      carbohydrates_g: 48,
      fat_g: 14
    },
    id: "30b52db9-33fa-402b-b2ad-123046d51531"
  },
{
    title: "Vegetarischer Wrap mit Hummus",
    image: "recipe_11.jpg",
    portions: 2,
    ingredients: [
      "2 glutenfreie Wraps",
      "100 g Hummus",
      "1 Avocado",
      "1 Karotte",
      "1/2 Gurke",
      "1 Handvoll Rucola",
      "1 EL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Gemüse in dünne Streifen schneiden.",
      "2. Avocado mit Zitronensaft, Salz und Pfeffer vermengen.",
      "3. Wraps mit Hummus bestreichen.",
      "4. Avocado-Creme und Gemüse darauf verteilen.",
      "5. Rucola dazugeben, aufrollen und servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Snack",
      "Kalorienarm",
      "Hauptgericht"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 420,
      protein_g: 12,
      carbohydrates_g: 38,
      fat_g: 24
    },
    id: "2bf4fe92-712f-4e90-bdec-cf2eb39fc389"
  },
{
    title: "Käse-Rührei mit Paprika",
    image: "recipe_12.jpg",
    portions: 2,
    ingredients: [
      "4 Eier",
      "50 g geriebener Käse",
      "1 rote Paprika",
      "1 Frühlingszwiebel",
      "1 EL Butter",
      "2 EL Milch",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Paprika in Würfel, Frühlingszwiebel in Ringe schneiden.",
      "2. Butter in Pfanne erhitzen, Gemüse kurz anbraten.",
      "3. Eier mit Milch, Salz und Pfeffer verquirlen.",
      "4. Eiermischung zugeben, langsam stocken lassen.",
      "5. Käse darüberstreuen und schmelzen lassen.",
      "6. Warm servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Frühstück",
      "Hauptgericht"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 440,
      protein_g: 24,
      carbohydrates_g: 6,
      fat_g: 34
    },
    id: "e9d04a67-57de-43a7-8670-75073f320b90"
  },
{
    title: "Ofen-Kartoffeln mit Quark-Dip",
    image: "recipe_13.jpg",
    portions: 2,
    ingredients: [
      "500 g kleine Kartoffeln",
      "2 EL Olivenöl",
      "1 TL Rosmarin",
      "250 g Magerquark",
      "1 EL Schnittlauch",
      "1 Knoblauchzehe",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Kartoffeln waschen, halbieren und mit Öl, Rosmarin, Salz und Pfeffer vermengen.",
      "2. Auf ein Backblech geben und bei 200 °C ca. 35 Minuten backen.",
      "3. Quark mit gepresstem Knoblauch, Schnittlauch, Salz und Pfeffer verrühren.",
      "4. Kartoffeln mit Quark-Dip servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Beilage"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 470,
      protein_g: 22,
      carbohydrates_g: 45,
      fat_g: 20
    },
    id: "c04a338c-d233-4697-999f-65dde897bcf8"
  },
{
    title: "Paprika-Tomaten-Omelett",
    image: "recipe_14.jpg",
    portions: 2,
    ingredients: [
      "4 Eier",
      "1 Paprika",
      "1 Tomate",
      "1 EL Butter",
      "2 EL Milch",
      "Salz",
      "Pfeffer",
      "Petersilie"
    ],
    instructions: [
      "1. Paprika und Tomate würfeln.",
      "2. Eier mit Milch, Salz und Pfeffer verquirlen.",
      "3. Butter in Pfanne erhitzen, Gemüse kurz anbraten.",
      "4. Eimischung hineingeben, stocken lassen.",
      "5. Petersilie hacken, Omelett damit bestreuen.",
      "6. Falten und servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Frühstück",
      "Kalorienarm",
      "Hauptgericht"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 390,
      protein_g: 21,
      carbohydrates_g: 7,
      fat_g: 30
    },
    id: "6e3a1f2b-2119-4b65-87ab-6f2ba9b11554"
  },
{
    title: "Griechischer Salat mit Feta",
    image: "recipe_15.jpg",
    portions: 2,
    ingredients: [
      "2 Tomaten",
      "1/2 Gurke",
      "1 rote Zwiebel",
      "1 Paprika",
      "100 g Feta",
      "1 EL Olivenöl",
      "1 TL Oregano",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Gemüse würfeln, Zwiebel in feine Ringe schneiden.",
      "2. Alles in einer Schüssel vermengen.",
      "3. Feta darüberbröseln.",
      "4. Mit Olivenöl, Oregano, Salz und Pfeffer abschmecken.",
      "5. Kurz durchziehen lassen und kalt servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
      "Rohkost",
    ],
    categories: [
      "Beilage",
      "Kalorienarm",
      "Vorspeise"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 330,
      protein_g: 13,
      carbohydrates_g: 10,
      fat_g: 25
    },
    id: "4c88a1e2-cb59-4594-ab87-b1e9a97e88f2"
  },
{
    title: "Linsen-Curry mit Kokosmilch",
    image: "recipe_16.jpg",
    portions: 2,
    ingredients: [
      "150 g rote Linsen",
      "1 Dose Kokosmilch",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 TL Currypulver",
      "1 TL Kurkuma",
      "1 EL Öl",
      "200 ml Wasser",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Zwiebel und Knoblauch fein hacken.",
      "2. Öl in einem Topf erhitzen, Zwiebel und Knoblauch anbraten.",
      "3. Gewürze zugeben und kurz mitrösten.",
      "4. Linsen, Kokosmilch und Wasser hinzufügen.",
      "5. 15–20 Minuten köcheln lassen.",
      "6. Mit Salz und Pfeffer abschmecken."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 510,
      protein_g: 20,
      carbohydrates_g: 45,
      fat_g: 25
    },
    id: "a9663e04-789f-4b29-a1ef-99704bec1fe6"
  },
{
    title: "Vegane Bolognese mit Linsen",
    image: "recipe_17.jpg",
    portions: 2,
    ingredients: [
      "160 g Vollkornnudeln",
      "100 g braune Linsen",
      "1 Möhre",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "400 ml passierte Tomaten",
      "1 TL Oregano",
      "1 TL Thymian",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Linsen nach Packung garen.",
      "2. Zwiebel, Möhre und Knoblauch fein hacken.",
      "3. In Öl anbraten, Linsen zugeben.",
      "4. Mit Tomaten und Gewürzen aufgießen.",
      "5. 10–15 Minuten köcheln lassen.",
      "6. Nudeln nach Packung kochen und mit Sauce servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 560,
      protein_g: 22,
      carbohydrates_g: 65,
      fat_g: 12
    },
    id: "8decf1d9-fd16-40d1-88bb-ad11dd78aa2e"
  },
{
    title: "Quinoasalat mit Avocado und Mango",
    image: "recipe_18.jpg",
    portions: 2,
    ingredients: [
      "150 g Quinoa",
      "1 Mango",
      "1 Avocado",
      "1 rote Paprika",
      "1 Limette",
      "2 EL Olivenöl",
      "Frischer Koriander",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Quinoa nach Packung garen, abkühlen lassen.",
      "2. Mango, Avocado, Paprika würfeln.",
      "3. Alles in einer Schüssel vermengen.",
      "4. Limettensaft, Öl, Salz, Pfeffer und Koriander zugeben.",
      "5. Kalt servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Beilage",
      "Kalorienarm",
      "Snack"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 430,
      protein_g: 10,
      carbohydrates_g: 35,
      fat_g: 24
    },
    id: "74fbe815-b8b5-46d7-93c5-fdebc51884a9"
  },
{
    title: "Vegane Gemüsepfanne mit Tofu",
    image: "recipe_19.jpg",
    portions: 2,
    ingredients: [
      "200 g Tofu",
      "1 Brokkoli",
      "1 Paprika",
      "1 Zucchini",
      "1 Karotte",
      "2 EL Sojasauce",
      "1 EL Sesamöl",
      "1 TL Ingwer",
      "1 TL Knoblauch",
      "Sesam",
      "Pfeffer"
    ],
    instructions: [
      "1. Tofu würfeln, Gemüse in Stücke schneiden.",
      "2. Tofu in Sesamöl knusprig anbraten, herausnehmen.",
      "3. Gemüse in derselben Pfanne anbraten.",
      "4. Mit Sojasauce, Ingwer, Knoblauch würzen.",
      "5. Tofu wieder zugeben, mit Sesam bestreuen."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 480,
      protein_g: 22,
      carbohydrates_g: 20,
      fat_g: 32
    },
    id: "bd4ee6e0-ae93-4d2f-98ef-3925ac6ead8c"
  },
{
    title: "Vegane Kürbissuppe mit Kokos",
    image: "recipe_20.jpg",
    portions: 2,
    ingredients: [
      "400 g Hokkaidokürbis",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 Stück Ingwer",
      "1 Dose Kokosmilch",
      "200 ml Gemüsebrühe",
      "1 EL Öl",
      "Salz",
      "Pfeffer",
      "Chili"
    ],
    instructions: [
      "1. Kürbis würfeln (mit Schale), Zwiebel, Knoblauch und Ingwer hacken.",
      "2. Öl erhitzen, alles anbraten.",
      "3. Mit Brühe und Kokosmilch ablöschen.",
      "4. 20 Minuten köcheln lassen, dann pürieren.",
      "5. Mit Salz, Pfeffer, Chili abschmecken."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Vorspeise",
      "Kalorienarm",
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 400,
      protein_g: 7,
      carbohydrates_g: 28,
      fat_g: 30
    },
    id: "b1885e82-ff8e-4ecc-ad1b-a8ca80a09b8d"
  },
{
    title: "Vegane Falafel mit Tahinisoße",
    image: "recipe_21.jpg",
    portions: 2,
    ingredients: [
      "200 g Kichererbsen (gekocht)",
      "1 Zwiebel",
      "2 Knoblauchzehen",
      "1 Bund Petersilie",
      "1 TL Kreuzkümmel",
      "2 EL Mehl",
      "Öl zum Braten",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Kichererbsen mit Zwiebel, Knoblauch, Petersilie pürieren.",
      "2. Mit Gewürzen und Mehl vermengen.",
      "3. Kleine Bällchen formen und in Öl braten.",
      "4. Optional: mit Tahinisoße servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
    ],
    categories: [
      "Hauptgericht",
      "Snack"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 460,
      protein_g: 18,
      carbohydrates_g: 35,
      fat_g: 24
    },
    id: "41002b4b-e062-4b44-b773-481edbba0ecf"
  },
{
    title: "Zucchini-Spaghetti mit Tomatensugo",
    image: "recipe_22.jpg",
    portions: 2,
    ingredients: [
      "2 Zucchini",
      "400 g gehackte Tomaten",
      "1 Knoblauchzehe",
      "1 Zwiebel",
      "1 EL Olivenöl",
      "Basilikum",
      "Oregano",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Zucchini mit Spiralschneider in Spaghetti schneiden.",
      "2. Zwiebel und Knoblauch anbraten.",
      "3. Tomaten, Gewürze zugeben, 15 Min. köcheln.",
      "4. Zucchini kurz anbraten oder roh verwenden.",
      "5. Mit Tomatensugo servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 280,
      protein_g: 7,
      carbohydrates_g: 18,
      fat_g: 18
    },
    id: "cdb8d1b3-0cb8-44bd-9995-0fa9d19747bb"
  },
{
    title: "Avocado-Toast mit Tomaten",
    image: "recipe_23.jpg",
    portions: 2,
    ingredients: [
      "4 Scheiben Vollkornbrot",
      "1 Avocado",
      "1 Knoblauchzehe",
      "6 Cherrytomaten",
      "1 EL Zitronensaft",
      "Salz",
      "Pfeffer",
      "Chiliflocken"
    ],
    instructions: [
      "1. Avocado zerdrücken, mit Knoblauch, Zitrone, Salz, Pfeffer würzen.",
      "2. Brote toasten, mit Avocadocreme bestreichen.",
      "3. Tomaten halbieren, darauf verteilen.",
      "4. Mit Chiliflocken bestreuen."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
    ],
    categories: [
      "Frühstück",
      "Snack"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 420,
      protein_g: 9,
      carbohydrates_g: 35,
      fat_g: 26
    },
    id: "3f11e91d-f8b3-4b65-ac9d-006869d09836"
  },
{
    title: "Süßkartoffel-Curry mit Kichererbsen",
    image: "recipe_24.jpg",
    portions: 2,
    ingredients: [
      "1 große Süßkartoffel",
      "1 Dose Kichererbsen",
      "1 Dose Kokosmilch",
      "1 Zwiebel",
      "1 TL Currypulver",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Süßkartoffel schälen und würfeln.",
      "2. Zwiebel anbraten, Curry zugeben.",
      "3. Kichererbsen, Süßkartoffel und Kokosmilch einrühren.",
      "4. 20 Min. köcheln lassen, abschmecken."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 540,
      protein_g: 15,
      carbohydrates_g: 50,
      fat_g: 28
    },
    id: "3941ac0b-fd76-4996-8c31-6b1026f06b3f"
  },
{
    title: "Veganes Bananen-Porridge",
    image: "recipe_25.jpg",
    portions: 2,
    ingredients: [
      "100 g Haferflocken",
      "300 ml Hafermilch",
      "1 Banane",
      "1 TL Zimt",
      "1 TL Ahornsirup",
      "Obst nach Wahl"
    ],
    instructions: [
      "1. Haferflocken mit Milch in Topf geben.",
      "2. Unter Rühren 5 Min. köcheln.",
      "3. Banane zerdrücken und unterheben.",
      "4. Mit Zimt und Ahornsirup abschmecken.",
      "5. Mit frischem Obst servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
    ],
    categories: [
      "Frühstück",
      "Kalorienarm"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 380,
      protein_g: 9,
      carbohydrates_g: 55,
      fat_g: 10
    },
    id: "59480252-8afb-40c6-a93b-14d806f18669"
  },
{
    title: "Gerösteter Blumenkohl mit Tahini-Dip",
    image: "recipe_26.jpg",
    portions: 2,
    ingredients: [
      "1 kleiner Blumenkohl",
      "2 EL Olivenöl",
      "1 TL Paprikapulver",
      "1 TL Kreuzkümmel",
      "Salz",
      "Pfeffer",
      "2 EL Tahini",
      "1 EL Zitronensaft",
      "Wasser"
    ],
    instructions: [
      "1. Blumenkohl in Röschen teilen, mit Öl und Gewürzen mischen.",
      "2. Auf Backblech bei 200 °C ca. 25 Min. rösten.",
      "3. Tahini mit Zitrone, Wasser zu cremigem Dip verrühren.",
      "4. Mit Blumenkohl servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Beilage",
      "Snack",
      "Kalorienarm"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 300,
      protein_g: 8,
      carbohydrates_g: 14,
      fat_g: 22
    },
    id: "18826ab9-80ed-48ea-af45-d0639c92a098"
  },
{
    title: "Vegane Reispfanne mit Gemüse",
    image: "recipe_27.jpg",
    portions: 2,
    ingredients: [
      "150 g Reis",
      "1 Paprika",
      "1 Zucchini",
      "1 Karotte",
      "1 Frühlingszwiebel",
      "2 EL Sojasauce",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Reis kochen und beiseite stellen.",
      "2. Gemüse in feine Stücke schneiden.",
      "3. In Öl anbraten, Reis zugeben.",
      "4. Mit Sojasauce abschmecken."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 440,
      protein_g: 10,
      carbohydrates_g: 55,
      fat_g: 18
    },
    id: "f3c9113e-328e-447f-89d5-e3fbe4cac91e"
  },
{
    title: "Rohkostsalat mit Apfel und Karotte",
    image: "recipe_28.jpg",
    portions: 2,
    ingredients: [
      "2 Karotten",
      "1 Apfel",
      "1 TL Zitronensaft",
      "1 EL Walnüsse",
      "1 TL Ahornsirup"
    ],
    instructions: [
      "1. Karotten und Apfel raspeln.",
      "2. Mit Zitrone, Sirup und gehackten Nüssen vermengen.",
      "3. Direkt servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Rohkost",
      "Glutenfrei",
    ],
    categories: [
      "Beilage",
      "Kalorienarm",
      "Snack"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 220,
      protein_g: 3,
      carbohydrates_g: 22,
      fat_g: 12
    },
    id: "0924066b-496f-4362-87d8-1f6915045e9d"
  },
{
    title: "Veganes Kartoffelgulasch",
    image: "recipe_29.jpg",
    portions: 2,
    ingredients: [
      "400 g Kartoffeln",
      "1 Paprika",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 EL Tomatenmark",
      "1 TL Paprika edelsüß",
      "400 ml Gemüsebrühe",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Kartoffeln, Paprika, Zwiebel würfeln.",
      "2. Alles anbraten, Tomatenmark zugeben.",
      "3. Mit Brühe ablöschen und 25 Min. köcheln.",
      "4. Würzen und servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 400,
      protein_g: 9,
      carbohydrates_g: 50,
      fat_g: 15
    },
    id: "d1153946-ce75-485e-b5d8-7b9b62988e6d"
  },
{
    title: "Vegane Schoko-Chia-Pudding",
    image: "recipe_30.jpg",
    portions: 2,
    ingredients: [
      "4 EL Chiasamen",
      "250 ml Mandelmilch",
      "1 EL Kakaopulver",
      "1 TL Ahornsirup",
      "Beeren zum Garnieren"
    ],
    instructions: [
      "1. Chiasamen mit Mandelmilch, Kakao und Sirup verrühren.",
      "2. Mindestens 4 Stunden quellen lassen.",
      "3. Mit Beeren garnieren und servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Dessert",
      "Kalorienarm",
      "Snack"
    ],
    preparation_time: "5 Minuten + Kühlzeit",
    nutrition: {
      calories: 280,
      protein_g: 7,
      carbohydrates_g: 12,
      fat_g: 20
    },
    id: "2b4bbf76-be5e-4afe-8250-62af98a4c9da"
  },
{
    title: "Hähnchenbrust mit Gemüse aus dem Ofen",
    image: "recipe_31.jpg",
    portions: 2,
    ingredients: [
      "2 Hähnchenbrüste",
      "1 Zucchini",
      "1 Paprika",
      "1 rote Zwiebel",
      "2 EL Olivenöl",
      "1 TL Rosmarin",
      "1 TL Paprika edelsüß",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 200 °C vorheizen.",
      "2. Gemüse grob schneiden, Hähnchen abspülen und trocken tupfen.",
      "3. Alles mit Öl und Gewürzen vermengen.",
      "4. In eine Auflaufform geben und ca. 30 Min. backen.",
      "5. Heiß servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 50,
      carbohydrates_g: 12,
      fat_g: 28
    },
    id: "95507a7a-8ba6-4e17-8bd2-7968cdef4591"
  },
{
    title: "Spaghetti Bolognese mit Rinderhack",
    image: "recipe_32.jpg",
    portions: 2,
    ingredients: [
      "160 g Spaghetti",
      "250 g Rinderhackfleisch",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "400 ml passierte Tomaten",
      "1 TL Oregano",
      "1 TL Basilikum",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Nudeln nach Packung kochen.",
      "2. Zwiebel und Knoblauch hacken, in Öl anbraten.",
      "3. Hackfleisch zugeben und krümelig braten.",
      "4. Tomaten und Gewürze einrühren, 15 Min. köcheln.",
      "5. Mit den Nudeln servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 680,
      protein_g: 38,
      carbohydrates_g: 55,
      fat_g: 32
    },
    id: "d7f427ea-d7fe-4dab-81b3-f3f44b91b2cb"
  },
{
    title: "Gefüllte Paprika mit Hackfleisch",
    image: "recipe_33.jpg",
    portions: 2,
    ingredients: [
      "2 große Paprika",
      "250 g gemischtes Hackfleisch",
      "1 kleine Zwiebel",
      "1 Knoblauchzehe",
      "1 Ei",
      "50 g Reis",
      "1 TL Paprikapulver",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Reis garen und abkühlen lassen.",
      "2. Paprika entkernen, Zwiebel und Knoblauch fein hacken.",
      "3. Hackfleisch mit Ei, Gewürzen, Reis, Zwiebel & Knoblauch mischen.",
      "4. Paprika füllen und in Auflaufform setzen.",
      "5. Bei 180 °C 35–40 Min. backen."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "50 Minuten",
    nutrition: {
      calories: 580,
      protein_g: 35,
      carbohydrates_g: 28,
      fat_g: 34
    },
    id: "2a278182-1fea-425d-b78c-ba22b560360d"
  },
{
    title: "Putengeschnetzeltes mit Champignons",
    image: "recipe_34.jpg",
    portions: 2,
    ingredients: [
      "300 g Putenbrust",
      "200 g Champignons",
      "1 Zwiebel",
      "100 ml Soja- oder Kochsahne",
      "1 TL Senf",
      "1 TL Paprikapulver",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Fleisch und Pilze in Streifen schneiden, Zwiebel hacken.",
      "2. Zwiebel in Öl anbraten, Fleisch zugeben, anbraten.",
      "3. Champignons mitbraten, Gewürze zugeben.",
      "4. Mit Sojasahne ablöschen, 10 Min. köcheln lassen."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 490,
      protein_g: 47,
      carbohydrates_g: 9,
      fat_g: 30
    },
    id: "2d65492a-d716-4a3b-a9c9-5cd24ac69b99"
  },
{
    title: "Rindersteak mit Ofenkartoffeln",
    image: "recipe_35.jpg",
    portions: 2,
    ingredients: [
      "2 Rindersteaks (je ca. 180 g)",
      "400 g kleine Kartoffeln",
      "2 EL Olivenöl",
      "1 TL Rosmarin",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 200 °C vorheizen.",
      "2. Kartoffeln waschen, mit Öl und Rosmarin vermengen, 30 Min. backen.",
      "3. Steaks trocken tupfen, würzen und in Pfanne 2–3 Min. pro Seite braten.",
      "4. 5 Min. ruhen lassen, mit Kartoffeln servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 670,
      protein_g: 42,
      carbohydrates_g: 30,
      fat_g: 40
    },
    id: "1bceaad1-9803-417a-a60c-f1010eee529d"
  },
{
    title: "Chicken Caesar Wrap",
    image: "recipe_36.jpg",
    portions: 2,
    ingredients: [
      "2 große Wraps",
      "200 g Hähnchenbrust",
      "4 Blätter Römersalat",
      "2 EL veganer Caesar-Dressing",
      "1 Tomate",
      "1 TL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Hähnchen in Streifen schneiden und in Öl braten, würzen.",
      "2. Salat und Tomate schneiden.",
      "3. Wraps mit Dressing bestreichen, alles einrollen.",
      "4. In der Pfanne kurz anrösten oder kalt servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Snack",
      "Hauptgericht"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 510,
      protein_g: 32,
      carbohydrates_g: 30,
      fat_g: 28
    },
    id: "d1923d3a-6916-4e99-8bb2-363cf3f100eb"
  },
{
    title: "Hackbällchen in Tomatensauce",
    image: "recipe_37.jpg",
    portions: 2,
    ingredients: [
      "300 g Rinderhack",
      "1 kleine Zwiebel",
      "1 Ei",
      "2 EL Semmelbrösel",
      "400 ml Tomatenpassata",
      "1 Knoblauchzehe",
      "Basilikum",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Hack mit Zwiebel, Ei, Bröseln, Salz, Pfeffer vermengen.",
      "2. Bällchen formen und in Öl anbraten.",
      "3. Tomatenpassata mit Knoblauch und Basilikum erhitzen.",
      "4. Hackbällchen in Sauce 10 Min. köcheln lassen."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 590,
      protein_g: 36,
      carbohydrates_g: 18,
      fat_g: 38
    },
    id: "d49b9c41-c14c-441c-bcc7-8f70e0af9f60"
  },
{
    title: "Hähnchensalat mit Avocado",
    image: "recipe_38.jpg",
    portions: 2,
    ingredients: [
      "200 g Hähnchenbrust",
      "1 Avocado",
      "1 kleine Salatgurke",
      "1 Handvoll Rucola",
      "1 EL Olivenöl",
      "1 TL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Hähnchen grillen oder braten, abkühlen lassen.",
      "2. Avocado und Gurke würfeln, Rucola waschen.",
      "3. Alles mit Öl und Zitrone vermengen.",
      "4. Abschmecken und servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Salat",
      "Kalorienarm",
      "Hauptgericht"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 430,
      protein_g: 32,
      carbohydrates_g: 9,
      fat_g: 28
    },
    id: "6d082736-1146-4d63-89f2-45c0369431a6"
  },
{
    title: "Würzige Hähnchenpfanne mit Paprika",
    image: "recipe_39.jpg",
    portions: 2,
    ingredients: [
      "250 g Hähnchenbrust",
      "1 rote Paprika",
      "1 gelbe Paprika",
      "1 Zwiebel",
      "1 TL Paprikapulver",
      "1 TL Currypulver",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Fleisch und Gemüse in Streifen schneiden.",
      "2. Zwiebel in Öl anbraten, dann Paprika und Hähnchen zugeben.",
      "3. Mit Gewürzen abschmecken, 10 Min. braten.",
      "4. Heiß servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 470,
      protein_g: 40,
      carbohydrates_g: 10,
      fat_g: 28
    },
    id: "f89d2346-23ed-4447-b7c6-ac3c1dc17191"
  },
{
    title: "Schweinefilet mit Kräuterkruste",
    image: "recipe_40.jpg",
    portions: 2,
    ingredients: [
      "300 g Schweinefilet",
      "1 EL Senf",
      "1 Knoblauchzehe",
      "1 TL Thymian",
      "1 TL Rosmarin",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 180 °C vorheizen.",
      "2. Filet mit Senf, Knoblauch, Kräutern einreiben.",
      "3. In Pfanne rundum anbraten.",
      "4. Im Ofen 20 Min. fertig garen.",
      "5. Kurz ruhen lassen und aufschneiden."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 45,
      carbohydrates_g: 4,
      fat_g: 32
    },
    id: "c9b3adb1-3de1-441d-bf67-cb2ee115a0c0"
  },
{
    title: "Hähnchencurry mit Reis",
    image: "recipe_41.jpg",
    portions: 2,
    ingredients: [
      "250 g Hähnchenbrust",
      "150 g Reis",
      "1 Zwiebel",
      "1 TL Currypaste",
      "1 Dose Kokosmilch",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Reis garen.",
      "2. Zwiebel würfeln, Hähnchen in Stücke schneiden.",
      "3. Öl erhitzen, Zwiebel und Fleisch anbraten.",
      "4. Currypaste und Kokosmilch zugeben, 15 Min. köcheln.",
      "5. Mit Reis servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 620,
      protein_g: 38,
      carbohydrates_g: 48,
      fat_g: 30
    },
    id: "a994584b-277f-4cac-bd4f-c74c1d16ae76"
  },
{
    title: "Hähnchenschenkel mit Süßkartoffeln",
    image: "recipe_42.jpg",
    portions: 2,
    ingredients: [
      "2 Hähnchenschenkel",
      "2 Süßkartoffeln",
      "1 TL Paprikapulver",
      "1 TL Knoblauchpulver",
      "2 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 200 °C vorheizen.",
      "2. Hähnchen und Süßkartoffeln würzen und mit Öl einreiben.",
      "3. Auf Backblech legen, 35–40 Min. backen.",
      "4. Heiß servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "45 Minuten",
    nutrition: {
      calories: 610,
      protein_g: 34,
      carbohydrates_g: 30,
      fat_g: 38
    },
    id: "32eb1ff9-76bc-4499-b9b0-eee199e0d716"
  },
{
    title: "Frikadellen mit Kartoffelpüree",
    image: "recipe_43.jpg",
    portions: 2,
    ingredients: [
      "300 g Hackfleisch",
      "1 Ei",
      "1 EL Senf",
      "2 EL Semmelbrösel",
      "400 g Kartoffeln",
      "2 EL Pflanzenmilch",
      "1 EL Margarine",
      "Salz",
      "Pfeffer",
      "Muskat"
    ],
    instructions: [
      "1. Hack mit Ei, Senf, Bröseln, Gewürzen mischen, Frikadellen formen.",
      "2. In Pfanne ca. 5–6 Min. pro Seite braten.",
      "3. Kartoffeln schälen, weich kochen, stampfen.",
      "4. Mit Milch, Margarine und Muskat abschmecken.",
      "5. Zusammen servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 680,
      protein_g: 35,
      carbohydrates_g: 38,
      fat_g: 40
    },
    id: "f78ea8d6-ceb0-4035-968e-23ed429e0800"
  },
{
    title: "Putensteak mit Grillgemüse",
    image: "recipe_44.jpg",
    portions: 2,
    ingredients: [
      "2 Putensteaks",
      "1 Zucchini",
      "1 Aubergine",
      "1 Paprika",
      "2 EL Olivenöl",
      "Salz",
      "Pfeffer",
      "Thymian"
    ],
    instructions: [
      "1. Gemüse in Scheiben schneiden, mit Öl und Gewürzen marinieren.",
      "2. Auf Grill oder Pfanne anbraten.",
      "3. Putensteaks grillen oder braten.",
      "4. Gemeinsam servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 460,
      protein_g: 42,
      carbohydrates_g: 12,
      fat_g: 24
    },
    id: "a5d8865e-966c-46e0-9d9e-b8c356c8d081"
  },
{
    title: "Hähnchen-Gemüse-Wok",
    image: "recipe_45.jpg",
    portions: 2,
    ingredients: [
      "250 g Hähnchenbrust",
      "1 Paprika",
      "1 Karotte",
      "1 Handvoll Zuckerschoten",
      "2 EL Sojasauce",
      "1 TL Sesamöl",
      "1 TL Ingwer",
      "Pfeffer"
    ],
    instructions: [
      "1. Fleisch und Gemüse in Streifen schneiden.",
      "2. Fleisch in Öl anbraten, Gemüse zugeben.",
      "3. Mit Sojasauce, Ingwer und Pfeffer würzen.",
      "4. Kurz scharf anbraten und servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 510,
      protein_g: 38,
      carbohydrates_g: 18,
      fat_g: 28
    },
    id: "9d421e11-9cfe-4c6c-8c0a-a6b88add6ddb"
  },
{
    title: "Lachsfilet mit Zitronen-Dill-Soße",
    image: "recipe_46.jpg",
    portions: 2,
    ingredients: [
      "2 Lachsfilets (je ca. 150 g)",
      "1 Bio-Zitrone",
      "1 Bund Dill",
      "1 Schalotte",
      "100 ml Hafercuisine",
      "1 TL Senf",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Den Lachs unter kaltem Wasser abspülen, trocken tupfen und mit Salz und Pfeffer würzen.",
      "2. Die Schalotte fein würfeln und in einem kleinen Topf mit etwas Öl glasig dünsten.",
      "3. Den Saft der Zitrone auspressen und zusammen mit Senf und Hafercuisine zur Schalotte geben.",
      "4. Die Sauce bei mittlerer Hitze 5 Minuten einköcheln lassen und mit gehacktem Dill verfeinern.",
      "5. In einer Pfanne das Olivenöl erhitzen und die Lachsfilets auf der Hautseite 3–4 Minuten anbraten, dann wenden und weitere 2 Minuten garen.",
      "6. Den Lachs mit der Soße servieren, z. B. mit Kartoffeln oder Reis."
    ],
    diet_types: [
      "Fisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 38,
      carbohydrates_g: 8,
      fat_g: 36
    },
    id: "f72b2cc4-cc3d-46a0-a523-ed8390e4eb05"
  },
{
    title: "Fischcurry mit Kokosmilch",
    image: "recipe_47.jpg",
    portions: 2,
    ingredients: [
      "300 g Kabeljaufilet",
      "1 Dose Kokosmilch",
      "1 rote Paprika",
      "1 Möhre",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 EL rote Currypaste",
      "1 EL Öl",
      "Salz",
      "Limettensaft"
    ],
    instructions: [
      "1. Den Fisch in mundgerechte Stücke schneiden und beiseite stellen.",
      "2. Zwiebel, Knoblauch, Möhre und Paprika in Streifen oder Würfel schneiden.",
      "3. Öl in einem großen Topf erhitzen und Zwiebel und Knoblauch glasig dünsten.",
      "4. Die Currypaste zugeben und kurz mitrösten, dann das Gemüse einrühren.",
      "5. Mit Kokosmilch ablöschen und etwa 10 Minuten köcheln lassen, bis das Gemüse gar, aber noch bissfest ist.",
      "6. Den Fisch vorsichtig unterheben und ca. 5–7 Minuten ziehen lassen, bis er gar ist.",
      "7. Mit Limettensaft und Salz abschmecken und servieren."
    ],
    diet_types: [
      "Fisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 480,
      protein_g: 34,
      carbohydrates_g: 15,
      fat_g: 30
    },
    id: "48f8b685-b7dc-4ee3-937b-3bc06a63164f"
  },
{
    title: "Thunfischsalat mit weißen Bohnen",
    image: "recipe_48.jpg",
    portions: 2,
    ingredients: [
      "1 Dose Thunfisch in Wasser",
      "200 g weiße Bohnen (aus der Dose)",
      "1 rote Zwiebel",
      "8 Cherrytomaten",
      "1 EL Olivenöl",
      "1 TL Balsamico",
      "1 TL Senf",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Die Bohnen in ein Sieb geben, gut abspülen und abtropfen lassen.",
      "2. Den Thunfisch abgießen und mit einer Gabel etwas zerpflücken.",
      "3. Die Zwiebel fein würfeln, Tomaten halbieren.",
      "4. Alles in einer Schüssel vermengen und mit Öl, Balsamico, Senf, Salz und Pfeffer anmachen.",
      "5. Vor dem Servieren ca. 10 Minuten durchziehen lassen."
    ],
    diet_types: [
      "Fisch",
      "Glutenfrei",
      "Kalorienarm",
    ],
    categories: [
      "Salat",
      "Beilage",
      "Snack"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 360,
      protein_g: 28,
      carbohydrates_g: 15,
      fat_g: 18
    },
    id: "cebc4261-1729-492a-9e56-51efe1cfbbbe"
  },
{
    title: "Forelle Müllerin Art",
    image: "recipe_49.jpg",
    portions: 2,
    ingredients: [
      "2 küchenfertige Forellen",
      "50 g Mehl",
      "2 EL Butter",
      "1 Zitrone",
      "Salz",
      "Pfeffer",
      "Petersilie"
    ],
    instructions: [
      "1. Die Forellen innen und außen waschen und trocken tupfen.",
      "2. Leicht mit Salz und Pfeffer würzen und in Mehl wenden.",
      "3. In einer großen Pfanne Butter erhitzen.",
      "4. Forellen auf jeder Seite ca. 5 Minuten goldbraun braten.",
      "5. Mit Zitronenscheiben und frischer Petersilie servieren."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 540,
      protein_g: 40,
      carbohydrates_g: 8,
      fat_g: 36
    },
    id: "b32c25ac-8f1c-4f3a-820d-f81648416f15"
  },
{
    title: "Ofenlachs mit Kräuterkruste",
    image: "recipe_50.jpg",
    portions: 2,
    ingredients: [
      "2 Lachsfilets",
      "2 Scheiben Vollkornbrot",
      "1 Knoblauchzehe",
      "1 TL Senf",
      "1 EL Zitronensaft",
      "1 Bund Petersilie",
      "1 TL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Den Ofen auf 180 °C Umluft vorheizen.",
      "2. Brot entrinden und klein würfeln, mit Knoblauch, Öl, Petersilie, Zitronensaft und Senf im Mixer zu einer groben Paste verarbeiten.",
      "3. Lachsfilets salzen und pfeffern, die Kräuter-Brot-Masse obendrauf drücken.",
      "4. Auf ein mit Backpapier belegtes Blech legen und ca. 15 Minuten backen.",
      "5. Mit Beilagen deiner Wahl servieren."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 510,
      protein_g: 36,
      carbohydrates_g: 12,
      fat_g: 32
    },
    id: "58586e50-f2e0-49cd-9d96-153f18e66ef5"
  },
{
    title: "Gebratene Garnelen mit Knoblauch und Chili",
    image: "recipe_51.jpg",
    portions: 2,
    ingredients: [
      "250 g Garnelen (geschält)",
      "2 Knoblauchzehen",
      "1 rote Chilischote",
      "1 EL Olivenöl",
      "1 TL Zitronensaft",
      "2 EL gehackte Petersilie",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Die Garnelen unter kaltem Wasser abspülen, gut abtropfen lassen und mit Küchenpapier trocken tupfen.",
      "2. Knoblauchzehen schälen und fein hacken, die Chilischote längs halbieren, entkernen und in feine Ringe schneiden.",
      "3. In einer großen Pfanne das Olivenöl auf mittlerer Stufe erhitzen.",
      "4. Zuerst die Garnelen hineingeben und von jeder Seite etwa 1–2 Minuten anbraten, bis sie rosa und leicht gebräunt sind.",
      "5. Dann den Knoblauch und die Chili hinzufügen und alles weitere 2 Minuten unter Rühren anbraten, ohne dass der Knoblauch zu dunkel wird.",
      "6. Mit Zitronensaft ablöschen, mit Salz und Pfeffer abschmecken.",
      "7. Die gehackte Petersilie darüberstreuen und sofort servieren – ideal zu Baguette oder Reis."
    ],
    diet_types: [
      "Fisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht",
      "Snack"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 320,
      protein_g: 28,
      carbohydrates_g: 2,
      fat_g: 22
    },
    id: "8a7c21ab-1716-4344-9d21-e9ff4042450c"
  },
{
    title: "Fischfrikadellen mit Kartoffelstampf",
    image: "recipe_52.jpg",
    portions: 2,
    ingredients: [
      "300 g Seelachsfilet",
      "1 Ei",
      "2 EL Semmelbrösel",
      "1 kleine Zwiebel",
      "1 TL Senf",
      "400 g Kartoffeln",
      "2 EL Pflanzenmilch",
      "1 EL Margarine",
      "Salz",
      "Pfeffer",
      "Muskat"
    ],
    instructions: [
      "1. Die Kartoffeln schälen, in Stücke schneiden und in Salzwasser ca. 20 Minuten weich kochen.",
      "2. Währenddessen das Seelachsfilet klein schneiden und mit Ei, Bröseln, fein gewürfelter Zwiebel, Senf, Salz und Pfeffer in einer Schüssel vermengen.",
      "3. Die Masse mit den Händen zu kleinen Frikadellen formen.",
      "4. Etwas Öl in einer Pfanne erhitzen und die Frikadellen bei mittlerer Hitze ca. 5 Minuten pro Seite goldbraun braten.",
      "5. Die gekochten Kartoffeln abgießen, Milch und Margarine zugeben und mit einem Kartoffelstampfer grob oder fein zerdrücken.",
      "6. Mit Salz, Pfeffer und etwas Muskat abschmecken.",
      "7. Die Frikadellen zusammen mit dem Kartoffelstampf anrichten."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 590,
      protein_g: 34,
      carbohydrates_g: 40,
      fat_g: 28
    },
    id: "272a1567-3c0a-461a-ba0f-9273ef6deec3"
  },
{
    title: "Thunfisch-Pasta mit Tomaten und Oliven",
    image: "recipe_53.jpg",
    portions: 2,
    ingredients: [
      "160 g Vollkornnudeln",
      "1 Dose Thunfisch in Öl",
      "10 Kirschtomaten",
      "1 kleine Zwiebel",
      "1 Knoblauchzehe",
      "2 EL schwarze Oliven",
      "1 EL Olivenöl",
      "Basilikum",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Die Nudeln nach Packungsanweisung in reichlich Salzwasser al dente kochen.",
      "2. In der Zwischenzeit die Zwiebel und den Knoblauch fein hacken, Tomaten halbieren und Oliven in Ringe schneiden.",
      "3. In einer großen Pfanne das Olivenöl erhitzen, die Zwiebel und den Knoblauch darin glasig anbraten.",
      "4. Den Thunfisch samt etwas Öl aus der Dose dazugeben und kurz mitbraten.",
      "5. Tomaten und Oliven hinzufügen und alles für 5 Minuten leicht köcheln lassen.",
      "6. Die gegarten Nudeln abgießen und direkt in die Pfanne geben.",
      "7. Mit frisch gehacktem Basilikum, Salz und Pfeffer abschmecken und servieren."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 570,
      protein_g: 32,
      carbohydrates_g: 45,
      fat_g: 28
    },
    id: "c8d9fdeb-c36d-4a8c-9a47-384aa91e3f5c"
  },
{
    title: "Gebratener Zander auf Linsengemüse",
    image: "recipe_54.jpg",
    portions: 2,
    ingredients: [
      "2 Zanderfilets",
      "100 g rote Linsen",
      "1 Möhre",
      "1 Stange Sellerie",
      "1 Schalotte",
      "200 ml Gemüsebrühe",
      "1 EL Öl",
      "1 TL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Die Linsen mit der Brühe in einem Topf zum Kochen bringen und ca. 15 Minuten köcheln lassen.",
      "2. Währenddessen das Gemüse klein würfeln und die Schalotte fein hacken.",
      "3. In einer Pfanne mit etwas Öl Schalotte, Möhre und Sellerie 5 Minuten anschwitzen.",
      "4. Gegarte Linsen untermischen, salzen, pfeffern und warm halten.",
      "5. Die Zanderfilets auf der Hautseite salzen und in einer beschichteten Pfanne in Öl 4–5 Minuten knusprig braten.",
      "6. Zum Schluss wenden und noch 1–2 Minuten fertig garen.",
      "7. Mit etwas Zitronensaft beträufeln und zusammen mit dem Linsengemüse servieren."
    ],
    diet_types: [
      "Fisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 530,
      protein_g: 38,
      carbohydrates_g: 22,
      fat_g: 30
    },
    id: "e6ec97b7-0c48-48c4-9253-77934cd01f29"
  },
{
    title: "Fischstäbchen-Bowl mit Quinoa und Gemüse",
    image: "recipe_55.jpg",
    portions: 2,
    ingredients: [
      "6 Fischstäbchen",
      "120 g Quinoa",
      "1 Avocado",
      "1 Karotte",
      "1/2 Gurke",
      "2 EL Sojajoghurt",
      "1 TL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Quinoa nach Packung mit Wasser gar kochen und abkühlen lassen.",
      "2. Die Fischstäbchen nach Packung in Pfanne oder Ofen goldbraun zubereiten.",
      "3. Avocado in Scheiben, Karotte in feine Stifte und Gurke in Würfel schneiden.",
      "4. Sojajoghurt mit Zitrone, Salz und Pfeffer zu einem Dip verrühren.",
      "5. Alle Zutaten in einer Schüssel nebeneinander anrichten.",
      "6. Dip in die Mitte geben und Bowl servieren."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Hauptgericht",
      "Bowl",
      "Snack"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 580,
      protein_g: 30,
      carbohydrates_g: 38,
      fat_g: 32
    },
    id: "f0471a6b-bf8e-4d79-a2df-25e1f0a01434"
  },
{
    title: "Lachs-Spinat-Lasagne",
    image: "recipe_56.jpg",
    portions: 2,
    ingredients: [
      "200 g frischer Lachs",
      "200 g TK-Spinat",
      "6 Lasagneplatten",
      "100 ml Hafercuisine",
      "1 Knoblauchzehe",
      "1 kleine Zwiebel",
      "1 EL Öl",
      "Muskat",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Den Spinat auftauen und gut ausdrücken.",
      "2. Zwiebel und Knoblauch fein hacken und in Öl glasig braten.",
      "3. Spinat zufügen, mit Salz, Pfeffer und Muskat abschmecken.",
      "4. Lachs würfeln und roh lassen.",
      "5. In einer Auflaufform abwechselnd Lasagneplatten, Spinat und Lachsstücke schichten.",
      "6. Zwischendurch etwas Hafercuisine über die Schichten geben.",
      "7. Bei 180 °C Umluft ca. 35 Minuten backen."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "45 Minuten",
    nutrition: {
      calories: 620,
      protein_g: 34,
      carbohydrates_g: 42,
      fat_g: 32
    },
    id: "6d7c9f38-8120-4eb5-b33f-ec3bf62976eb"
  },
{
    title: "Makrelenaufstrich mit Frischkäse",
    image: "recipe_57.jpg",
    portions: 2,
    ingredients: [
      "100 g geräucherte Makrele",
      "100 g Frischkäse",
      "1 TL Zitronensaft",
      "1 EL Schnittlauch",
      "Pfeffer"
    ],
    instructions: [
      "1. Die Makrele von Haut und Gräten befreien und mit einer Gabel zerdrücken.",
      "2. Den Frischkäse und Zitronensaft zugeben.",
      "3. Alles mit einer Gabel gut vermengen, bis eine streichfähige Masse entsteht.",
      "4. Mit Pfeffer und Schnittlauch abschmecken.",
      "5. Im Kühlschrank etwas durchziehen lassen und auf Brot servieren."
    ],
    diet_types: [
      "Fisch",
      "Keto",
      "Glutenfrei",
    ],
    categories: [
      "Snack",
      "Frühstück",
      "Aufstrich"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 340,
      protein_g: 20,
      carbohydrates_g: 3,
      fat_g: 28
    },
    id: "a71acfc2-69d4-4d34-a456-fea1d23c498e"
  },
{
    title: "Gebratene Sardinen mit Zitronenöl",
    image: "recipe_58.jpg",
    portions: 2,
    ingredients: [
      "6 frische Sardinen (ausgenommen)",
      "2 EL Olivenöl",
      "1 Bio-Zitrone",
      "1 Knoblauchzehe",
      "Petersilie",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Die Sardinen waschen, trocknen und leicht salzen.",
      "2. Olivenöl mit Zitronensaft, gehacktem Knoblauch und Petersilie vermengen.",
      "3. Eine Grillpfanne erhitzen, Sardinen darin je Seite 2–3 Min. braten.",
      "4. Mit Zitronenöl beträufeln und servieren."
    ],
    diet_types: [
      "Fisch",
      "Keto",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 410,
      protein_g: 32,
      carbohydrates_g: 1,
      fat_g: 30
    },
    id: "fb2bbbbe-b663-4bff-a93a-795fd904381b"
  },
{
    title: "Zitronen-Kräuter-Forelle im Ofen",
    image: "recipe_59.jpg",
    portions: 2,
    ingredients: [
      "2 ganze Forellen",
      "1 Zitrone",
      "1 Bund Petersilie",
      "1 Zweig Thymian",
      "2 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 180 °C vorheizen.",
      "2. Die Forellen innen und außen waschen, trocken tupfen und salzen.",
      "3. Zitrone in Scheiben schneiden und mit Kräutern in die Bauchhöhlen geben.",
      "4. Außen mit Öl bestreichen, pfeffern.",
      "5. In Backpapier einwickeln und 25 Minuten backen.",
      "6. Direkt servieren mit Salat oder Kartoffeln."
    ],
    diet_types: [
      "Fisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 480,
      protein_g: 36,
      carbohydrates_g: 4,
      fat_g: 32
    },
    id: "65d63001-2057-4d0e-aeec-51ed85d937d2"
  },
{
    title: "Fisch-Tacos mit Rotkohl und Limette",
    image: "recipe_60.jpg",
    portions: 2,
    ingredients: [
      "2 kleine Fischfilets (z. B. Kabeljau)",
      "4 kleine Tortillas",
      "100 g Rotkohl",
      "1 Karotte",
      "1 EL Limettensaft",
      "1 TL Joghurt",
      "1 TL Mayonnaise",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Fisch in mundgerechte Stücke schneiden, salzen und pfeffern.",
      "2. In Öl von beiden Seiten je 3 Min. goldbraun braten.",
      "3. Rotkohl und Karotte fein hobeln, mit Limettensaft marinieren.",
      "4. Joghurt und Mayo zu einem schnellen Dressing verrühren.",
      "5. Tortillas kurz in Pfanne erwärmen.",
      "6. Alles in die Tortillas füllen und sofort servieren."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Snack",
      "Hauptgericht",
      "Streetfood"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 550,
      protein_g: 32,
      carbohydrates_g: 30,
      fat_g: 30
    },
    id: "a02077f3-f179-4020-abd9-7f9bd4947a82"
  },
{
    title: "Zucchini-Nudeln mit Avocado-Pesto",
    image: "recipe_61.jpg",
    portions: 2,
    ingredients: [
      "2 Zucchini",
      "1 reife Avocado",
      "30 g Pinienkerne",
      "1 Knoblauchzehe",
      "1 Bund Basilikum",
      "2 EL Zitronensaft",
      "2 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Die Zucchini mit einem Spiralschneider in feine Nudeln schneiden.",
      "2. Pinienkerne ohne Fett in einer Pfanne leicht rösten.",
      "3. Für das Pesto die Avocado, Basilikum, Knoblauch, Zitronensaft, Olivenöl und geröstete Pinienkerne in einen Mixer geben und zu einer cremigen Masse pürieren.",
      "4. Mit Salz und Pfeffer abschmecken.",
      "5. Die Zucchininudeln kurz in einer Pfanne mit etwas Öl anwärmen (nicht kochen, damit sie bissfest bleiben).",
      "6. Pesto unterheben und direkt servieren."
    ],
    diet_types: [
      "Keto",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 460,
      protein_g: 8,
      carbohydrates_g: 10,
      fat_g: 40
    },
    id: "d56c3bd6-33a1-4ade-ada2-be3d60c34d67"
  },
{
    title: "Keto-Hähnchenbrust mit Brokkoli und Käse",
    image: "recipe_62.jpg",
    portions: 2,
    ingredients: [
      "2 Hähnchenbrüste",
      "300 g Brokkoli",
      "100 g Frischkäse",
      "50 g geriebener Käse",
      "1 EL Olivenöl",
      "1 TL Paprikapulver",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Hähnchenbrust waschen, trocknen und mit Paprika, Salz und Pfeffer würzen.",
      "2. Öl in einer Pfanne erhitzen, Fleisch beidseitig scharf anbraten und anschließend bei niedriger Hitze durchgaren.",
      "3. Brokkoli in Röschen teilen und in wenig Wasser oder Dampf bissfest garen.",
      "4. Den Frischkäse in einem kleinen Topf erwärmen, den geriebenen Käse unterrühren und schmelzen lassen.",
      "5. Mit Salz und Pfeffer abschmecken und Brokkoli damit vermengen.",
      "6. Hähnchen auf Teller geben und Brokkoli-Käse-Mischung daneben anrichten."
    ],
    diet_types: [
      "Keto",
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 560,
      protein_g: 48,
      carbohydrates_g: 9,
      fat_g: 34
    },
    id: "682dd7dd-4ed2-450b-8125-4d15e1a97184"
  },
{
    title: "Keto-Lachs auf Spinatbett",
    image: "recipe_63.jpg",
    portions: 2,
    ingredients: [
      "2 Lachsfilets",
      "300 g frischer Blattspinat",
      "1 Schalotte",
      "2 EL Frischkäse",
      "1 EL Butter",
      "1 TL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Lachsfilets mit etwas Zitronensaft, Salz und Pfeffer marinieren.",
      "2. Schalotte fein würfeln und in einer Pfanne mit Butter anschwitzen.",
      "3. Den gewaschenen Spinat portionsweise zugeben und zusammenfallen lassen.",
      "4. Frischkäse unterrühren, mit Salz und Pfeffer würzen.",
      "5. In einer zweiten Pfanne die Lachsfilets von beiden Seiten je 3–4 Minuten anbraten.",
      "6. Spinat auf Tellern anrichten und den Lachs darauf legen."
    ],
    diet_types: [
      "Keto",
      "Fisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 540,
      protein_g: 42,
      carbohydrates_g: 7,
      fat_g: 36
    },
    id: "8812a80e-55e3-4291-87ee-5dc7084cbab3"
  },
{
    title: "Eiersalat mit Speck und Schnittlauch",
    image: "recipe_64.jpg",
    portions: 2,
    ingredients: [
      "4 Eier",
      "80 g Bacon",
      "100 g Mayonnaise",
      "1 TL Senf",
      "1 TL Zitronensaft",
      "2 EL gehackter Schnittlauch",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Eier hart kochen, abschrecken, schälen und grob würfeln.",
      "2. Bacon in Streifen schneiden und in einer Pfanne knusprig braten.",
      "3. Mayonnaise mit Senf, Zitronensaft, Salz und Pfeffer in einer Schüssel verrühren.",
      "4. Eier und Bacon unterheben, mit Schnittlauch verfeinern.",
      "5. Vor dem Servieren 10 Minuten durchziehen lassen."
    ],
    diet_types: [
      "Keto",
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Frühstück",
      "Snack",
      "Kalorienarm"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 22,
      carbohydrates_g: 3,
      fat_g: 44
    },
    id: "ac144bff-ffc7-4c57-91b8-622a28d502f8"
  },
{
    title: "Zucchini-Pizza mit Mozzarella",
    image: "recipe_65.jpg",
    portions: 2,
    ingredients: [
      "2 große Zucchini",
      "100 g Tomatensauce",
      "125 g Mozzarella",
      "1 TL Oregano",
      "2 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 200 °C vorheizen.",
      "2. Zucchini längs in dicke Scheiben schneiden und mit etwas Öl bepinseln.",
      "3. Auf ein Backblech legen und im Ofen 10 Minuten vorbacken.",
      "4. Danach mit Tomatensauce bestreichen, Mozzarella darauf verteilen und mit Oregano bestreuen.",
      "5. Weitere 10 Minuten backen, bis der Käse goldbraun ist.",
      "6. Nach Geschmack mit Pfeffer verfeinern und servieren."
    ],
    diet_types: [
      "Keto",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Snack"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 420,
      protein_g: 20,
      carbohydrates_g: 8,
      fat_g: 34
    },
    id: "aa15637a-5ef0-46d6-9b6c-f595149f5f6d"
  },
{
    title: "Keto-Rührei mit Champignons",
    image: "recipe_66.jpg",
    portions: 2,
    ingredients: [
      "4 Eier",
      "200 g Champignons",
      "1 EL Butter",
      "2 EL Sahne",
      "Schnittlauch",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Champignons putzen und in Scheiben schneiden.",
      "2. Butter in einer Pfanne erhitzen und Pilze 5 Minuten braten.",
      "3. Eier mit Sahne verquirlen, salzen und pfeffern.",
      "4. Eiermasse zu den Pilzen geben und bei mittlerer Hitze langsam stocken lassen.",
      "5. Mit frischem Schnittlauch bestreuen und servieren."
    ],
    diet_types: [
      "Keto",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Frühstück",
      "Kalorienarm"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 390,
      protein_g: 20,
      carbohydrates_g: 4,
      fat_g: 32
    },
    id: "f8a6c030-a0d5-487f-b7a3-ab1e534ce6ac"
  },
{
    title: "Keto-Burger mit Salat statt Brötchen",
    image: "recipe_67.jpg",
    portions: 2,
    ingredients: [
      "300 g Rinderhackfleisch",
      "1 Ei",
      "2 große Salatblätter",
      "2 Tomatenscheiben",
      "2 Gurkenscheiben",
      "1 TL Senf",
      "1 TL Mayonnaise",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Hackfleisch mit Ei, Salz und Pfeffer vermengen und 2 Patties formen.",
      "2. In einer heißen Pfanne von beiden Seiten jeweils 4–5 Minuten braten.",
      "3. Salatblätter waschen und trocknen.",
      "4. Jeweils ein Blatt als Unterseite, darauf Patty, Gemüse und Sauce schichten und mit zweitem Blatt abdecken.",
      "5. Direkt servieren, z. B. mit einer Gurkenbeilage."
    ],
    diet_types: [
      "Keto",
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Snack"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 580,
      protein_g: 36,
      carbohydrates_g: 5,
      fat_g: 44
    },
    id: "510dc2bb-67fe-4731-94bf-826929817531"
  },
{
    title: "Auberginen-Röllchen mit Frischkäsefüllung",
    image: "recipe_68.jpg",
    portions: 2,
    ingredients: [
      "1 große Aubergine",
      "100 g Frischkäse",
      "1 Knoblauchzehe",
      "1 EL Olivenöl",
      "1 EL gehackte Kräuter",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Aubergine längs in dünne Scheiben schneiden und mit etwas Öl bestreichen.",
      "2. In einer Grillpfanne je Seite 2–3 Minuten braten.",
      "3. Frischkäse mit gepresstem Knoblauch, Kräutern, Salz und Pfeffer verrühren.",
      "4. Je 1 TL Frischkäse auf eine Auberginenscheibe geben, aufrollen und mit Zahnstocher fixieren.",
      "5. Optional: 5 Minuten bei 180 °C im Ofen erwärmen."
    ],
    diet_types: [
      "Keto",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Snack",
      "Beilage"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 340,
      protein_g: 10,
      carbohydrates_g: 6,
      fat_g: 30
    },
    id: "8abceec9-c6a9-40fb-8d5a-ac0a4ac48b57"
  },
{
    title: "Blumenkohlreis mit Hähnchen",
    image: "recipe_69.jpg",
    portions: 2,
    ingredients: [
      "1 kleiner Blumenkohl",
      "2 Hähnchenbrustfilets",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 TL Paprikapulver",
      "2 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Blumenkohl grob zerteilen und in der Küchenmaschine zu einer reisähnlichen Konsistenz zerkleinern.",
      "2. Zwiebel und Knoblauch fein hacken.",
      "3. Hähnchenbrust in Würfel schneiden, mit Salz, Pfeffer und Paprika würzen.",
      "4. In einer Pfanne 1 EL Öl erhitzen, Hähnchenstücke rundum anbraten und beiseite stellen.",
      "5. Im restlichen Öl Zwiebel und Knoblauch glasig braten, Blumenkohlreis zugeben und 5–7 Minuten anbraten.",
      "6. Hähnchen zurück in die Pfanne geben, alles gut vermengen und heiß servieren."
    ],
    diet_types: [
      "Keto",
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 480,
      protein_g: 42,
      carbohydrates_g: 9,
      fat_g: 28
    },
    id: "b7d00961-40c6-42dc-863f-a675d73902c5"
  },
{
    title: "Keto-Omelette mit Käse und Spinat",
    image: "recipe_70.jpg",
    portions: 2,
    ingredients: [
      "4 Eier",
      "50 ml Sahne",
      "100 g Babyspinat",
      "50 g geriebener Käse",
      "1 EL Butter",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Eier mit der Sahne in einer Schüssel verquirlen, mit Salz und Pfeffer würzen.",
      "2. Spinat gründlich waschen und trockenschleudern.",
      "3. In einer großen Pfanne Butter erhitzen und Spinat 1–2 Minuten zusammenfallen lassen.",
      "4. Die Eiermasse darüber gießen und bei niedriger Hitze stocken lassen.",
      "5. Kurz vor Ende der Garzeit den Käse darüber streuen und das Omelette zusammenklappen.",
      "6. Noch warm servieren."
    ],
    diet_types: [
      "Keto",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Frühstück",
      "Hauptgericht"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 410,
      protein_g: 24,
      carbohydrates_g: 5,
      fat_g: 32
    },
    id: "6ceca33e-d16e-4b3e-9ad7-5408d17211c5"
  },
{
    title: "Thunfisch-Avocado-Salat",
    image: "recipe_71.jpg",
    portions: 2,
    ingredients: [
      "1 Dose Thunfisch",
      "1 Avocado",
      "1/2 rote Zwiebel",
      "1 TL Zitronensaft",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Thunfisch abgießen, Avocado würfeln, Zwiebel fein hacken.",
      "2. Alles in einer Schüssel vermengen.",
      "3. Mit Zitronensaft, Olivenöl, Salz und Pfeffer abschmecken.",
      "4. Nach Belieben mit Salatblättern anrichten oder direkt servieren."
    ],
    diet_types: [
      "Keto",
      "Fisch",
      "Glutenfrei",
    ],
    categories: [
      "Snack",
      "Kalorienarm"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 380,
      protein_g: 22,
      carbohydrates_g: 4,
      fat_g: 30
    },
    id: "44a85497-81c5-40e9-ada2-2bb2dcd3e34f"
  },
{
    title: "Gefüllte Paprika mit Hack und Feta",
    image: "recipe_72.jpg",
    portions: 2,
    ingredients: [
      "2 große Paprika",
      "250 g Rinderhackfleisch",
      "100 g Feta",
      "1 kleine Zwiebel",
      "1 EL Tomatenmark",
      "1 TL Oregano",
      "2 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Paprika längs halbieren, entkernen und beiseitelegen.",
      "2. Zwiebel würfeln, in Öl anbraten, Hackfleisch zugeben und krümelig braten.",
      "3. Tomatenmark, Oregano, Salz und Pfeffer zugeben, 5 Minuten köcheln lassen.",
      "4. Feta zerbröseln und unter das Hack mischen.",
      "5. Paprikahälften mit der Mischung füllen, in eine Auflaufform geben.",
      "6. Bei 180 °C ca. 20–25 Minuten im Ofen backen."
    ],
    diet_types: [
      "Keto",
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 560,
      protein_g: 38,
      carbohydrates_g: 8,
      fat_g: 40
    },
    id: "b4711cb5-05ce-4105-97b7-0f3ebc0369fa"
  },
{
    title: "Keto-Pfannkuchen mit Frischkäsefüllung",
    image: "recipe_73.jpg",
    portions: 2,
    ingredients: [
      "3 Eier",
      "50 g Frischkäse",
      "1 EL Mandelmehl",
      "1 TL Butter",
      "1 TL Xylit (optional)",
      "1/2 TL Zimt"
    ],
    instructions: [
      "1. Eier, Frischkäse, Mandelmehl und optional Xylit in einer Schüssel glatt rühren.",
      "2. In einer Pfanne Butter erhitzen.",
      "3. Die Masse in zwei Portionen aufteilen und je einen Pfannkuchen bei mittlerer Hitze goldbraun backen.",
      "4. Mit etwas Zimt bestäuben oder mit zuckerfreier Füllung servieren (z. B. Beeren, Mascarpone etc.)."
    ],
    diet_types: [
      "Keto",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Frühstück",
      "Dessert"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 350,
      protein_g: 14,
      carbohydrates_g: 4,
      fat_g: 28
    },
    id: "c5a646c5-3386-41a8-9337-59d1e99a8b6f"
  },
{
    title: "Mozzarella-Tomaten-Auflauf mit Pesto",
    image: "recipe_74.jpg",
    portions: 2,
    ingredients: [
      "2 große Tomaten",
      "125 g Mozzarella",
      "2 EL Pesto (am besten selbstgemacht)",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer",
      "Basilikum"
    ],
    instructions: [
      "1. Tomaten in Scheiben schneiden, Mozzarella abtropfen lassen und ebenfalls in Scheiben schneiden.",
      "2. Eine kleine Auflaufform mit Olivenöl einfetten.",
      "3. Tomaten- und Mozzarellascheiben abwechselnd hineinschichten.",
      "4. Mit Pesto beträufeln, mit Salz und Pfeffer würzen.",
      "5. Im Ofen bei 180 °C ca. 15–20 Minuten backen, bis der Käse geschmolzen ist.",
      "6. Mit frischem Basilikum servieren."
    ],
    diet_types: [
      "Keto",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Beilage",
      "Snack",
      "Kalorienarm"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 420,
      protein_g: 18,
      carbohydrates_g: 6,
      fat_g: 36
    },
    id: "0dba31ce-271c-4b67-b8b5-8f6a956fc153"
  },
{
    title: "Keto-Suppe mit Lachs und Kokosmilch",
    image: "recipe_75.jpg",
    portions: 2,
    ingredients: [
      "200 g Lachsfilet",
      "1 Dose Kokosmilch",
      "1 Zucchini",
      "1 kleine Möhre",
      "1 Frühlingszwiebel",
      "1 TL rote Currypaste",
      "1 TL Limettensaft",
      "Salz",
      "Koriander"
    ],
    instructions: [
      "1. Lachs in mundgerechte Würfel schneiden.",
      "2. Zucchini und Möhre in feine Streifen schneiden, Frühlingszwiebel in Ringe.",
      "3. In einem Topf Kokosmilch erhitzen, Currypaste einrühren.",
      "4. Gemüse und Lachs zugeben und 8–10 Minuten leicht köcheln lassen.",
      "5. Mit Limettensaft, Salz und frischem Koriander abschmecken und heiß servieren."
    ],
    diet_types: [
      "Keto",
      "Fisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Suppe"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 540,
      protein_g: 30,
      carbohydrates_g: 8,
      fat_g: 40
    },
    id: "094f1bdd-49ab-4870-bb2f-35c8a52a30dd"
  },
{
    title: "Rindergeschnetzeltes mit Paprika",
    image: "recipe_76.jpg",
    portions: 2,
    ingredients: [
      "300 g Rindergeschnetzeltes",
      "1 rote Paprika",
      "1 gelbe Paprika",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "100 ml Sahne",
      "1 TL Paprikapulver",
      "2 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Fleisch in Streifen schneiden, falls nicht bereits geschnitten.",
      "2. Zwiebel und Knoblauch fein würfeln, Paprika in Streifen schneiden.",
      "3. Öl in einer großen Pfanne erhitzen, das Fleisch scharf anbraten und herausnehmen.",
      "4. Im Bratfett Zwiebeln und Knoblauch glasig dünsten.",
      "5. Paprikastreifen zugeben und 5 Minuten mitbraten.",
      "6. Fleisch zurück in die Pfanne geben, mit Sahne ablöschen.",
      "7. Paprikapulver einrühren, mit Salz und Pfeffer abschmecken.",
      "8. Kurz einköcheln lassen und servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 610,
      protein_g: 40,
      carbohydrates_g: 12,
      fat_g: 42
    },
    id: "0f6bfec4-fe37-4fb5-92a8-369badc912f6"
  },
{
    title: "Hähnchen-Curry mit Kokosmilch",
    image: "recipe_77.jpg",
    portions: 2,
    ingredients: [
      "300 g Hähnchenbrust",
      "1 Dose Kokosmilch",
      "1 Zucchini",
      "1 Karotte",
      "1 TL rote Currypaste",
      "1 TL Sojasauce",
      "1 EL Öl",
      "Salz"
    ],
    instructions: [
      "1. Fleisch in Würfel schneiden, Gemüse in Streifen.",
      "2. Öl erhitzen, Fleisch rundum anbraten.",
      "3. Gemüse zugeben, kurz mitbraten.",
      "4. Currypaste einrühren, mit Kokosmilch ablöschen.",
      "5. 10 Minuten leicht köcheln lassen.",
      "6. Mit Sojasauce und Salz abschmecken."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 540,
      protein_g: 38,
      carbohydrates_g: 10,
      fat_g: 36
    },
    id: "7e4660c6-8774-433e-88ec-50b98b6ae207"
  },
{
    title: "Gefüllte Hähnchenbrust mit Spinat und Käse",
    image: "recipe_78.jpg",
    portions: 2,
    ingredients: [
      "2 Hähnchenbrustfilets",
      "100 g TK-Spinat",
      "50 g Frischkäse",
      "50 g geriebener Käse",
      "1 Knoblauchzehe",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Spinat auftauen und gut ausdrücken, mit Frischkäse und Knoblauch verrühren.",
      "2. Hähnchen längs aufschneiden und flachklopfen.",
      "3. Mit Spinatmasse füllen, zusammenklappen und mit Zahnstochern fixieren.",
      "4. Öl in Pfanne erhitzen, Hähnchen von beiden Seiten scharf anbraten.",
      "5. Im Ofen bei 180 °C ca. 20 Minuten fertig garen.",
      "6. Kurz ruhen lassen und servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 46,
      carbohydrates_g: 4,
      fat_g: 34
    },
    id: "81c2e318-066c-4d75-99c7-62492b12ca86"
  },
{
    title: "Hackfleischpfanne mit Gemüse",
    image: "recipe_79.jpg",
    portions: 2,
    ingredients: [
      "300 g Rinderhack",
      "1 Zucchini",
      "1 Paprika",
      "1 Zwiebel",
      "1 Dose gehackte Tomaten",
      "1 EL Tomatenmark",
      "1 TL Oregano",
      "2 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Gemüse klein schneiden, Zwiebel fein würfeln.",
      "2. Öl in einer Pfanne erhitzen, Zwiebeln und Hackfleisch kräftig anbraten.",
      "3. Gemüse zugeben und mitbraten.",
      "4. Tomatenmark einrühren, mit den gehackten Tomaten ablöschen.",
      "5. Mit Oregano, Salz und Pfeffer würzen.",
      "6. 10 Minuten köcheln lassen, dann servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 490,
      protein_g: 36,
      carbohydrates_g: 10,
      fat_g: 30
    },
    id: "fc0c0d8b-3b10-46d4-9f49-f7e8542049fd"
  },
{
    title: "Klassisches Gulasch",
    image: "recipe_80.jpg",
    portions: 2,
    ingredients: [
      "400 g Rindergulasch",
      "2 Zwiebeln",
      "2 Knoblauchzehen",
      "1 EL Paprikapulver",
      "1 EL Tomatenmark",
      "250 ml Rinderbrühe",
      "2 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Fleisch trocken tupfen, Zwiebeln und Knoblauch fein schneiden.",
      "2. In einem Topf das Öl erhitzen, das Fleisch rundum kräftig anbraten.",
      "3. Zwiebeln und Knoblauch zugeben und glasig dünsten.",
      "4. Tomatenmark und Paprikapulver einrühren, kurz rösten.",
      "5. Mit Brühe ablöschen und gut umrühren.",
      "6. Zugedeckt ca. 60 Minuten bei kleiner Hitze schmoren.",
      "7. Vor dem Servieren abschmecken."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "1 Stunde 30 Minuten",
    nutrition: {
      calories: 620,
      protein_g: 46,
      carbohydrates_g: 8,
      fat_g: 40
    },
    id: "e4656226-ee9c-48da-890c-ca944fdcbbb8"
  },
{
    title: "Hackfleisch-Zucchini-Röllchen",
    image: "recipe_81.jpg",
    portions: 2,
    ingredients: [
      "2 Zucchini",
      "250 g Rinderhack",
      "1 Ei",
      "2 EL Parmesan",
      "1 Knoblauchzehe",
      "Salz",
      "Pfeffer",
      "Oregano"
    ],
    instructions: [
      "1. Zucchini längs in dünne Scheiben hobeln, leicht salzen.",
      "2. Hack mit Ei, Parmesan, gepresstem Knoblauch und Gewürzen vermengen.",
      "3. Jeweils 1 TL Hackmasse auf Zucchinischeibe geben, aufrollen.",
      "4. Röllchen in eine Auflaufform setzen, etwas Öl darüberträufeln.",
      "5. Bei 180 °C ca. 25 Minuten backen."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht",
      "Beilage"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 470,
      protein_g: 34,
      carbohydrates_g: 6,
      fat_g: 32
    },
    id: "917d8229-193d-475d-aa86-71f2aa001eef"
  },
{
    title: "Chicken Wings aus dem Ofen",
    image: "recipe_82.jpg",
    portions: 2,
    ingredients: [
      "8 Hähnchenflügel",
      "2 EL Olivenöl",
      "1 TL Paprikapulver",
      "1 TL Knoblauchpulver",
      "1 TL Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 200 °C vorheizen.",
      "2. Hähnchenflügel mit Gewürzen und Öl in einer Schüssel vermengen.",
      "3. Auf einem Blech mit Backpapier verteilen.",
      "4. 35–40 Minuten knusprig backen, einmal wenden."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
      "Keto",
    ],
    categories: [
      "Hauptgericht",
      "Snack"
    ],
    preparation_time: "45 Minuten",
    nutrition: {
      calories: 580,
      protein_g: 36,
      carbohydrates_g: 1,
      fat_g: 48
    },
    id: "865c695a-9d21-4ceb-be19-a68b2444ea91"
  },
{
    title: "Cevapcici mit Ajvar und Zwiebeln",
    image: "recipe_83.jpg",
    portions: 2,
    ingredients: [
      "300 g Rinderhack",
      "1 Knoblauchzehe",
      "1 TL Paprikapulver",
      "1/2 TL Natron",
      "1 kleine Zwiebel",
      "2 EL Ajvar",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Hack mit gepresstem Knoblauch, Paprika, Natron, Salz und Pfeffer gut vermengen.",
      "2. Kleine, längliche Röllchen formen und mindestens 30 Minuten kalt stellen.",
      "3. Öl in Pfanne erhitzen, Cevapcici rundum knusprig braten.",
      "4. Mit Zwiebelringen und Ajvar servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Snack"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 550,
      protein_g: 32,
      carbohydrates_g: 4,
      fat_g: 42
    },
    id: "f056d129-2e55-4ebb-b191-d8a578704938"
  },
{
    title: "Putenstreifen in Champignonrahm",
    image: "recipe_84.jpg",
    portions: 2,
    ingredients: [
      "300 g Putenbrust",
      "200 g Champignons",
      "1 Zwiebel",
      "150 ml Sahne",
      "1 TL Senf",
      "1 EL Öl",
      "Salz",
      "Pfeffer",
      "Petersilie"
    ],
    instructions: [
      "1. Putenbrust in Streifen schneiden, Champignons vierteln, Zwiebel fein hacken.",
      "2. Öl in einer Pfanne erhitzen, Putenstreifen scharf anbraten und herausnehmen.",
      "3. Zwiebel und Pilze im Bratfett goldbraun braten.",
      "4. Fleisch zurückgeben, mit Sahne ablöschen.",
      "5. Senf einrühren, salzen, pfeffern und 5 Minuten einkochen lassen.",
      "6. Mit frischer Petersilie bestreuen und servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 530,
      protein_g: 42,
      carbohydrates_g: 6,
      fat_g: 36
    },
    id: "d0b91a13-2bef-4fa6-99cb-3215fa936eb8"
  },
{
    title: "Hackbällchen in Tomatensauce",
    image: "recipe_85.jpg",
    portions: 2,
    ingredients: [
      "300 g Rinderhack",
      "1 Ei",
      "1 EL Semmelbrösel",
      "1 Zwiebel",
      "1 Dose gehackte Tomaten",
      "1 Knoblauchzehe",
      "1 TL Oregano",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Hackfleisch mit Ei, Semmelbrösel, Salz und Pfeffer vermengen.",
      "2. Kleine Bällchen formen und in Öl rundum anbraten.",
      "3. Zwiebel und Knoblauch fein hacken, in der Pfanne anbraten.",
      "4. Gehackte Tomaten und Oregano zugeben, aufkochen.",
      "5. Hackbällchen in die Sauce legen, 15 Minuten köcheln lassen.",
      "6. Mit frischem Basilikum servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 580,
      protein_g: 38,
      carbohydrates_g: 10,
      fat_g: 40
    },
    id: "1c1d0543-7396-4561-9bfc-5f180207a583"
  },
{
    title: "Schweinemedaillons mit Kräuterbutter",
    image: "recipe_86.jpg",
    portions: 2,
    ingredients: [
      "300 g Schweinefilet",
      "2 EL Kräuterbutter",
      "1 TL Paprikapulver",
      "Salz",
      "Pfeffer",
      "1 EL Öl"
    ],
    instructions: [
      "1. Filet in Medaillons schneiden, salzen, pfeffern, mit Paprika würzen.",
      "2. Öl in Pfanne erhitzen, Medaillons je Seite 3–4 Minuten braten.",
      "3. Kräuterbutter auf die heißen Medaillons geben und schmelzen lassen.",
      "4. Mit Salat oder Gemüse servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 500,
      protein_g: 38,
      carbohydrates_g: 2,
      fat_g: 38
    },
    id: "f25a177c-b355-44d3-823c-2ef57ce75f84"
  },
{
    title: "Frikadellen mit Zucchinigemüse",
    image: "recipe_87.jpg",
    portions: 2,
    ingredients: [
      "300 g gemischtes Hackfleisch",
      "1 Ei",
      "1 EL Senf",
      "1 TL Majoran",
      "1 Zucchini",
      "1 kleine Zwiebel",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Hack mit Ei, Senf, Majoran, Salz und Pfeffer gut verkneten.",
      "2. Aus der Masse Frikadellen formen.",
      "3. Zwiebel und Zucchini in feine Stücke schneiden.",
      "4. Öl in zwei Pfannen erhitzen: Frikadellen braten, Gemüse separat anbraten.",
      "5. Gemüse würzen, alles gemeinsam servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Beilage"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 560,
      protein_g: 34,
      carbohydrates_g: 7,
      fat_g: 42
    },
    id: "94901095-0ac3-43f2-b133-bf772d4db818"
  },
{
    title: "Puten-Gemüse-Wok",
    image: "recipe_88.jpg",
    portions: 2,
    ingredients: [
      "300 g Putenbrust",
      "1 Paprika",
      "1 Karotte",
      "1 Frühlingszwiebel",
      "1 TL Sesamöl",
      "2 EL Sojasauce",
      "1 TL Ingwer (frisch)",
      "1 Knoblauchzehe"
    ],
    instructions: [
      "1. Fleisch und Gemüse in dünne Streifen schneiden.",
      "2. Öl im Wok erhitzen, Fleisch darin anbraten.",
      "3. Knoblauch und Ingwer fein hacken und mitbraten.",
      "4. Gemüse zugeben, 5 Minuten unter Rühren braten.",
      "5. Mit Sojasauce ablöschen, bei mittlerer Hitze kurz ziehen lassen."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 490,
      protein_g: 40,
      carbohydrates_g: 8,
      fat_g: 28
    },
    id: "209b957d-fae9-4a24-bff3-44a89aabfb19"
  },
{
    title: "Leberkäse mit Spiegelei",
    image: "recipe_89.jpg",
    portions: 2,
    ingredients: [
      "2 Scheiben Leberkäse (à ca. 150 g)",
      "2 Eier",
      "1 TL Butter",
      "Senf (optional)"
    ],
    instructions: [
      "1. Leberkäsescheiben in einer Pfanne ohne Öl bei mittlerer Hitze anbraten.",
      "2. In einer zweiten Pfanne Butter schmelzen und Eier als Spiegelei braten.",
      "3. Leberkäse auf Teller legen, Spiegelei darauf anrichten.",
      "4. Nach Wunsch mit Senf servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Frühstück",
      "Snack"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 30,
      carbohydrates_g: 3,
      fat_g: 42
    },
    id: "2baa73a0-4321-4ad4-b4eb-a87e5c9d096e"
  },
{
    title: "Schaschlikspieße mit Paprika und Zwiebel",
    image: "recipe_90.jpg",
    portions: 2,
    ingredients: [
      "300 g Schweinenacken",
      "1 Paprika",
      "1 Zwiebel",
      "2 EL Öl",
      "1 TL Paprikapulver",
      "Salz",
      "Pfeffer",
      "Holzspieße"
    ],
    instructions: [
      "1. Fleisch, Paprika und Zwiebel in mundgerechte Stücke schneiden.",
      "2. Alles mit Öl und Gewürzen marinieren, 30 Minuten ziehen lassen.",
      "3. Abwechselnd auf Holzspieße stecken.",
      "4. In einer Pfanne oder auf dem Grill rundum 10–12 Minuten braten.",
      "5. Mit Beilage nach Wahl servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Grillen"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 600,
      protein_g: 38,
      carbohydrates_g: 6,
      fat_g: 44
    },
    id: "2552d92a-f245-436a-aa30-7a9f415fae1a"
  },
{
    title: "Zucchini-Spaghetti mit Avocado-Creme",
    image: "recipe_91.jpg",
    portions: 2,
    ingredients: [
      "2 Zucchini",
      "1 reife Avocado",
      "1 Knoblauchzehe",
      "1 EL Zitronensaft",
      "2 EL Olivenöl",
      "1 Handvoll Basilikum",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Zucchini mit einem Spiralschneider in feine Spaghetti schneiden.",
      "2. Avocado halbieren, entkernen und das Fruchtfleisch in eine Schüssel geben.",
      "3. Knoblauch fein hacken, mit Zitronensaft, Olivenöl, Salz und Pfeffer zur Avocado geben.",
      "4. Alles zu einer cremigen Masse pürieren oder mit einer Gabel zerdrücken.",
      "5. Die Zucchini-Spaghetti mit der Avocado-Creme vermengen.",
      "6. Mit Basilikum bestreuen und sofort servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 380,
      protein_g: 6,
      carbohydrates_g: 14,
      fat_g: 32
    },
    id: "32318522-1885-46a8-acaa-a01fcc2c4726"
  },
{
    title: "Rohkost-Bowl mit Cashew-Dressing",
    image: "recipe_92.jpg",
    portions: 2,
    ingredients: [
      "1 Karotte",
      "1/2 Rote Bete",
      "1/2 Gurke",
      "1/2 Avocado",
      "1 Handvoll Rotkohl",
      "30 g Cashewkerne",
      "1 EL Zitronensaft",
      "50 ml Wasser",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Gemüse waschen und in feine Streifen oder Spiralen schneiden.",
      "2. Cashews mindestens 30 Minuten in warmem Wasser einweichen.",
      "3. Für das Dressing Cashews mit Zitronensaft, Wasser, Salz und Pfeffer fein pürieren.",
      "4. Alles in einer großen Schüssel oder einzeln anrichten.",
      "5. Das Dressing darübergeben und sofort genießen."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
    ],
    categories: [
      "Hauptgericht",
      "Salat"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 400,
      protein_g: 9,
      carbohydrates_g: 22,
      fat_g: 30
    },
    id: "348a3ce6-8799-48d7-9ce3-91560472e830"
  },
{
    title: "Gefüllte Paprika mit Mandelmus",
    image: "recipe_93.jpg",
    portions: 2,
    ingredients: [
      "2 kleine Paprika",
      "1/2 Avocado",
      "2 EL Mandelmus",
      "1 EL Zitronensaft",
      "1 TL Senf (roh)",
      "1 Handvoll Sprossen",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Paprika halbieren, entkernen und kalt abspülen.",
      "2. Avocado mit Zitronensaft, Mandelmus, Senf, Salz und Pfeffer zu einer Creme verarbeiten.",
      "3. Die Paprikahälften mit der Creme füllen.",
      "4. Mit Sprossen dekorieren und frisch servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Vorspeise",
      "Snack"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 350,
      protein_g: 8,
      carbohydrates_g: 10,
      fat_g: 30
    },
    id: "425a37f0-a35f-4805-86cd-02aac1e9e68c"
  },
{
    title: "Rohes Porridge mit Chiasamen",
    image: "recipe_94.jpg",
    portions: 2,
    ingredients: [
      "3 EL Chiasamen",
      "200 ml Mandelmilch (roh)",
      "1 EL Leinsamen",
      "1 EL Kokosflocken",
      "1 TL Zimt",
      "1 Apfel",
      "1 TL Agavendicksaft (roh)"
    ],
    instructions: [
      "1. Chia- und Leinsamen mit Mandelmilch in einer Schüssel verrühren.",
      "2. Kokosflocken und Zimt unterheben.",
      "3. Für mindestens 1 Stunde im Kühlschrank quellen lassen.",
      "4. Apfel reiben oder würfeln und unterheben.",
      "5. Mit Agavendicksaft süßen und servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Frühstück",
      "Dessert"
    ],
    preparation_time: "1 Stunde",
    nutrition: {
      calories: 420,
      protein_g: 9,
      carbohydrates_g: 28,
      fat_g: 28
    },
    id: "0069a5a6-fe17-42ab-b348-a330cc0ad20c"
  },
{
    title: "Zucchini-Carpaccio mit Walnüssen",
    image: "recipe_95.jpg",
    portions: 2,
    ingredients: [
      "1 große Zucchini",
      "1 Handvoll Walnüsse",
      "2 EL Zitronensaft",
      "2 EL Olivenöl",
      "1 TL grobes Salz",
      "Pfeffer",
      "Rucola"
    ],
    instructions: [
      "1. Zucchini mit dem Sparschäler in hauchdünne Scheiben schneiden.",
      "2. Auf einem Teller kreisförmig auslegen.",
      "3. Zitronensaft und Öl verrühren, mit Salz und Pfeffer abschmecken.",
      "4. Dressing über die Zucchini geben.",
      "5. Walnüsse grob hacken und darüberstreuen.",
      "6. Mit Rucola garnieren und servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
    ],
    categories: [
      "Vorspeise",
      "Kalorienarm"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 310,
      protein_g: 6,
      carbohydrates_g: 8,
      fat_g: 26
    },
    id: "dd233e50-e814-48ed-bfd4-92180ba6f755"
  },
{
    title: "Rohkost-Wraps mit Mandelcreme",
    image: "recipe_96.jpg",
    portions: 2,
    ingredients: [
      "4 große Salatblätter (z. B. Römersalat)",
      "1 Karotte",
      "1/2 Avocado",
      "1/2 Paprika",
      "2 EL Mandelmus",
      "1 TL Zitronensaft",
      "1 TL Wasser",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Mandelmus mit Zitronensaft, Wasser, Salz und Pfeffer zu einer streichfähigen Creme verrühren.",
      "2. Karotte, Paprika und Avocado in feine Streifen schneiden.",
      "3. Die Salatblätter vorsichtig waschen und trocken tupfen.",
      "4. Mit Mandelcreme bestreichen, dann mit dem geschnittenen Gemüse belegen.",
      "5. Die Blätter wie Wraps einrollen und servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Snack",
      "Kalorienarm"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 360,
      protein_g: 7,
      carbohydrates_g: 12,
      fat_g: 28
    },
    id: "5f5454ea-4c1d-4100-9685-406ec1b44ae3"
  },
{
    title: "Rohkost-Sushi mit Nussreis",
    image: "recipe_97.jpg",
    portions: 2,
    ingredients: [
      "2 Nori-Blätter (roh)",
      "100 g Blumenkohl",
      "30 g Cashewkerne",
      "1/4 Avocado",
      "1/4 Paprika",
      "1 EL Zitronensaft",
      "1 TL Tamari",
      "Salz"
    ],
    instructions: [
      "1. Blumenkohl in der Küchenmaschine fein mahlen, Cashewkerne separat zerkleinern und beides mischen.",
      "2. Mit Zitronensaft, Tamari und etwas Salz würzen.",
      "3. Gemüse in feine Streifen schneiden.",
      "4. Auf die Nori-Blätter jeweils etwas „Nussreis“ streichen, dann Gemüse darauf legen.",
      "5. Vorsichtig aufrollen und in Stücke schneiden.",
      "6. Optional mit rohem Wasabi oder zusätzlichem Tamari servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Vorspeise"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 420,
      protein_g: 10,
      carbohydrates_g: 16,
      fat_g: 32
    },
    id: "81088e07-cb41-4e43-b2f0-5a770b0a78f9"
  },
{
    title: "Fenchel-Orangen-Salat mit Walnüssen",
    image: "recipe_98.jpg",
    portions: 2,
    ingredients: [
      "1 Fenchelknolle",
      "1 Orange",
      "1 Handvoll Walnüsse",
      "1 EL Olivenöl",
      "1 TL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Fenchel in feine Scheiben schneiden oder hobeln.",
      "2. Orange filetieren und in Stücke teilen.",
      "3. Walnüsse grob hacken.",
      "4. Alles in einer Schüssel mit Öl, Zitronensaft, Salz und Pfeffer vermengen.",
      "5. Kurz ziehen lassen und servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Vorspeise",
      "Salat"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 300,
      protein_g: 5,
      carbohydrates_g: 20,
      fat_g: 22
    },
    id: "c770c3c1-897c-48bc-b9ce-0ef53a057afc"
  },
{
    title: "Karotten-Apfel-Salat mit Sesam",
    image: "recipe_99.jpg",
    portions: 2,
    ingredients: [
      "2 Karotten",
      "1 Apfel",
      "1 EL Sesam",
      "1 TL Zitronensaft",
      "1 EL Olivenöl",
      "1 TL Honig (roh)",
      "Salz"
    ],
    instructions: [
      "1. Karotten und Apfel grob raspeln.",
      "2. In einer Schüssel mit Zitronensaft, Öl und Honig vermengen.",
      "3. Sesam darüberstreuen.",
      "4. Mit Salz abschmecken und servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Beilage",
      "Kalorienarm"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 260,
      protein_g: 3,
      carbohydrates_g: 24,
      fat_g: 16
    },
    id: "92b3fa13-ff3a-4b47-b9fd-efe4ce6d0115"
  },
{
    title: "Rohkost-Lasagne mit Cashewcreme",
    image: "recipe_100.jpg",
    portions: 2,
    ingredients: [
      "1 Zucchini",
      "1 Tomate",
      "1/2 Paprika",
      "30 g Cashews",
      "1 TL Zitronensaft",
      "1 TL Hefeflocken (roh)",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Cashews in warmem Wasser 1 Stunde einweichen, dann mit Zitronensaft, Öl, Salz, Pfeffer und Hefeflocken zu einer Creme pürieren.",
      "2. Zucchini längs in dünne Scheiben schneiden.",
      "3. Tomate und Paprika fein würfeln.",
      "4. In einer kleinen Form Zucchinischeiben, Gemüse und Creme schichten.",
      "5. Mit Zucchini abschließen, 10 Minuten ziehen lassen und servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 430,
      protein_g: 11,
      carbohydrates_g: 20,
      fat_g: 32
    },
    id: "45a524c9-1b64-458c-b696-c0f82f48316f"
  },
{
    title: "Rohes Schoko-Bananen-Dessert",
    image: "recipe_101.jpg",
    portions: 2,
    ingredients: [
      "1 Banane",
      "1 EL roher Kakao",
      "2 Datteln",
      "1 EL Mandelmus",
      "1 TL Vanille (roh)",
      "1 TL Kokosöl"
    ],
    instructions: [
      "1. Banane in Stücke brechen, Datteln entsteinen.",
      "2. Alle Zutaten in einem Mixer zu einer glatten Masse verarbeiten.",
      "3. In kleine Gläser füllen.",
      "4. Optional mit rohen Kakaonibs oder Kokosraspeln garnieren.",
      "5. Gekühlt servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Dessert"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 360,
      protein_g: 5,
      carbohydrates_g: 28,
      fat_g: 26
    },
    id: "70291a37-c264-4fe0-be2d-202e7613576a"
  },
{
    title: "Avocado-Gurken-Suppe (kalt)",
    image: "recipe_102.jpg",
    portions: 2,
    ingredients: [
      "1 Avocado",
      "1/2 Salatgurke",
      "1 EL Zitronensaft",
      "1 EL Olivenöl",
      "1 TL Dill",
      "1 Prise Salz",
      "100 ml Wasser"
    ],
    instructions: [
      "1. Avocado und Gurke grob würfeln.",
      "2. Zusammen mit Zitronensaft, Öl, Dill, Wasser und Salz in den Mixer geben.",
      "3. Fein pürieren, ggf. abschmecken.",
      "4. Gekühlt in Schalen servieren, nach Wunsch mit Gurkenscheiben garnieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Suppe",
      "Vorspeise"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 310,
      protein_g: 4,
      carbohydrates_g: 8,
      fat_g: 28
    },
    id: "5926fbcd-876a-48cb-8535-e0ae611ea071"
  },
{
    title: "Wassermelonen-Feta-Salat (Rohkost-Variante)",
    image: "recipe_103.jpg",
    portions: 2,
    ingredients: [
      "300 g Wassermelone",
      "100 g veganer Rohkost-Feta (z. B. aus Cashew)",
      "1 EL Limettensaft",
      "1 EL Minzblätter",
      "Pfeffer"
    ],
    instructions: [
      "1. Melone würfeln, veganen Feta zerbröseln.",
      "2. Beides in einer Schüssel vermengen.",
      "3. Mit Limettensaft und gehackter Minze abschmecken.",
      "4. Mit etwas Pfeffer bestreuen und gekühlt servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Beilage",
      "Salat"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 240,
      protein_g: 6,
      carbohydrates_g: 18,
      fat_g: 16
    },
    id: "f36fd0ee-262b-421c-a47c-86e00553bc39"
  },
{
    title: "Rohkost-Energiekugeln mit Kakao",
    image: "recipe_104.jpg",
    portions: 2,
    ingredients: [
      "6 Datteln",
      "30 g Mandeln",
      "1 EL roher Kakao",
      "1 EL Kokosraspeln",
      "1 TL Kokosöl"
    ],
    instructions: [
      "1. Datteln entsteinen, mit Mandeln und Kakao im Mixer fein zerkleinern.",
      "2. Kokosöl und Kokosraspeln untermengen.",
      "3. Aus der Masse kleine Kugeln formen.",
      "4. Nach Wunsch in weiteren Kokosraspeln wälzen.",
      "5. Kühl lagern und genießen."
    ],
    diet_types: [
      "Rohkost",
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Dessert",
      "Snack"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 320,
      protein_g: 5,
      carbohydrates_g: 25,
      fat_g: 20
    },
    id: "c23f16ce-0ce3-4c06-a0f2-7090de7be183"
  },
{
    title: "Rohes Bircher Müsli",
    image: "recipe_105.jpg",
    portions: 2,
    ingredients: [
      "4 EL zarte Haferflocken (gekeimt, roh)",
      "1 Apfel",
      "1 EL Rosinen",
      "1 EL Nüsse",
      "100 ml Mandelmilch (roh)",
      "1 TL Zitronensaft",
      "1 TL Honig (roh)"
    ],
    instructions: [
      "1. Apfel grob raspeln, sofort mit Zitronensaft vermengen.",
      "2. Haferflocken, Rosinen und Nüsse untermischen.",
      "3. Mit Mandelmilch aufgießen und alles verrühren.",
      "4. 10 Minuten quellen lassen.",
      "5. Nach Geschmack mit Honig süßen und servieren."
    ],
    diet_types: [
      "Rohkost",
      "Vegetarisch",
    ],
    categories: [
      "Frühstück"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 370,
      protein_g: 8,
      carbohydrates_g: 32,
      fat_g: 20
    },
    id: "856dc0af-77e4-432d-be5c-90b928cf43a8"
  },
{
    title: "Gefüllte Paprika mit Hackfleisch",
    image: "recipe_106.jpg",
    portions: 2,
    ingredients: [
      "2 große Paprika",
      "300 g Rinderhack",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 TL Paprikapulver",
      "1 EL Tomatenmark",
      "100 ml Brühe",
      "1 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Paprika oben aufschneiden, entkernen und beiseitestellen.",
      "2. Zwiebel und Knoblauch fein hacken.",
      "3. Öl in Pfanne erhitzen, Hackfleisch mit Zwiebel und Knoblauch anbraten.",
      "4. Tomatenmark, Paprikapulver, Salz und Pfeffer zugeben, gut vermengen.",
      "5. Paprika mit der Mischung füllen.",
      "6. In eine Auflaufform setzen, Brühe angießen.",
      "7. Bei 180 °C ca. 30 Minuten backen."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "45 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 38,
      carbohydrates_g: 10,
      fat_g: 34
    },
    id: "599d3ca6-8d6a-44b9-b91b-0681de9454e4"
  },
{
    title: "Süßkartoffelpfanne mit Spinat und Ei",
    image: "recipe_107.jpg",
    portions: 2,
    ingredients: [
      "300 g Süßkartoffeln",
      "2 Eier",
      "100 g frischer Spinat",
      "1 Zwiebel",
      "2 EL Olivenöl",
      "1 TL Kreuzkümmel",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Süßkartoffeln schälen, würfeln und in Olivenöl anbraten.",
      "2. Zwiebel würfeln und mitbraten.",
      "3. Nach ca. 10 Minuten den Spinat zugeben und kurz mitgaren.",
      "4. Eier in einer zweiten Pfanne zu Spiegeleiern braten.",
      "5. Mit Kreuzkümmel, Salz und Pfeffer würzen und zusammen servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Frühstück"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 460,
      protein_g: 17,
      carbohydrates_g: 35,
      fat_g: 28
    },
    id: "85fafa23-31ec-4e2f-b00d-ad86dec64886"
  },
{
    title: "Lachsfilet mit Brokkoli und Zitrone",
    image: "recipe_108.jpg",
    portions: 2,
    ingredients: [
      "2 Lachsfilets (je 150 g)",
      "1 Brokkoli",
      "1 Zitrone",
      "1 EL Olivenöl",
      "1 TL Honig",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Brokkoli in Röschen teilen und blanchieren.",
      "2. Lachs salzen, pfeffern, mit Zitronensaft und Honig beträufeln.",
      "3. In einer Pfanne mit Olivenöl auf jeder Seite 3–4 Minuten braten.",
      "4. Mit Brokkoli servieren und Zitronenzesten darüber geben."
    ],
    diet_types: [
      "Fisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 540,
      protein_g: 38,
      carbohydrates_g: 8,
      fat_g: 36
    },
    id: "1b786dc5-574d-4f0e-b15f-abe1af927a6c"
  },
{
    title: "Quinoasalat mit Gemüse",
    image: "recipe_109.jpg",
    portions: 2,
    ingredients: [
      "120 g Quinoa",
      "1 Paprika",
      "1 kleine Gurke",
      "1 Möhre",
      "2 EL Zitronensaft",
      "2 EL Olivenöl",
      "1 TL Senf",
      "Salz",
      "Pfeffer",
      "Petersilie"
    ],
    instructions: [
      "1. Quinoa abspülen, dann nach Packung kochen und abkühlen lassen.",
      "2. Gemüse klein schneiden.",
      "3. Dressing aus Zitronensaft, Öl, Senf, Salz und Pfeffer anrühren.",
      "4. Alles vermengen, mit Petersilie bestreuen.",
      "5. Kurz durchziehen lassen und servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Beilage",
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 410,
      protein_g: 13,
      carbohydrates_g: 40,
      fat_g: 20
    },
    id: "25907362-e4f4-4bda-949a-a4e51a2866b8"
  },
{
    title: "Rührei mit Paprika und Tomate",
    image: "recipe_110.jpg",
    portions: 2,
    ingredients: [
      "4 Eier",
      "1 Paprika",
      "1 Tomate",
      "1 TL Butter",
      "Salz",
      "Pfeffer",
      "Schnittlauch"
    ],
    instructions: [
      "1. Gemüse klein würfeln, in Butter anschwitzen.",
      "2. Eier verquirlen, mit Salz und Pfeffer würzen.",
      "3. In die Pfanne geben, langsam stocken lassen.",
      "4. Mit frischem Schnittlauch servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Frühstück",
      "Hauptgericht"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 380,
      protein_g: 22,
      carbohydrates_g: 5,
      fat_g: 30
    },
    id: "f86d3ab2-13d4-45a4-b3fa-995527bbe862"
  },
{
    title: "Zucchinipuffer mit Quarkdip",
    image: "recipe_111.jpg",
    portions: 2,
    ingredients: [
      "2 Zucchini",
      "1 Ei",
      "1 EL Reismehl",
      "Salz",
      "Pfeffer",
      "200 g Magerquark",
      "Kräuter",
      "1 EL Öl"
    ],
    instructions: [
      "1. Zucchini reiben, mit Salz bestreuen, 10 Min. ziehen lassen und ausdrücken.",
      "2. Mit Ei, Mehl, Pfeffer verrühren.",
      "3. In Öl kleine Puffer ausbacken.",
      "4. Quark mit Kräutern, Salz und Pfeffer verrühren.",
      "5. Mit Dip servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Snack"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 400,
      protein_g: 24,
      carbohydrates_g: 10,
      fat_g: 26
    },
    id: "1f45fada-8730-4aaa-ad00-15c5c52df4fa"
  },
{
    title: "Gefüllte Aubergine mit Hackfleisch",
    image: "recipe_112.jpg",
    portions: 2,
    ingredients: [
      "1 große Aubergine",
      "300 g Rinderhack",
      "1 Zwiebel",
      "1 Knoblauch",
      "1 TL Paprika",
      "1 EL Tomatenmark",
      "2 EL Olivenöl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Aubergine halbieren, aushöhlen und im Ofen 10 Min. vorgaren.",
      "2. Füllung: Hack, Zwiebel, Knoblauch, Gewürze und Tomatenmark anbraten.",
      "3. Auberginen füllen und weitere 15 Minuten backen.",
      "4. Optional mit Kräutern servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 530,
      protein_g: 36,
      carbohydrates_g: 10,
      fat_g: 36
    },
    id: "142d7738-1e1a-4c0f-adcf-810231f591e6"
  },
{
    title: "Linsensuppe mit Möhren",
    image: "recipe_113.jpg",
    portions: 2,
    ingredients: [
      "150 g rote Linsen",
      "2 Möhren",
      "1 Zwiebel",
      "1 Knoblauch",
      "1 TL Kreuzkümmel",
      "750 ml Gemüsebrühe",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Gemüse würfeln, Linsen abspülen.",
      "2. Zwiebel und Knoblauch in Öl anbraten.",
      "3. Möhren und Linsen zugeben, kurz mitrösten.",
      "4. Brühe und Gewürze zugeben, 20 Min. köcheln.",
      "5. Optional pürieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Suppe",
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 420,
      protein_g: 24,
      carbohydrates_g: 38,
      fat_g: 12
    },
    id: "c8a7d0a2-8849-4b5c-a224-67febcd51b9b"
  },
{
    title: "Reisnudelsalat mit Sesam-Dressing",
    image: "recipe_114.jpg",
    portions: 2,
    ingredients: [
      "100 g Reisnudeln",
      "1 Karotte",
      "1/2 Paprika",
      "1 Frühlingszwiebel",
      "1 EL Sesam",
      "2 EL Sojasauce (glutenfrei)",
      "1 EL Reisessig",
      "1 TL Honig",
      "1 TL Sesamöl"
    ],
    instructions: [
      "1. Nudeln nach Anleitung garen und kalt abschrecken.",
      "2. Gemüse fein schneiden.",
      "3. Alle Zutaten für das Dressing verrühren.",
      "4. Nudeln, Gemüse und Dressing vermengen.",
      "5. Mit Sesam bestreuen und servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Salat",
      "Beilage"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 410,
      protein_g: 9,
      carbohydrates_g: 45,
      fat_g: 18
    },
    id: "008c1a71-4527-4765-b62f-902b135b553b"
  },
{
    title: "Frühstücks-Bowl mit Beeren und Nüssen",
    image: "recipe_115.jpg",
    portions: 2,
    ingredients: [
      "200 g Joghurt (z. B. Kokos)",
      "1 Handvoll Beeren",
      "1 EL Leinsamen",
      "1 EL Mandeln",
      "1 EL Honig (optional)",
      "Zimt"
    ],
    instructions: [
      "1. Joghurt in Schale geben.",
      "2. Beeren waschen, Mandeln hacken.",
      "3. Alles auf dem Joghurt anrichten.",
      "4. Mit Honig und Zimt verfeinern."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Frühstück"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 350,
      protein_g: 10,
      carbohydrates_g: 22,
      fat_g: 24
    },
    id: "165f235f-e641-41a7-8f4c-34a013659ee7"
  },
{
    title: "Hähnchenbrust mit Ofengemüse",
    image: "recipe_116.jpg",
    portions: 2,
    ingredients: [
      "2 Hähnchenbrustfilets",
      "1 Zucchini",
      "1 Paprika",
      "1 rote Zwiebel",
      "2 EL Olivenöl",
      "1 TL Rosmarin",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Ofen auf 200 °C vorheizen.",
      "2. Gemüse in grobe Stücke schneiden, mit 1 EL Öl, Salz, Pfeffer und Rosmarin vermengen.",
      "3. Auf einem Blech verteilen und 10 Minuten vorgaren.",
      "4. Hähnchenbrust mit Salz und Pfeffer würzen, in restlichem Öl anbraten.",
      "5. Kurz vor Ende der Backzeit zum Gemüse legen und weitere 15 Minuten garen.",
      "6. Alles zusammen servieren."
    ],
    diet_types: [
      "Fleisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 480,
      protein_g: 42,
      carbohydrates_g: 10,
      fat_g: 30
    },
    id: "2cf1a35b-703b-4460-a7ea-86bbbcf3d32d"
  },
{
    title: "Blumenkohlreis mit Gemüsepfanne",
    image: "recipe_117.jpg",
    portions: 2,
    ingredients: [
      "1 Blumenkohl",
      "1 Paprika",
      "1 Möhre",
      "1 Frühlingszwiebel",
      "2 EL Öl",
      "Sojasauce (glutenfrei)",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Blumenkohl in der Küchenmaschine zu „Reis“ zerkleinern.",
      "2. Gemüse klein schneiden.",
      "3. Gemüse in 1 EL Öl anbraten, würzen.",
      "4. Blumenkohlreis in separater Pfanne mit 1 EL Öl 5 Minuten braten.",
      "5. Mit Sojasauce und Gemüse vermengen und servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht",
      "Kalorienarm"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 350,
      protein_g: 10,
      carbohydrates_g: 20,
      fat_g: 22
    },
    id: "91881418-ab9c-43f9-bb54-41566ff98e5a"
  },
{
    title: "Kichererbsen-Curry mit Kokosmilch",
    image: "recipe_118.jpg",
    portions: 2,
    ingredients: [
      "1 Dose Kichererbsen",
      "1 Dose Kokosmilch",
      "1 Zwiebel",
      "1 Knoblauch",
      "1 TL Currypulver",
      "1 TL Kurkuma",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Zwiebel und Knoblauch fein hacken.",
      "2. In Öl glasig braten, Gewürze zugeben und kurz rösten.",
      "3. Kichererbsen und Kokosmilch zugeben.",
      "4. Bei mittlerer Hitze 15 Minuten köcheln lassen.",
      "5. Mit Salz und Pfeffer abschmecken, servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 16,
      carbohydrates_g: 36,
      fat_g: 34
    },
    id: "040c602b-534c-4978-b300-1dedea0c6462"
  },
{
    title: "Maispfannkuchen mit Guacamole",
    image: "recipe_119.jpg",
    portions: 2,
    ingredients: [
      "100 g Maismehl",
      "1 Ei",
      "150 ml Milch (oder Pflanzenmilch)",
      "1 Prise Salz",
      "1 TL Öl",
      "1 Avocado",
      "1 EL Zitronensaft",
      "1 kleine Tomate",
      "Pfeffer"
    ],
    instructions: [
      "1. Teig aus Mehl, Ei, Milch und Salz anrühren.",
      "2. In heißer Pfanne kleine Pfannkuchen ausbacken.",
      "3. Für die Guacamole Avocado zerdrücken, mit Zitrone, gewürfelter Tomate, Salz und Pfeffer verrühren.",
      "4. Pfannkuchen mit Guacamole servieren."
    ],
    diet_types: [
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Frühstück",
      "Snack"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 410,
      protein_g: 11,
      carbohydrates_g: 30,
      fat_g: 26
    },
    id: "86ca6f46-0052-4599-b517-541840ae4087"
  },
{
    title: "Reis mit gebratenem Tofu und Gemüse",
    image: "recipe_120.jpg",
    portions: 2,
    ingredients: [
      "120 g Reis",
      "200 g Tofu",
      "1 Zucchini",
      "1 Möhre",
      "1 EL Sojasauce (glutenfrei)",
      "1 TL Sesamöl",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Reis kochen.",
      "2. Tofu in Würfel schneiden und in Öl goldbraun braten.",
      "3. Gemüse in feine Streifen schneiden, mitbraten.",
      "4. Mit Sojasauce, Sesamöl, Salz und Pfeffer würzen.",
      "5. Zusammen mit dem Reis servieren."
    ],
    diet_types: [
      "Vegan",
      "Vegetarisch",
      "Glutenfrei",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "35 Minuten",
    nutrition: {
      calories: 490,
      protein_g: 22,
      carbohydrates_g: 42,
      fat_g: 26
    },
    id: "ab51ba57-d947-4f8d-9904-758b45aa89dd"
  },
{
    title: "Spaghetti Carbonara",
    image: "recipe_121.jpg",
    portions: 2,
    ingredients: [
      "200 g Spaghetti",
      "100 g Speck",
      "2 Eier",
      "50 g Parmesan",
      "1 Knoblauchzehe",
      "Pfeffer",
      "Salz"
    ],
    instructions: [
      "1. Spaghetti in Salzwasser al dente kochen.",
      "2. Währenddessen Speck in kleine Würfel schneiden und in einer Pfanne ohne Öl anbraten.",
      "3. Knoblauch fein hacken und kurz mitbraten, dann entfernen.",
      "4. Eier mit geriebenem Parmesan und Pfeffer verquirlen.",
      "5. Gekochte Pasta abgießen (nicht abschrecken), in die heiße Pfanne zum Speck geben.",
      "6. Pfanne vom Herd nehmen und die Ei-Käse-Masse unter ständigem Rühren hinzufügen.",
      "7. Sofort servieren, mit extra Parmesan bestreuen."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 720,
      protein_g: 28,
      carbohydrates_g: 60,
      fat_g: 40
    },
    id: "6ba4afe3-5b9d-4352-bc28-6e15435b482c"
  },
{
    title: "Hähnchenschenkel mit Kartoffelspalten",
    image: "recipe_122.jpg",
    portions: 2,
    ingredients: [
      "2 Hähnchenschenkel",
      "400 g Kartoffeln",
      "2 EL Olivenöl",
      "1 TL Paprikapulver",
      "1 TL Rosmarin",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 200 °C Umluft vorheizen.",
      "2. Kartoffeln waschen, in Spalten schneiden und mit 1 EL Öl, Paprikapulver, Salz und Rosmarin vermengen.",
      "3. Hähnchenschenkel mit Salz, Pfeffer und dem restlichen Öl einreiben.",
      "4. Beides auf ein Blech legen und etwa 40 Minuten knusprig backen.",
      "5. Nach der Hälfte der Zeit wenden.",
      "6. Vor dem Servieren mit frischen Kräutern garnieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "50 Minuten",
    nutrition: {
      calories: 650,
      protein_g: 45,
      carbohydrates_g: 30,
      fat_g: 38
    },
    id: "074a6736-0b8d-43aa-892e-081fa121972f"
  },
{
    title: "Rührei mit Schinken und Käse",
    image: "recipe_123.jpg",
    portions: 2,
    ingredients: [
      "4 Eier",
      "50 g Kochschinken",
      "50 g geriebener Käse",
      "1 TL Butter",
      "Schnittlauch",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Eier in einer Schüssel mit Salz und Pfeffer verquirlen.",
      "2. Schinken klein schneiden, Käse bereitstellen.",
      "3. Butter in einer Pfanne zerlassen.",
      "4. Schinken anbraten, dann die Eier zugeben.",
      "5. Wenn die Masse leicht stockt, Käse unterrühren.",
      "6. Sobald die gewünschte Konsistenz erreicht ist, mit Schnittlauch bestreuen und servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Frühstück"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 480,
      protein_g: 32,
      carbohydrates_g: 3,
      fat_g: 38
    },
    id: "69c59e16-5b55-462a-8992-4654ff36c8be"
  },
{
    title: "Thunfischsalat mit Ei",
    image: "recipe_124.jpg",
    portions: 2,
    ingredients: [
      "1 Dose Thunfisch in Wasser",
      "2 Eier",
      "1/2 Salatgurke",
      "1 Tomate",
      "1/2 rote Zwiebel",
      "2 EL Olivenöl",
      "1 TL Zitronensaft",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Eier hart kochen, abschrecken und schälen.",
      "2. Thunfisch abgießen und mit der Gabel zerkleinern.",
      "3. Gemüse klein schneiden, Eier vierteln.",
      "4. Alles in einer Schüssel vermengen.",
      "5. Mit Öl, Zitronensaft, Salz und Pfeffer abschmecken.",
      "6. Gut durchziehen lassen oder sofort servieren."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Salat",
      "Kalorienarm"
    ],
    preparation_time: "20 Minuten",
    nutrition: {
      calories: 380,
      protein_g: 32,
      carbohydrates_g: 5,
      fat_g: 24
    },
    id: "2118797a-48c4-4020-9c18-e17e6465c50c"
  },
{
    title: "Reispfanne mit Hähnchen und Erbsen",
    image: "recipe_125.jpg",
    portions: 2,
    ingredients: [
      "150 g Reis",
      "250 g Hähnchenbrust",
      "100 g Erbsen (TK)",
      "1 Möhre",
      "1 EL Sojasauce",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Reis kochen und beiseite stellen.",
      "2. Hähnchen in Streifen schneiden und in Öl anbraten.",
      "3. Möhre fein würfeln, mitbraten.",
      "4. Erbsen zugeben, mit Salz, Pfeffer, Sojasauce abschmecken.",
      "5. Reis untermischen und kurz durchbraten.",
      "6. Warm servieren, optional mit Frühlingszwiebeln garnieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 540,
      protein_g: 38,
      carbohydrates_g: 42,
      fat_g: 20
    },
    id: "fd43cd37-b48e-4732-b26a-cd69c9532488"
  },
{
    title: "Bauernfrühstück mit Speck und Kartoffeln",
    image: "recipe_126.jpg",
    portions: 2,
    ingredients: [
      "300 g festkochende Kartoffeln",
      "3 Eier",
      "100 g Speckwürfel",
      "1 Zwiebel",
      "1 EL Öl",
      "Schnittlauch",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Kartoffeln kochen, pellen und in Scheiben schneiden.",
      "2. Zwiebel würfeln, Speck in einer Pfanne anbraten.",
      "3. Kartoffelscheiben zugeben und mitbraten, bis sie goldbraun sind.",
      "4. Eier verquirlen, würzen und in die Pfanne geben.",
      "5. Unter Rühren stocken lassen.",
      "6. Mit Schnittlauch bestreuen und servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Frühstück",
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 620,
      protein_g: 26,
      carbohydrates_g: 35,
      fat_g: 40
    },
    id: "8180e474-3c73-466f-8e5e-aa2a8fe4387e"
  },
{
    title: "Currywurst mit Pommes aus dem Ofen",
    image: "recipe_127.jpg",
    portions: 2,
    ingredients: [
      "2 Bratwürste",
      "400 g Kartoffeln",
      "2 EL Öl",
      "2 EL Tomatenmark",
      "1 TL Currypulver",
      "1 TL Paprikapulver",
      "1 TL Honig",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Kartoffeln in Streifen schneiden, mit Öl, Salz und Paprikapulver vermengen.",
      "2. Auf ein Blech legen und im Ofen bei 200 °C 30 Min. backen.",
      "3. Würste braten.",
      "4. Sauce: Tomatenmark, Currypulver, Honig, etwas Wasser, Salz, Pfeffer vermengen und erhitzen.",
      "5. Wurst in Scheiben schneiden, mit Sauce übergießen.",
      "6. Mit Pommes servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht",
      "Snack"
    ],
    preparation_time: "40 Minuten",
    nutrition: {
      calories: 740,
      protein_g: 28,
      carbohydrates_g: 50,
      fat_g: 48
    },
    id: "06f57917-3405-42a1-aed4-486ac8e3916c"
  },
{
    title: "Penne mit Thunfisch-Tomaten-Sauce",
    image: "recipe_128.jpg",
    portions: 2,
    ingredients: [
      "200 g Penne",
      "1 Dose Thunfisch",
      "1 Dose gehackte Tomaten",
      "1 Zwiebel",
      "1 Knoblauchzehe",
      "1 TL Oregano",
      "1 EL Öl",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Nudeln al dente kochen.",
      "2. Zwiebel und Knoblauch fein hacken, in Öl anbraten.",
      "3. Thunfisch abtropfen und zugeben.",
      "4. Mit Tomaten, Oregano, Salz, Pfeffer köcheln lassen (10 Min).",
      "5. Nudeln untermischen und servieren."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 620,
      protein_g: 34,
      carbohydrates_g: 50,
      fat_g: 28
    },
    id: "0dee8ee7-e43d-46fc-9d50-89b585f83aaa"
  },
{
    title: "Linsensalat mit Schafskäse",
    image: "recipe_129.jpg",
    portions: 2,
    ingredients: [
      "120 g grüne Linsen",
      "1/2 Gurke",
      "1 Tomate",
      "100 g Schafskäse",
      "1 EL Olivenöl",
      "1 EL Balsamico",
      "Petersilie",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Linsen garen und abkühlen lassen.",
      "2. Gemüse würfeln, Schafskäse zerbröseln.",
      "3. Alles mit Öl, Essig und Gewürzen vermengen.",
      "4. Mit Petersilie bestreuen und kalt servieren."
    ],
    diet_types: [
      "Vegetarisch",
    ],
    categories: [
      "Salat",
      "Beilage"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 430,
      protein_g: 22,
      carbohydrates_g: 32,
      fat_g: 22
    },
    id: "296af97f-c03f-457f-b1fa-0488eecde846"
  },
{
    title: "Rindergeschnetzeltes mit Paprika",
    image: "recipe_130.jpg",
    portions: 2,
    ingredients: [
      "300 g Rindergeschnetzeltes",
      "1 Paprika",
      "1 Zwiebel",
      "2 EL Sahne",
      "1 EL Öl",
      "Salz",
      "Pfeffer",
      "Petersilie"
    ],
    instructions: [
      "1. Fleisch mit Öl scharf anbraten.",
      "2. Zwiebel und Paprika in Streifen schneiden, mitbraten.",
      "3. Mit Salz, Pfeffer und Petersilie würzen.",
      "4. Sahne zugeben, 5 Min. köcheln lassen.",
      "5. Mit Beilage nach Wahl servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 560,
      protein_g: 36,
      carbohydrates_g: 10,
      fat_g: 38
    },
    id: "d3a71a7a-8558-4060-b6cc-653e44d30e0f"
  },
{
    title: "Tortilla mit Schinken und Käse",
    image: "recipe_131.jpg",
    portions: 2,
    ingredients: [
      "2 große Tortilla-Wraps",
      "100 g gekochter Schinken",
      "80 g Käse",
      "1 Tomate",
      "1 TL Senf",
      "Salatblätter",
      "Pfeffer"
    ],
    instructions: [
      "1. Wraps kurz erwärmen.",
      "2. Senf auf die Wraps streichen.",
      "3. Schinken, Käse, Tomaten in Scheiben und Salat darauflegen.",
      "4. Mit Pfeffer würzen, eng einrollen.",
      "5. Halbieren und servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Snack"
    ],
    preparation_time: "15 Minuten",
    nutrition: {
      calories: 480,
      protein_g: 22,
      carbohydrates_g: 28,
      fat_g: 30
    },
    id: "2f84157c-3a6d-458e-9a6b-4d5e459e82d1"
  },
{
    title: "Bratkartoffeln mit Spiegelei",
    image: "recipe_132.jpg",
    portions: 2,
    ingredients: [
      "400 g gekochte Kartoffeln",
      "2 Zwiebeln",
      "2 Eier",
      "1 EL Öl",
      "Salz",
      "Pfeffer",
      "Petersilie"
    ],
    instructions: [
      "1. Kartoffeln in Scheiben schneiden.",
      "2. In Öl knusprig braten.",
      "3. Zwiebeln in Ringe schneiden, mitbraten.",
      "4. Spiegeleier in separater Pfanne braten.",
      "5. Alles zusammen servieren, mit Petersilie garnieren."
    ],
    diet_types: [
      "Vegetarisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 520,
      protein_g: 14,
      carbohydrates_g: 45,
      fat_g: 30
    },
    id: "920ee7ed-a047-42fb-9334-5f66d1f21289"
  },
{
    title: "Schinken-Käse-Toast",
    image: "recipe_133.jpg",
    portions: 2,
    ingredients: [
      "4 Scheiben Toastbrot",
      "2 Scheiben Schinken",
      "2 Scheiben Käse",
      "1 TL Butter"
    ],
    instructions: [
      "1. Toastscheiben mit Butter bestreichen.",
      "2. Je eine Scheibe Schinken und Käse auf zwei Brote legen.",
      "3. Mit je einer zweiten Brotscheibe bedecken.",
      "4. In Pfanne oder Sandwichmaker goldbraun rösten."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Snack",
      "Frühstück"
    ],
    preparation_time: "10 Minuten",
    nutrition: {
      calories: 400,
      protein_g: 18,
      carbohydrates_g: 28,
      fat_g: 22
    },
    id: "5e3a70aa-44ef-4f2e-b55f-6cce0d1dd83f"
  },
{
    title: "Lachs mit Kräuterkruste",
    image: "recipe_134.jpg",
    portions: 2,
    ingredients: [
      "2 Lachsfilets",
      "2 EL Semmelbrösel",
      "1 EL Butter",
      "1 TL Senf",
      "Kräuter (z. B. Dill, Petersilie)",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "1. Backofen auf 180 °C vorheizen.",
      "2. Kräuter fein hacken, mit Butter, Senf, Semmelbröseln vermengen.",
      "3. Lachs salzen, pfeffern und mit der Masse bestreichen.",
      "4. Auf Backpapier setzen und ca. 15 Min. backen.",
      "5. Mit Beilage nach Wahl servieren."
    ],
    diet_types: [
      "Fisch",
    ],
    categories: [
      "Hauptgericht"
    ],
    preparation_time: "25 Minuten",
    nutrition: {
      calories: 550,
      protein_g: 36,
      carbohydrates_g: 10,
      fat_g: 38
    },
    id: "50c216a3-dbf1-428c-9142-46b539bf4201"
  },
{
    title: "Nudelsalat mit Würstchen",
    image: "recipe_135.jpg",
    portions: 2,
    ingredients: [
      "200 g Nudeln",
      "2 Wiener Würstchen",
      "1 Gewürzgurke",
      "1 EL Mayonnaise",
      "1 TL Senf",
      "Salz",
      "Pfeffer",
      "Petersilie"
    ],
    instructions: [
      "1. Nudeln kochen und abkühlen lassen.",
      "2. Würstchen und Gurke in Scheiben schneiden.",
      "3. Alles mit Mayonnaise, Senf, Salz und Pfeffer vermengen.",
      "4. Mit Petersilie bestreuen und kalt servieren."
    ],
    diet_types: [
      "Fleisch",
    ],
    categories: [
      "Beilage",
      "Snack"
    ],
    preparation_time: "30 Minuten",
    nutrition: {
      calories: 600,
      protein_g: 22,
      carbohydrates_g: 45,
      fat_g: 34
    },
    id: "2aa318ae-7a7b-4501-aed3-eae5cd5f2cf3"
  }
]);
