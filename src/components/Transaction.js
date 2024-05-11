import Item from "./Item"
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid'

const Transaction = ()=>{
    const data=[
        {title:"ค่าไฟ",amount:2000},
        {title:"ค่าน้ำ",amount:23},
        {title:"ค่าขนม",amount:800}
    ]
    const data1=[
        {title:"ค่าบลาๆ",amount:3000},
        {title:"ค่าจักกิ้งแก้ส",amount:23},
        {title:"ค่ารถ",amount:800}
    ]
    return (
        <ul className="item-list">
            {/* <Item title="ค่ารักษาพยาบาล" amount="2000" key ={uuidv4()}/>
            <Item title="เงินเดือน" amount="80000" key ={uuidv4()}/>
            <Item title="ค่าเดินทาง" amount="200" key ={uuidv4()}/> */}
            {data.map((element)=>{
                return <Item title={element.title} amount={element.amount} key ={uuidv4()}/>
            })}
            {/* หรือจะเขียนแบบนี้เป็นรูปย่อก็ได้ */}
            {data1.map((element)=>{
                return <Item {...element} key ={uuidv4()}/>
            })}
        </ul>
    )
}
export default Transaction