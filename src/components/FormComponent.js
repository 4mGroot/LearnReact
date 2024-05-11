import './FormComponent.css'
const FormComponent =()=>{
    const inputTitle =(evevt)=>{
        console.log("Hello world")
    }
    return(
        <div>
        <form>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุฌ" onChange={inputTitle}></input>
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="text" placeholder="ระบุจำนวนเงิน"></input>
            </div>
            <div>
                <button className="btn" type="submit">บันทึกข้อมูล</button>
            </div>
        </form>
    </div>
    )
}
export default FormComponent