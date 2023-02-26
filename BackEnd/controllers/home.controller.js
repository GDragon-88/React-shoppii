const jwt = require("jsonwebtoken")


const {getCategory,getFlashSale,getShopMall,getProduct,
    getOneProduct,getImage,getSessionValue

} = require('../module/home.model')

const {addCart,getOneCart,updateTotalCart} = require("../module/cart.model")
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

module.exports.getAllProduct =async(req,res)=>{
    const [data] = await getProduct()
    res.json(data)
}
module.exports.getDetailProduct=async(req,res)=>{
    let nameProduct = req.params.value
    let [value] = await getOneProduct(nameProduct)
    let [sourceImg ]= await getImage(value[0].id)
    value[0].url = sourceImg
    res.json(value)
}

module.exports.addProductToCart = async(req,res)=>{
    let [data] = await getSessionValue(req.body.value)
    let token = JSON.parse(data[0].data).token
    let dataUser = jwt.verify(token,'chien2811');
    let [oneCart] = await getOneCart(dataUser.id,req.body.id)
    if(oneCart.length>0){
        
        let sumTotal = oneCart[0].total + req.body.total
        await updateTotalCart(sumTotal,dataUser.id,req.body.id).then(()=>{
            res.json({mess:"Ok"})
    })
    }else{
        await addCart(dataUser.id,req.body.id,req.body.total).then(()=>{
            res.json({mess:"Ok"})
    })

    }
    

}
 