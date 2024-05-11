import { useContext } from 'react'; //รูปย่อในการใช้ useContext
import DataContext from '../data/DataContext';//รูปย่อในการใช้ useContext

const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext)// const {income,expense} สลาย array ที่ส่งมาจาก provider จาก app.js
    return (
        <div>
            <p>รายรับ : {income}</p>
            <p>รายจ่าย : {expense}</p>
        </div>
    )
}
export default ReportComponent