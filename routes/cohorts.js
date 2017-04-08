var express = require("express");
var router = express.Router();
var queries = require("../data/queries");
var cohortsSerializer = require("../data/serializers").cohorts;

router.get("/", function(request, response){
    queries.getCohorts().then(cohorts => {
        response.json(cohortsSerializer.serialize(cohorts));
    });
});
router.get("/:id", function(request, response){
    queries.getCohort(request.params.id).then(cohort => {
        response.json(cohortsSerializer.serialize(cohort));
    });
});

module.exports = router;
