
const knex=require("../database/db")


get=(req,res)=>{
        knex.select("*").from("merarkitable")
        .then((data)=>{
                res.send(data)
                console.log(data)
        }).catch((err)=>{
                console.log(err)
                res.send(err)
        })
}

post_meraki_data=(req,res)=>{
        const user={
                id:req.body.id,
                name:req.body.name,
                logo:req.body.logo,
                notes:req.body.notes,
                days_to_complete:req.body.post_meraki_data,
                short_description:req.body.short_description,
                type:req.body.type,
                course_type:req.body.course_type,
                lang_available:req.body.lang_available
        }
        knex("merarkitable").insert(user)
        .then((data)=>{
                res.send({message:"post data successfuly",data:data})

        }).catch((err)=>{
                console.log(err);
                res.send(err)
        })
}

delet_data=(req,res)=>{
        knex.delete("*").from("merarkitable").where("id","=",req.params.id)
        .then((data)=>{
                console.log(data)
                res.send({message:"deleted successfulky",data:data})
        }).catch((err)=>{
                res.send({message:"no deleted"})
        });
}

update_data=(req,res)=>{
        knex.from("merarkitable").where("id","=",req.params.id).update({
                id:req.body.id,
                name:req.body.name,
                logo:req.body.logo,
                notes:req.body.notes,
                days_to_complete:req.body.post_meraki_data,
                short_description:req.body.short_description,
                type:req.body.type,
                course_type:req.body.course_type,
                lang_available:req.body.lang_available

        }).then((data)=>{
                console.log("data")
                res.send({message:"updated successfuly",data:data})
        }).catch((err)=>{
                res.send({message:"not updated"})
                console.log(err)
        })
}



module.exports={get,post_meraki_data,delet_data,update_data}
   



