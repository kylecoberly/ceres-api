exports.up = function(knex, Promise) {
    return knex.schema.createTable("instructor", function(instructor){
        instructor.increments();
        instructor.string("first-name");
        instructor.string("last-name");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("instructor"); 
};
