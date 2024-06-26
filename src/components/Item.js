import PropTypes from 'prop-types';
import './Item.css'
import { useContext } from 'react'; //รูปย่อในการใช้ useContext
import DataContext from '../data/DataContext';//รูปย่อในการใช้ useContext
const Item =(props)=>{ 
    // const name = useContext(DataContext) //รูปย่อในการใช้ useContext
    const {title,amount}=props
    const status=amount<0 ? "expense":"income"//หลัง? คำสั่งเมื่อเป็นจริง หลัง:เมื่อเป็น เท็จ
    const symbol=amount<0 ? "-":"+"
    const formatNumber =(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')//ส่งตัวเลขมา แล้วส่งเลขที่เป็นแปลงเป็นใส่ลูกน้ำคั่นออกไป
    }
    return (
        <li className={status}>{title} <span>{symbol}{formatNumber(Math.abs(amount))}</span></li> //math.abs ทำให้ค่าลบเป็นค่าบวก
    )
}

Item.propTypes={
    // title ต้องเป็นสตริง amout ต้องวเป็น number isrequid=บังคับให้ป้อน
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item