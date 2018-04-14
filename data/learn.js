require("dotenv").load();
const axios = require("axios");
const JSONAPISerializer = require("jsonapi-serializer").Serializer;
const JSONAPIDeserializer = require("jsonapi-serializer").Deserializer;
const baseURL = "https://learn.galvanize.com/api/v1";

const learnRequest = bindTrailingArguments(axios, {
    headers: {
        Authorization: `Bearer ${process.env.LEARN_API_KEY}`
    } 
});
function getLearnCohortById(cohortId){
    return learnRequest(`${baseURL}/cohorts/${cohortId}`);
}
function getLearnCohortStudents(cohortId){
    return learnRequest(`${baseURL}/cohorts/${cohortId}/students`);
}
function getNormalizedStudent(cohortId, studentId){
    // doesn't exist?
    return learnRequest(`${baseURL}/cohorts/${cohortId}/students`)
        .then(response => response.data.data)
        .then(students => students.filter(student => student.id == studentId))
        .then(student => {
            // also get their hiring data
            return student[0];
        });
}
function getCohortById(cohortId){
    return {};
    // return queries.getCohort(cohortId);
}
function getStandards(curriculumId){
    return learnRequest(`${baseURL}/curriculums/${curriculumId}/standards`);
}
function getStudentPerformances(cohortId, studentId){
    // get this by student?
    return learnRequest(`${baseURL}/external/cohorts/${cohortId}/performances/performances_json?filter_by=current&group_by=student`)
        .then(response => response.data.students)
        .then(students => students.filter(student => student.id == studentId));
}
function getHireDates(cohortId){
    // implement
    return {data: {data: []}};
}
function buildResponse({cohort, students, performances, standards, hireDates}){
    var cohortSerializer = new JSONAPISerializer("cohort", {
        attributes: ["name", "label", "start_date", "end_date", "students"],
        students: {
            attributes: ["first_name", "last_name"],
            included: true,
            ref: true
        }
    });
    return Promise.all([
        new JSONAPIDeserializer().deserialize(cohort),
        students.data
        // new JSONAPIDeserializer().deserialize(performances),
        // new JSONAPIDeserializer().deserialize(standards)
    ]).then(results => {
        results[0].students = results[1];
        // results[0].standards = results[3];
        return cohortSerializer.serialize(results[0]);
    });
    // cohort = new JSONAPIDeserializer().deserialize(cohort).then(deserialized => {
    //     console.log(deserialized);
    // });
    // cohort.data.relationships.students = {
    //     data: students.data.map(student => {
    //         return {
    //             id: student.id,
    //             type: "student"
    //         }
    //     })
    // };
    // return {cohort};
}
function bindTrailingArguments(functionToBind, ...boundArguments) {
    return function(...args) {
        return functionToBind(...args, ...boundArguments);
    };
}

module.exports = {
    getLearnCohortById,
    getLearnCohortStudents,
    getCohortById,
    getStandards,
    getStudentPerformances,
    getHireDates,
    buildResponse,
    getNormalizedStudent
};
