import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../components/Home/category/fetchCategory";
import flashsaleSlice from "../components/Home/flashSale/flashSale";
import shopMallSlice from "../components/Home/shoppeMall/shopMall";
  const store = configureStore({
    reducer:{
        category:categorySlice.reducer,
        flashsale:flashsaleSlice.reducer,
        shopmall:shopMallSlice.reducer
    }
})
export default store;