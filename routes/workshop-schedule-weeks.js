var express = require("express");
var router = express.Router();
var queries = require("../data/queries");
var workshopScheduleWeeksSerializer = require("../data/serializers").workshopScheduleWeeks;

router.get("/", function(request, response){
    queries.getWorkshopScheduleWeeks().then(workshopScheduleWeeks => {
        response.json(workshopScheduleWeeksSerializer.serialize(workshopScheduleWeeks));
    });
});
router.get("/:id", function(request, response){
    queries.getWorkshopScheduleWeek(request.params.id).then(workshopScheduleWeek => {
        response.json(workshopScheduleWeeksSerializer.serialize(workshopScheduleWeek));
    });
});

module.exports = router;
