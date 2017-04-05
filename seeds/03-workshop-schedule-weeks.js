exports.seed = function(knex, Promise) {
    return knex.schema.raw("TRUNCATE TABLE \"workshop-schedule-week\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("workshop-schedule-week").insert([{
                label: "Week 1",
                "workshop-schedule": 1
            },{
                label: "Week 2",
                "workshop-schedule": 1
            },{
                label: "Week 3",
                "workshop-schedule": 1
            },{
                label: "Week 4",
                "workshop-schedule": 1
            },{
                label: "Week 5",
                "workshop-schedule": 1
            },{
                label: "Week 6",
                "workshop-schedule": 1
            },{
                label: "Week 7",
                "workshop-schedule": 1
            },{
                label: "Week 8",
                "workshop-schedule": 1
            }]);
        });
};
