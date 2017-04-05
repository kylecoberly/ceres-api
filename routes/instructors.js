var express = require("express");
var router = express.Router();
var queries = require("../data/queries");
var instructorsSerializer = require("../data/serializers").instructors;

router.get("/", function(request, response){
    queries.getInstructors().then(instructors => {
        response.json(instructorsSerializer.serialize(instructors));
    });
});
router.get("/:id", function(request, response){
    queries.getInstructor(request.params.id).then(instructors => {
        response.json(instructorsSerializer.serialize(instructors));
    });
});

module.exports = router;
