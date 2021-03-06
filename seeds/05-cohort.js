exports.seed = function(knex, Promise) {
    return knex.schema.raw("TRUNCATE TABLE \"cohort\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("cohort").insert([{
                "business-unit-id": 1,
                label: "g38",
                "logo-number": "38",
                "first-day": "2016-10-17",
                "last-day": "2017-03-31",
                "hiring-deadline": "2017-10-17",
                "is-active": true
            },{
                "business-unit-id": 1,
                label: "g41",
                "logo-number": "41",
                "first-day": "2016-11-05",
                "last-day": "2017-04-17",
                "hiring-deadline": "2017-11-05",
                "is-active": true
            },{
                "business-unit-id": 1,
                label: "g43",
                "logo-number": "43",
                "first-day": "2017-01-05",
                "last-day": "2017-07-01",
                "hiring-deadline": "2018-01-05",
                "is-active": true
            },{
                "business-unit-id": 1,
                label: "g46",
                "logo-number": "46",
                "first-day": "2017-02-05",
                "last-day": "2017-08-05",
                "hiring-deadline": "2018-02-05",
                "is-active": true
            },{
                "business-unit-id": 1,
                label: "g51",
                "logo-number": "51",
                "first-day": "2017-04-17",
                "last-day": "2017-10-17",
                "hiring-deadline": "2018-04-17",
                "is-active": true
            },{
                "business-unit-id": 1,
                label: "g31",
                "logo-number": "31",
                "first-day": "2016-06-01",
                "last-day": "2016-12-01",
                "hiring-deadline": "2017-06-01",
                "is-active": true
            },{
                "business-unit-id": 1,
                label: "g30",
                "logo-number": "30",
                "first-day": "2016-06-01",
                "last-day": "2016-12-01",
                "hiring-deadline": "2017-06-01",
                "is-active": true
            },{
                "business-unit-id": 1,
                label: "g29",
                "logo-number": "29",
                "first-day": "2016-05-01",
                "last-day": "2016-11-01",
                "hiring-deadline": "2017-05-01",
                "is-active": true
            },{
                "business-unit-id": 1,
                label: "g25",
                "logo-number": "25",
                "first-day": "2016-04-17",
                "last-day": "2016-10-17",
                "hiring-deadline": "2017-03-31",
                "is-active": true
            }]);
        });
};
