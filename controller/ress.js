const knex=require("../database/db")
const axios=require('axios')
const fs = require('fs')

const meraki_course=axios.get("https://api.merakilearn.org/courses")
    .then( Response=>{
        let data=(Response.data)
        let myfile=JSON.stringify(data,null,4)
        fs.writeFileSync("meraki_data.json",myfile)
    })



const data1=fs.readFileSync('meraki_data.json','utf8')
const saral=JSON.parse(data1)

for(i of saral){
    saraldata=[i]
    

    knex('merarkitable').insert(saraldata).then(()=>{
        console.log('data inserted')
    }).catch((err)=>{
        console.log(err);throw err
    })
    
}
