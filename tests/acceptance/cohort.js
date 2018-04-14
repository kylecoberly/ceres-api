var assert = require("assert");
var request = require("supertest");
var app = require("../../app");

describe("GET cohorts", function() {
    it("responds correctly", function(done) {
        request(app)
        .get("/api/v1/cohorts")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
});
