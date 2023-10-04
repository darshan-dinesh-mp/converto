import React, { useState } from 'react'
import Length from '../Length/Length'
import o from "./Options.module.css"
import Temperature from '../Temperature/Temperature'
import Speed from '../Speed/Speed'

function Options() {

    const [optionValue, setOptionValue] = useState("Length")

    function setValue(event) {
        setOptionValue(event.target.value)
    }
    return (
        <>
            <div className={`${o.container}`}>
                <select value={optionValue} onChange={setValue} name="metrics" id="metrics" className={`${o.select}`}>
                    <option value="Length">Length</option>
                    <option value="Temperature">Temperature</option>
                    <option value="Speed">Speed</option>
                    <option value="Volume">Volume</option>
                </select>
                <div className={`${o.component_div} mt-[3rem]`}>
                    {optionValue == "Length" ? <Length /> : ''}
                    {optionValue == "Temperature" ? <Temperature/> : ''}
                    {optionValue == "Speed" ? <Speed/> : ''}
                </div>
            </div>
        </>
    )
}

export default Options