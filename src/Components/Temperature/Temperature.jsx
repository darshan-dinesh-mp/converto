import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import style from "../style.module.css"


function Temperature() {

    const [fromValue, setFromValue] = useState(0)
    const [result, setResult] = useState(0)
    const [fromUnit, setFromUnit] = useState("Degree Celcius")
    const [toUnit, setToUnit] = useState("Fahrenheit")

    useEffect(() => {
        if (fromUnit == "Degree Celcius") {
            if (toUnit == "Degree Celcius") {
                setResult(parseFloat(fromValue))
            }
            else if (toUnit == "Fahrenheit") {
                setResult(parseFloat((fromValue) * 9 / 5) + 32)
            }
            else if (toUnit == "Kelvin") {
                setResult(parseFloat(fromValue) + 273.15)
            }
        }
        if (fromUnit == "Fahrenheit") {
            if (toUnit == "Fahrenheit") {
                setResult(fromValue)
            }
            else if (toUnit == "Degree Celcius") {
                setResult((parseFloat(fromValue) - 32) * 5 / 9)
            }
            else if (toUnit == "Kelvin") {
                setResult(((parseFloat(fromValue) - 32) * 5 / 9) + 273.15)
            }
        }
        if (fromUnit == "Kelvin") {
            if (toUnit == "Kelvin") {
                setResult(fromValue)
            }
            else if (toUnit == "Fahrenheit") {
                setResult(((parseFloat(fromValue) - 273.15) * 9 / 5) + 32)
            }
            else if (toUnit == "Degree Celcius") {
                setResult(parseFloat(fromValue) - 273.15 )
            }
        }
        return () => {
        }
    }, [fromValue, fromUnit, toUnit])


    function changeFromUnit(event) {
        setFromUnit(event.target.value)
    }
    function changeToUnit(event) {
        setToUnit(event.target.value)
    }
    function changeFromValue(event) {
        setFromValue(event.target.value)
    }

    return (
        <div className={`${style.main} flex items-center justify-center w-auto`}>
            <div className='flex justify-center items-center border border-gray-500 rounded-[10px]'>
                <input value={fromValue} type="number" name='from' id='from' onChange={changeFromValue} placeholder='Enter the value' />
                <select value={fromUnit} name="fromUnit" id="fromUnit" onChange={changeFromUnit}>
                    <option value="Degree Celcius">Degree Celcius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value="Kelvin">Kelvin</option>
                </select>
            </div>
            <FontAwesomeIcon icon={faRightLong} className='text-2xl text-white' />
            <div className='flex justify-center items-center border border-gray-500 rounded-[10px]'>
                <input value={result} type="text" name='to' id='to' placeholder='Result is shown here' />
                <select value={toUnit} name="toUnit" id="toUnit" onChange={changeToUnit}>
                    <option value="Degree Celcius">Degree Celcius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value="Kelvin">Kelvin</option>
                </select>
            </div>
        </div>
    )
}

export default Temperature