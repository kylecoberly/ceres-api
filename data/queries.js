require("dotenv").load();
var database = require("./database_connection");
var serializers = require("./serializers");
var learn = require("./learn");
var pluralize = require("pluralize");
var axios = require("axios");

module.exports = {
    getStudents,
    getStudent,
    getAggregateStudent,
    getCohorts,
    getCohort,
    getAggregateCohort,
    getInstructors,
    getInstructor,
    getWorkshopScheduleDays,
    getWorkshopScheduleDay,
    getWorkshopScheduleWeeks,
    getWorkshopScheduleWeek,
    getWorkshopSchedules,
    getWorkshopSchedule,
    getCurrentPerformancesByStudent
};

function getStudents(){
    return database("student").select();
}
function getStudent(id){
    return database("student").select().where({id}).first();
}
function getAggregateStudent(cohortId, id){
    return getNormalizedStudent(cohortId, id)
    .then(student => {
        return getNormalizedPerformances(cohortId, student).then(performances => {
            student.performances = performances[0].performances;
            return student;
        });
    }).catch(console.error);
}
function getNormalizedPerformances(cohortId, student){
    return learn.getStudentPerformances(cohortId, student.id);
}
function getCohorts(){
    return database("cohort").pluck("id").then(function(cohorts){
        return Promise.all(cohorts.map(getCohort));
    });
}
function getCohort(id){
    return joinRelatedData("cohort", "student", id);
}
function getAggregateCohort(id){
    return getNormalizedCohort(id)
    .then(cohort => {
        return addRelatedRecords(cohort, {
            label: "students",
            retrieveData: getNormalizedStudents
        },{
            label: "standards",
            retrieveData: getCoreStandardsForCohort
        });
    }).catch(console.error);
}
function addRelatedRecords(record, ...relatedRecords){
    return Promise.all(relatedRecords.map(relatedRecord => {
        return relatedRecord.retrieveData(record).then(retrievedData => {
            return addToRelationships(record, {
                label: relatedRecord.label,
                data: retrievedData
            });
        });
    })).then(() => record);
}
function getNormalizedCohort(cohortId){
    return learn.getLearnCohortById(cohortId)
    .then(normalizeAxiosResponse);
}
function getNormalizedStudents(cohort){
    return learn.getLearnCohortStudents(cohort.data.id)
        .then(normalizeAxiosResponse)
        .then(students => students.data);
}
function getNormalizedStudent(cohortId, studentId){
    return learn.getNormalizedStudent(cohortId, studentId);
}
function getCoreStandardsForCohort(cohort){
    return learn.getStandards(cohort.data.relationships.curriculum.data.id)
        .then(normalizeAxiosResponse)
        .then(standards => standards.data.filter(isCoreStandard))
}
function normalizeAxiosResponses(responses){
    return responses.map(normalizeAxiosResponse);
}
function normalizeAxiosResponse(response){
    return response.data;
}
function isCoreStandard(standard){
    return standard.attributes.standard_type === "core";
}
function addToRelationships(results, ...relatedRecords){
    relatedRecords.forEach(relatedRecord => {
        results.data.relationships[relatedRecord.label] = {
            data: relatedRecord.data.map(item => {
                return {type: relatedRecord.label, id: item.id};
            })
        };
    });
    return results;
}
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
function getCurrentPerformancesByStudent(cohort_id, student_id){
    const PERFORMANCES_API = `https://learn.galvanize.com/api/v1/external/cohorts/${cohort_id}/performances/performances_json?&filter_by=current`;
    return axios.get(PERFORMANCES_API, {
        headers: {
            Authorization: `Bearer ${process.env.LEARN_API_KEY}`
        } 
    }).then(response => response.data.performances.filter(performance => performance.user_id == student_id));
    // 
}
// function getPerformance(id){
//     return data("performance").select().where({id}).first();
// }

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
