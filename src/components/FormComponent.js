import {useState,useEffect} from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'

const FormComponent =(props)=>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] =useState(false)

    const inputTitle=(event)=> {
        setTitle(event.target.value) //จะเป็นการเก็บค่าที่ป้อนไปไว้ใน title บรรทัดที่ 4
    }
    const inputAmount =(event)=>{
        setAmount(event.target.value) //จะเป็นการเก็บค่าที่ป้อนไปไว้ใน amount บรรทัดที่ 5
    }
    const saveItem =(event)=>{
        event.preventDefault() //ไม่ให้หน้า web reset
        const itemData ={
            id:uuidv4(),
            title:title,
            amount:Number(amount)//ให้เป็นตัวเลข
        }
        props.onAddItem(itemData)
        setTitle('')//เป็นการเคลียค่าใน hooks
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!=0 //ชื่อรายการต้องไม่เป็นค่าว่าง amount ต้องไม่เป็นเลข 0 จะทำ
        setFormValid(checkData)
    },[title,amount])//เช็คตรงamount title ว่ามีการเปลี่ยนแปลงมั้ยถ้ามีจะทำการเรียกใช้ useEffect
    return(
        <div>
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุฌ" onChange={inputTitle} value={title}></input>
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="text" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}></input>
            </div>
            <div>
                <button className="btn" type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
            </div>
        </form>
    </div>
    )
}
//ปุ่มจะกดได้ฏ้ต่อเมื่อ amount ไม่เท่ากับ 0
export default FormComponent