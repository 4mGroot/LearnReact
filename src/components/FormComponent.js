import './FormComponent.css'
const FormComponent =()=>{
    const inputTitle =(event)=>{
        console.log(event.target.value)
    }
    const inputAmount =(event)=>{
        console.log(event.target.value)
    }
    const saveItem =(event)=>{
        event.preventDefault() //ไม่ให้หน้า web reset
        console.log("บันทึกข้อมูล")
    }
    return(
        <div>
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุฌ" onChange={inputTitle}></input>
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="text" placeholder="ระบุจำนวนเงิน" onChange={inputAmount}></input>
            </div>
            <div>
                <button className="btn" type="submit">บันทึกข้อมูล</button>
            </div>
        </form>
    </div>
    )
}
export default FormComponent