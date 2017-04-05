exports.up = function(knex, Promise) {
    return knex.schema.createTable("workshop-schedule-day", function(workshopScheduleDay){
        workshopScheduleDay.increments();
        workshopScheduleDay.date("date");
        workshopScheduleDay.integer("workshop-schedule-week").references("workshop-schedule-week", "id");
        workshopScheduleDay.integer("instructor").references("instructor", "id");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("workshop-schedule-day");  
};
