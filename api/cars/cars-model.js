const db=require("../../data/db-config");
const getAll = () => {
  // HOKUS POKUS
  return db("cars");
}

const getById = () => {
  // HOKUS POKUS
  return db("cars").where({id}).first();
}

const create = () => {
  // HOKUS POKUS
  return db("cars").insert(newCar)
  .then(insertedId=>{
    return getById(insertedId)
  });
}
module.exports={
  create,getAll,getById
}
