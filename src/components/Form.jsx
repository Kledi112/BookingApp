import { useState } from "react"

function Form(){
    const [form, SetForm] = useState([
        {
            name: "",
            time: ""
        }
    ]);
    const [inputName, setInputName] = useState("");
    const [inputTime, setInputTime] = useState("")
    return (
        <>
            <div id="Form">
            <label>Enter your name: </label>
            <input type="text" placeholder="Name" onChange={(e) => {setInputName(e.target.value)}}/>
            <label>Enter the time you want: </label>
            <input type="time" placeholder="Name" onChange={(e) => {setInputTime(e.target.value)}}/>
            <button onClick={() => {SetForm([{name: inputName, time: inputTime}])}}>Submit</button>
            <p>Your name is: {form[0].name}</p>
            <p>Time you desire is: {form[0].time}</p>
            </div>
        </>
    )
}

export default Form