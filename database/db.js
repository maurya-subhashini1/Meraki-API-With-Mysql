const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Navgurukul@123",
      database: "merakidatabase",
    },
  });

knex.schema.createTable("merarkitable",(table)=>{
    table.increments("id");
    table.string("name");
    table.string("logo");
    table.string("notes");
    table.string("days_to_complete")
    table.string("short_description")
    table.string("type")
    table.string("course_type")
    table.string("lang_available")
  })
  .then(()=>{
    console.log("created");
  
  }).catch(()=>{
    console.log("already created");
  })



module.exports=knex