import {useState} from "react"

const Hooks = () => {

    let age = 19

    const [newAge, setNewAge] = useState(25)
    
    function changeAge(){
        console.log("okay")
        
        setNewAge(19)
    }


    return (
        <div>
            <p>Age: {age}</p>
            <button onClick={changeAge}>Change Age</button>

            <p>Age: {newAge}</p>
            <button onClick={changeAge}>Change new Age</button>
        </div>
    )
}

export default Hooks