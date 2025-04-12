import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)

    const teamStyle = {
        border : "1px solid purple",
        margin : "10px",

    }
    const AddPlayer =()=>{
        const newPlayer = team + 1
        setTeam(newPlayer)
    }
    const RemovePlyer =()=>{
        setTeam(team - 1)
    }
    return (
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={AddPlayer}>Add</button>
            <button onClick={RemovePlyer}>Remove</button>

        </div>
    )
}