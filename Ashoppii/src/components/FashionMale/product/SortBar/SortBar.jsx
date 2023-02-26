import "./SortBar.css"
import { Select } from 'antd';




const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

export function SortBar() {
    return (<div className="sort-bar">
        <div className="sort-bar-all">
            <div className="sort-bar-one">
                <span>Sắp xếp theo</span>
            </div>
            <div className="sort-bar-two">
                Phổ biến
            </div>
            <div className="sort-bar-three">
                Mới nhất
            </div>
            <div className="sort-bar-for">
                Bán chạy
            </div>


            {onChange.map((i, index) => (
                <div className="sort-bar-five" key={index}>
                    <span>Giá</span>
                    <i class="fa-sharp fa-solid fa-angle-down"></i>
                    (
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'giá',
                                label: 'Giá',
                            },
                            {
                                value: 'price',
                                label: 'Price',
                            },
                        ]}
                    />
                    );
                </div>
            ))}


            <div className="sort-bar-six">

            </div>
        </div>

    </div>)
}