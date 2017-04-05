var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");

var instructors = require("./routes/instructors");
var workshopScheduleDays = require("./routes/workshop-schedule-days");
var workshopScheduleWeeks = require("./routes/workshop-schedule-weeks");
var workshopSchedules = require("./routes/workshop-schedules");

var app = express();

//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/instructors", instructors);
app.use("/api/v1/workshop-schedule-days", workshopScheduleDays);
app.use("/api/v1/workshop-schedule-weeks", workshopScheduleWeeks);
app.use("/api/v1/workshop-schedules", workshopSchedules);

app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.send(err);
});

module.exports = app;
