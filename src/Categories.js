import React from 'react'
import { nanoid } from 'nanoid'

function Categories(props) {

    const newBtns = []
    for (let index = 0; index < props.localData.length; index++) {
        if (!newBtns.includes(props.localData[index].category)) {
            newBtns.push(props.localData[index].category)
        }
    }

    return (
        <div className='btns-container'>
            <h1>our menu</h1>
            <div className='btns'>
                <button style={{ backgroundColor: props.category === "all" ? "rgb(220,0,0)" : "transparent" }} onClick={props.onClick}>all</button>
                {newBtns.map(el => <button style={{ backgroundColor: el === props.category ? "rgb(220,0,0)" : "transparent" }} key={nanoid()} onClick={props.onClick}>{el}</button>)}

            </div>
        </div>
    )
}

export default Categories