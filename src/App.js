import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";
import {useState,useEffect,useReducer} from 'react'
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




//jsx Style แบบ in line
const Title =()=><h1 style={{color:"red",textAlign:"center"}}>โปรแกรมบัญชี</h1>
//หรือจะใช้แบบนี้ก็ได้ แบบ in line
const design ={color:"green",textAlign:"center"}

function App() {
  //1.1ข้อมูลเก็บอยู่ที่ app และ app เป็นตัวกระจายขอมูลไปให้componentลูก คือ Transaction โดยส่งข้อมูลโดยใช้ propperty ดดยใช้ props คือ items
  const initData=[
    {id:1,title:"ค่าไฟ",amount:2000},//ข้อมูลเริ่มต้น initData
    {id:2,title:"ค่าน้ำ",amount:23},
    {id:3,title:"ค่าขนม",amount:800}
]
  const [items,setItems]= useState(initData)
  const [reportIncome,setReportIncome]=useState(0)
  const [reportExpense,setReportExpense]=useState(0)
  const onAddNewItem =(newItem)=>{//newItem คือข้อมูลที่ส่งมาจาก form
    setItems((prevItem)=>{
      return [newItem,...prevItem]//ให้ข้อมูลใหม่ที่ส่งเข้ามาอยู่ด้านหน้าข้อมูลเดิม
    })
    }
    useEffect(()=>{
      const amounts = items.map(items=>items.amount)
      const income = amounts.filter(element=>element>0).reduce((total,element)=>total+element,0)
      const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+element,0))*-1
      setReportIncome(income.toFixed(2))
      setReportExpense(expense.toFixed(2))
    },[items,reportIncome,reportExpense])

    //reducer state
  const [ShowReport,setShowreport] = useState(false)
  const reducer =(state,action)=>{
        switch(action.type){
          case "SHOW" :
            return setShowreport(true)
          case "HIDE" :
            return setShowreport(false)
        }
  }
  const [result,dispatch] = useReducer(reducer,ShowReport)
  return (
      <DataContext.Provider value={
        {
          income : reportIncome,
          expense : reportExpense
        }
      }>
        <div className="container">
          <h1 style={design}>สวัสดีครับ</h1>
          <Title/>
          <Router>
            <div>
              <ul className="horizontal-menu">
              <li>
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </ul>
              <Switch>
                <Route path="/" exact>
                  <ReportComponent/>
                </Route>
                <Route path="/insert">
                  <FormComponent onAddItem={onAddNewItem}/>
                  <Transaction items={items}/>
                </Route>
              </Switch>
              
            </div>
          </Router>
          
        </div>
      </DataContext.Provider>
  )
}
//Routerควบคุม link
//บรรทัดที่ 59 การจะใช้ Reportcomponent นั้น ShowReport ต้องเป็น true
//provider มีหน้าที่ส่งข้อมูลไปให้ Consumer
export default App;
