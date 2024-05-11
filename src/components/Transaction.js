import Item from "./Item"
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid'
//transactions
//1.2transaction เก็บข้อมูลดังกล่าวที่ส่งมาเป็นค่า props 
const Transaction = (props)=>{
    const {items} = props //1.3เก็บลงในตัว array item
    // const data1=[
    //     {title:"ค่าบลาๆ",amount:3000},
    //     {title:"ค่าจักกิ้งแก้ส",amount:23},
    //     {title:"ค่ารถ",amount:800}
    // ]
    return (
        <ul className="item-list">
            {/* <Item title="ค่ารักษาพยาบาล" amount="2000" key ={uuidv4()}/>
            <Item title="เงินเดือน" amount="80000" key ={uuidv4()}/>
            <Item title="ค่าเดินทาง" amount="200" key ={uuidv4()}/> */}
            {/* {data1.map((element)=>{
                return <Item title={element.title} amount={element.amount} key ={uuidv4()}/>
            })} */}
            {/* หรือจะเขียนแบบนี้เป็นรูปย่อก็ได้ */}
            {items.map((element)=>{
                return <Item {...element} key ={element.id}/>
            })}
        </ul>
    )
}
export default Transaction