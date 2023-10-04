import React, { useState } from 'react'
import Length from '../Length/Length'
import o from "./Options.module.css"
import Temperature from '../Temperature/Temperature'

function Options() {

    const [optionValue, setOptionValue] = useState("Length")

    function setValue(event) {
        setOptionValue(event.target.value)
    }
    return (
        <>
            <div className='relative top-[30%] w-[100%] flex flex-col items-center justify-center'>
                <select value={optionValue} onChange={setValue} name="metrics" id="metrics" className={`${o.select} w-[40%] text-center outline-none p-4`}>
                    <option value="Length">Length</option>
                    <option value="Temperature">Temperature</option>
                    <option value="Speed">Speed</option>
                    <option value="Volume">Volume</option>
                </select>
                <div className='mt-[3rem] w-[100%]'>
                    {optionValue == "Length" ? <Length /> : ''}
                    {optionValue == "Temperature" ? <Temperature/> : ''}
                </div>
            </div>
        </>
    )
}

export default Options