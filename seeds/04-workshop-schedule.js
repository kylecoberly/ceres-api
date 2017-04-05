exports.seed = function(knex, Promise) {
    return knex.schema.raw("TRUNCATE TABLE \"workshop-schedule\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("workshop-schedule").insert([{
                "workshop-name": "JavaScript Fundamentals",
            }]);
        });
};

