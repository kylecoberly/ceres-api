var express = require("express");
var router = express.Router();
var queries = require("../data/queries");
var workshopScheduleDaysSerializer = require("../data/serializers").workshopScheduleDays;

router.get("/", function(request, response){
    queries.getWorkshopScheduleDays().then(workshopInstructorDays => {
        response.json(workshopScheduleDaysSerializer.serialize(workshopInstructorDays));
    });
});
router.get("/:id", function(request, response){
    queries.getWorkshopScheduleDay(request.params.id).then(workshopInstructorDay => {
        response.json(workshopScheduleDaysSerializer.serialize(workshopInstructorDay));
    });
});

module.exports = router;
