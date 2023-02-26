import "./style.css"
import { ListAll } from "./ListAll/ListAll"
import { SortBar } from "./SortBar/SortBar"
export function Product(){
    return(<div className="product">
        <ListAll/>
        <SortBar/>
    </div>)
}