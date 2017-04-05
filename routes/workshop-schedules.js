var express = require("express");
var router = express.Router();
var queries = require("../data/queries");
var workshopSchedulesSerializer = require("../data/serializers").workshopSchedules;

router.get("/", function(request, response){
    queries.getWorkshopSchedules().then(workshopSchedule => {
        response.json(workshopSchedulesSerializer.serialize(workshopSchedule));
    });
});
router.get("/:id", function(request, response){
    queries.getWorkshopSchedule(request.params.id).then(workshopSchedule => {
        response.json(workshopSchedulesSerializer.serialize(workshopSchedule));
    });
});

module.exports = router;
