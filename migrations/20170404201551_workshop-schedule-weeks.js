exports.up = function(knex, Promise) {
    return knex.schema.createTable("workshop-schedule-week", function(workshopScheduleWeek){
        workshopScheduleWeek.increments();
        workshopScheduleWeek.string("label");
        workshopScheduleWeek.integer("workshop-schedule").references("workshop-schedule", "id");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("workshop-schedule-week");  
};
