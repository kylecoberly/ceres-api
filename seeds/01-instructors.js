exports.seed = function(knex, Promise) {
    return knex.schema.raw("TRUNCATE TABLE instructor RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("instructor").insert([{
                "first-name": "Kyle",
                "last-name": "Coberly"
            },{
                "first-name": "Danny",
                "last-name": "Fritz"
            },{
                "first-name": "CJ",
                "last-name": "Reynolds"
            },{
                "first-name": "Carlos",
                "last-name": "Rodrigues"
            },{
                "first-name": "Brooks",
                "last-name": "Patton"
            },{
                "first-name": "Roberto",
                "last-name": "Ortega"
            },{
                "first-name": "Chad",
                "last-name": "Drummond"
            },{
                "first-name": "Mairin",
                "last-name": "Bailey"
            },{
                "first-name": "Elana",
                "last-name": "Kopelevich"
            },{
                "first-name": "Sarah",
                "last-name": "Healey"
            },{
                "first-name": "Isaac",
                "last-name": "Miller"
            },{
                "first-name": "Peter",
                "last-name": "Ostiguy"
            },{
                "first-name": "Gina",
                "last-name": "DeBell"
            }]);
        });
};
