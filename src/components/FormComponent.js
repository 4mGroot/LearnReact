import {useState} from 'react'
import './FormComponent.css'
const FormComponent =()=>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)

    function inputTitle(event) {
        setTitle(event.target.value) //จะเป็นการเก็บค่าที่ป้อนไปไว้ใน title บรรทัดที่ 4
    }
    const inputAmount =(event)=>{
        setAmount(event.target.value) //จะเป็นการเก็บค่าที่ป้อนไปไว้ใน amount บรรทัดที่ 5
    }
    const saveItem =(event)=>{
        event.preventDefault() //ไม่ให้หน้า web reset
        const itemData ={
            title:title,
            amount:Number(amount)//ให้เป็นตัวเลข
        }
        console.log(itemData)
        setTitle('')//เป็นการเคลียค่าใน hooks
        setAmount(0)
    }
    return(
        <div>
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุฌ" onChange={inputTitle} value={title}></input>
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="text" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}></input>
            </div>
            <div>
                <button className="btn" type="submit">บันทึกข้อมูล</button>
            </div>
        </form>
    </div>
    )
}
export default FormComponent