import { useContext } from 'react'; //รูปย่อในการใช้ useContext
import DataContext from '../data/DataContext';//รูปย่อในการใช้ useContext
import './ReportComponent.css'
const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext)// const {income,expense} สลาย array ที่ส่งมาจาก provider จาก app.js
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{(income-expense).toFixed(2)}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">฿{income}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">฿{expense}</p>
                </div>
            </div>
            
        </div>
    )
}
export default ReportComponent