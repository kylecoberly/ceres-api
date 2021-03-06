var JSONAPISerializer = require("jsonapi-serializer").Serializer;

var workshopSchedules = new JSONAPISerializer("workshop-schedule", {
    attributes: ["workshop-name", "workshop-schedule-weeks"],
    "workshop-schedule-weeks": {
        ref: true
    }
});

var workshopScheduleWeeks = new JSONAPISerializer("workshop-schedule-week", {
    attributes: ["label", "workshop-schedule-days"],
    "workshop-schedule-days": {
        ref: true
    }
});

var workshopScheduleDays = new JSONAPISerializer("workshop-schedule-day", {
    attributes: ["date", "instructor"],
    instructor: {
        ref: true
    }
});

var instructors = new JSONAPISerializer("instructor", {
    attributes: ["first-name", "last-name"]
});

var cohorts = new JSONAPISerializer("cohort", {
    attributes: ["label", "logo-number", "first-day", "last-day", "hiring-deadline", "is-active", "students"],
    students: {
        ref: true
    }
});

var students = new JSONAPISerializer("student", {
    attributes: ["first_name", "last_name", "performances"],
    performances: {
        ref: "id",
        included: true,
        attributes: ["id", "score", "updated_at", "standard_id"] ,
        id: "id"
    }
});

module.exports = {
    workshopSchedules,
    workshopScheduleWeeks,
    workshopScheduleDays,
    instructors,
    cohorts,
    students
};
