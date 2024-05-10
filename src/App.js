import Transaction from "./components/Transaction";
const Title =()=><h1>โปรแกรมบัญชี</h1>
const Description=()=><p>บันทึกข้อมูล</p>

function App() {
  return (  
    <div>
      <Title/>
      <Description/>
      <Transaction/>
    </div>
  )
}

export default App;
