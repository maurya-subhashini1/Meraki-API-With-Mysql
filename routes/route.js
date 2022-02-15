const express=require("express")

const router=express.Router();



const {get,post_meraki_data,delet_data,update_data}=require("../controller/app")


router.get("/get",get)
router.post("/postdata",post_meraki_data)
router.delete("/deletedata/:id",delet_data)
router.put("/updatedata/:id",update_data)


module.exports=router;