exports.up = function(knex, Promise) {
    return knex.schema.createTable("cohort", function(cohort){
        cohort.increments();
        cohort.date("first-day");
        cohort.date("last-day");
        cohort.date("hiring-deadline");
        cohort.string("label");
        cohort.boolean("is-active");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("cohort"); 
};
