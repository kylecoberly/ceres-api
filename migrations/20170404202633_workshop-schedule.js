exports.up = function(knex, Promise) {
    return knex.schema.createTable("workshop-schedule", function(workshopSchedule){
        workshopSchedule.increments();
        workshopSchedule.string("workshop-name");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("workshop-schedule");  
};
