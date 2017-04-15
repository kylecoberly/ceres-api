var test = require("tape");
var request = require("supertest");
var app = require("../app");

test("GET /api/v1/cohorts", function(t){
    request(app)
        .get("/api/v1/cohorts/1")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function(error, response){
            var expected = {};
            var actual = response.body;
            assert.error(error, "No error");
            assert.deepEqual(expected, actual, "Correct results");
            assert.end();
        });
});

test("GET /api/v1/cohorts/:id", function(assert){
    request(app)
        .get("/api/v1/cohorts/1")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function(error, response){
            var expected = {};
            var actual = response.body;
            assert.error(error, "No error");
            assert.deepEqual(expected, actual, "Correct results");
            assert.end();
        });
});
