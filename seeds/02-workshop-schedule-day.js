exports.seed = function(knex, Promise) {
    return knex.schema.raw("TRUNCATE TABLE \"workshop-schedule-day\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("workshop-schedule-day").insert([{
                date: "2017-03-15",
                "workshop-schedule-week": 1,
                instructor: 6
            },{
                date: "2017-3-16",
                "workshop-schedule-week": 1,
                instructor: 6
            },{
                date: "2017-3-21",
                "workshop-schedule-week": 2,
                instructor: 1
            },{
                date: "2017-3-23",
                "workshop-schedule-week": 2,
                instructor: 1
            },{
                date: "2017-3-28",
                "workshop-schedule-week": 3,
                instructor: 12
            },{
                date: "2017-3-30",
                "workshop-schedule-week": 3,
                instructor: 12
            },{
                date: "2017-4-4",
                "workshop-schedule-week": 4,
                instructor: 12
            },{
                date: "2017-4-6",
                "workshop-schedule-week": 4,
                instructor: 12
            },{
                date: "2017-4-11",
                "workshop-schedule-week": 5,
                instructor: 12
            },{
                date: "2017-4-13",
                "workshop-schedule-week": 5,
                instructor: 12
            },{
                date: "2017-4-18",
                "workshop-schedule-week": 6,
                instructor: 12
            },{
                date: "2017-4-20",
                "workshop-schedule-week": 6,
                instructor: 12
            },{
                date: "2017-4-25",
                "workshop-schedule-week": 7,
                instructor: 12
            },{
                date: "2017-4-27",
                "workshop-schedule-week": 7,
                instructor: 12
            },{
                date: "2017-5-2",
                "workshop-schedule-week": 8,
                instructor: 12
            },{
                date: "2017-5-4",
                "workshop-schedule-week": 8,
                instructor: 12
            }]);
        });
};
