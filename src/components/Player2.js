import React,{useState} from 'react'

function Player2(props) {
    const handleClick=()=>
    {
        props.parentcallback()
    }
    return (
        <div>
            <button className="btn btn-outline-danger" onClick={handleClick}>{props.value}</button>
        </div>
    )
}

export default Player2
