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

module.exports = {
    workshopSchedules,
    workshopScheduleWeeks,
    workshopScheduleDays,
    instructors
};
