exports.up = function(knex, Promise) {
    return knex.schema.createTable("student", function(student){
        student.increments();
        student.string("first-name");
        student.string("last-name");
        student.date("hire-date");
        student.integer("cohort").references("cohort", "id");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("student"); 
};

