import Item from "./Item"
import './Transaction.css'
const Transaction = ()=>{
    const data=[
        {title:"ค่าไฟ",amount:2000},
        {title:"ค่าน้ำ",amount:23},
        {title:"ค่าขนม",amount:800}
    ]
    const data1=[
        {title:"ค่าบลาๆ",amount:2000},
        {title:"ค่าจักกิ้งแก้ส",amount:23},
        {title:"ค่ารถ",amount:800}
    ]
    return (
        <ul className="item-list">
            <Item title="ค่ารักษาพยาบาล" amount="2000"/>
            <Item title="เงินเดือน" amount="80000"/>
            <Item title="ค่าเดินทาง" amount="200"/>
            {data.map((element)=>{
                return <Item title={element.title} amount={element.amount}/>
            })}
            {/* หรือจะเขียนแบบนี้เป็นรูปย่อก็ได้ */}
            {data1.map((element)=>{
                return <Item {...element}/>
            })}
        </ul>
    )
}
export default Transaction