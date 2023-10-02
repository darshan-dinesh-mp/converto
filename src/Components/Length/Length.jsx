import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import l from "../style.module.css"

function Length() {

    const [fromValue, setFromValue] = useState("")
    const [result, setResult] = useState("")
    const [fromUnit, setFromUnit] = useState("cm")
    const [toUnit, setToUnit] = useState("m")

    useEffect(() => {
        if (fromUnit=="cm") {
            if (toUnit=="cm") {
                setResult(fromValue)
            }
            else{
                setResult(fromValue/100)
            }
        }
      return () => {
        }
    }, [fromValue,fromUnit,toUnit])
    
    function changeFromUnit(event){
        setFromUnit(event.target.value)
    }
    function changeToUnit(event){
        setToUnit(event.target.value)
    }
    function changeFromValue(event){
        setFromValue(event.target.value)
    }
    function changeResult(event){
        setResult(event.target.value)
    }

    
    return (
        <div className={`${l.main} flex items-center justify-center w-auto`}>
            <div className='flex justify-center items-center'>
                <input value={fromValue} type="number" name='from' id='from' onChange={changeFromValue} placeholder='Enter the length' />
                <select value={fromUnit} name="fromUnit" id="fromUnit" onChange={changeFromUnit}>
                    <option value="cm">cm</option>
                    <option value="m">m</option>
                </select>
            </div>
            <FontAwesomeIcon icon={faRightLong} className='text-2xl text-white' />
            <div className='flex justify-center items-center'>
                <input value={result} type="number" name='to' id='to' onChange={changeResult} placeholder='Result is shown here' />
                <select value={toUnit} name="toUnit" id="toUnit" onChange={changeToUnit}>
                    <option value="cm">cm</option>
                    <option value="m">m</option>
                </select>
            </div>
        </div>
    )
}

export default Length