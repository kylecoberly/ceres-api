var express = require("express");
var router = express.Router();
var queries = require("../data/queries");
var studentsSerializer = require("../data/serializers").students;

router.get("/", function(request, response){
    queries.getStudents().then(students => {
        response.json(studentsSerializer.serialize(students));
    });
});
router.get("/:id", function(request, response){
    queries.getStudent(request.params.id).then(student => {
        response.json(studentsSerializer.serialize(student));
    });
});

module.exports = router;
