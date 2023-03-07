
exports.up = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.createTable("cars",(table)=>{
    table.increments();
    table.string("vin").notNullable().unique();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.string("milage");
    table.string("title");
    table.string("transmission");
});
};

exports.down = function (knex) {
  // SİHRİNİZİ GÖSTERİN
   knex.schema.dropTableIfExists('cars');
   return;
};
