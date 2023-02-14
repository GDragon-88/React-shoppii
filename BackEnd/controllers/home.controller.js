const jwt = require("jsonwebtoken")


const {getCategory,getFlashSale,getShopMall} = require('../module/home.model')
module.exports.getAllCategory=async(req,res)=>{
    const [data]= await getCategory();
    res.json(data)
}


module.exports.getAllFlashSale =async(req,res)=>{
    const [data] = await getFlashSale()
   
    res.json(data)
}

module.exports.getAllShopMall =async(req,res)=>{
    const [data] = await getShopMall()
    res.json(data)
}
module.exports.setSession=(req,res)=>{
    let token = req.token
    let data = jwt.verify(token,'chien2811')
    data.password = '';
    res.json(data)
}
