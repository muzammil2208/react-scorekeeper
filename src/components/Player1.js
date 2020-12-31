import React,{useState} from 'react'

function Player1(props) {
    const handleClick=()=>
    {
        props.parentcallback()
    }
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleClick}>{props.value}</button>
        </div>
    )
}

export default Player1
