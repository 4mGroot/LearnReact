import { useContext } from 'react'; //รูปย่อในการใช้ useContext
import DataContext from '../data/DataContext';//รูปย่อในการใช้ useContext
import './ReportComponent.css'
const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext)// const {income,expense} สลาย array ที่ส่งมาจาก provider จาก app.js
    const formatNumber =(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')//ส่งตัวเลขมา แล้วส่งเลขที่เป็นแปลงเป็นใส่ลูกน้ำคั่นออกไป
    }
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{formatNumber((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">฿{formatNumber(expense)}</p>
                </div>
            </div>
            
        </div>
    )
}
export default ReportComponent