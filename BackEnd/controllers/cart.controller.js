const {getCart,updateTotalCart,deleteOneCart,
     

} = require("../module/cart.model")
const jwt = require("jsonwebtoken");

module.exports.getValueCart = async(req,res)=>{
   let token = req.token
   let dataUser = jwt.verify(token,"chien2811")
   let [dataCart] = await getCart(dataUser.id)
   res.json(dataCart)
}
module.exports.updateCart=async(req,res)=>{
   const {id,total,user_id} = req.body
   await updateTotalCart(total,user_id,id)
   .then(()=>res.json('ok'))
   .catch(err=>console.log(err))
}
module.exports.deleteCart =async(req,res)=>{
   
   await deleteOneCart(req.body.user_id,req.body.id).then(()=>res.json("ok"))
}
module.exports.checkoutCart=async(req,res)=>{
   try {
      
   let data = req.body.dataCart
   await data.forEach(async(i)=>{await deleteOneCart(i.user_id,i.id)})
   res.json("ok")
   } catch (error) {
      res.json(error)
   }

}
