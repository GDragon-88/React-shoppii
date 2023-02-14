import { Navbar } from "../Navbar/Navbar";
import "./FashionMale.css";
import { Slide } from "./slide/Slide";
import { List } from "./menu/List";
import { TopTrend } from "./TopTrend/TopTrend";
import {Product} from "./product/Product"

export function FashionMale() {
    return (<>
    <Navbar/>
    <Slide/>
    <List/>
    <TopTrend/>
    <Product/>


    </>)
}