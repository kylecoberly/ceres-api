exports.seed = function(knex, Promise) {
    return knex.schema.raw("TRUNCATE TABLE \"cohort\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("cohort").insert([{
                label: "g38",
                "first-day": "2016-10-17",
                "last-day": "2017-03-31",
                "hiring-deadline": "2017-10-17",
                "is-active": true
            },{
                label: "g41",
                "first-day": "2016-11-05",
                "last-day": "2017-04-17",
                "hiring-deadline": "2017-11-05",
                "is-active": true
            },{
                label: "g43",
                "first-day": "2017-01-05",
                "last-day": "2017-07-01",
                "hiring-deadline": "2018-01-05",
                "is-active": true
            },{
                label: "g46",
                "first-day": "2017-02-05",
                "last-day": "2017-08-05",
                "hiring-deadline": "2018-02-05",
                "is-active": true
            },{
                label: "g51",
                "first-day": "2017-04-17",
                "last-day": "2017-10-17",
                "hiring-deadline": "2018-04-17",
                "is-active": true
            },{
                label: "g31",
                "first-day": "2016-06-01",
                "last-day": "2016-12-01",
                "hiring-deadline": "2017-06-01",
                "is-active": true
            },{
                label: "g30",
                "first-day": "2016-06-01",
                "last-day": "2016-12-01",
                "hiring-deadline": "2017-06-01",
                "is-active": true
            },{
                label: "g29",
                "first-day": "2016-05-01",
                "last-day": "2016-11-01",
                "hiring-deadline": "2017-05-01",
                "is-active": true
            },{
                label: "g25",
                "first-day": "2016-04-17",
                "last-day": "2016-10-17",
                "hiring-deadline": "2017-03-31",
                "is-active": true
            }]);
        });
};
