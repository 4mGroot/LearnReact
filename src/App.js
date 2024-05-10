import Transaction from "./components/Transaction";
import './App.css'
//jsx Style แบบ in line
const Title =()=><h1 style={{color:"red",textAlign:"center"}}>โปรแกรมบัญชี</h1>
//หรือจะใช้แบบนี้ก็ได้ แบบ in line
const design ={color:"green",textAlign:"center"}

function App() {
  return (  
    <div className="container">
      <h1 style={design}>สวัสดีครับ</h1>
      <Title/>
      <Transaction/>
    </div>
  )
}

export default App;
