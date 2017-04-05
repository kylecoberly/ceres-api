var database = require("./database_connection");
var serializers = require("./serializers");
var pluralize = require("pluralize");

module.exports = {
    getInstructors,
    getInstructor,
    getWorkshopScheduleDays,
    getWorkshopScheduleDay,
    getWorkshopScheduleWeeks,
    getWorkshopScheduleWeek,
    getWorkshopSchedules,
    getWorkshopSchedule
};

function getInstructors(){
    return database("instructor").select();
}
function getInstructor(id){
    return database("instructor").select().where({id}).first();
}
function getWorkshopScheduleDays(){
    return database("workshop-schedule-day").select();
}
function getWorkshopScheduleDay(id){
    return database("workshop-schedule-day").select().where({id}).first();
}
function getWorkshopScheduleWeeks(){
    return database("workshop-schedule-week").pluck("id").then(function(workshopScheduleWeeks){
        return Promise.all(workshopScheduleWeeks.map(getWorkshopScheduleWeek));
    });
}
function getWorkshopScheduleWeek(id){
    return joinRelatedData("workshop-schedule-week", "workshop-schedule-day", id);
}
function getWorkshopSchedules(){
    return database("workshop-schedule").pluck("id").then(function(workshopSchedules){
        return Promise.all(workshopSchedules.map(getWorkshopSchedule));
    });
}
function getWorkshopSchedule(id){
    return joinRelatedData("workshop-schedule", "workshop-schedule-week", id);
}

function joinRelatedData(parentTable, childTable, id){
    return Promise.all([
        database(parentTable)
            .select()
            .where({id})
            .first(),
        database(childTable)
            .pluck("id")
            .where(parentTable, id)
    ]).then(function(data){
        data[0][pluralize(childTable)] = data[1];
        return data[0];
    });
}
