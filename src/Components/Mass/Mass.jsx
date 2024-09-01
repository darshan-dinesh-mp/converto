import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import style from "../style.module.css"

function Mass() {
    const [fromValue, setFromValue] = useState(0)
    const [result, setResult] = useState(0)
    const [fromUnit, setFromUnit] = useState("Kilogram")
    const [toUnit, setToUnit] = useState("Gram")

    useEffect(() => {
        if (fromUnit == "Kilogram") {
            if (toUnit == "Kilogram") {
                setResult(fromValue)
            }
            else if (toUnit == "Gram") {
                setResult(parseFloat(fromValue) * 1000)
            }
            else if (toUnit == "Milligram") {
                setResult(parseFloat(fromValue) * 1000000)
            }
            else if (toUnit == "Metric Ton") {
                setResult(parseFloat(fromValue) / 1000)
            }
        }
        if (fromUnit == "Gram") {
            if (toUnit == "Kilogram") {
                setResult(parseFloat(fromValue) / 1000)
            }
            else if (toUnit == "Gram") {
                setResult(fromValue)
            }
            else if (toUnit == "Milligram") {
                setResult(parseFloat(fromValue) * 1000)
            }
            else if (toUnit == "Metric Ton") {
                setResult(parseFloat(fromValue) / 1000000)
            }
        }
        if (fromUnit == "Milligram") {
            if (toUnit == "Kilogram") {
                setResult(parseFloat(fromValue) / 1000000)
            }
            else if (toUnit == "Gram") {
                setResult(parseFloat(fromValue) / 1000)
            }
            else if (toUnit == "Milligram") {
                setResult(fromValue)
            }
            else if (toUnit == "Metric Ton") {
                setResult(parseFloat(fromValue) / 1000000000)
            }
        }
        if (fromUnit == "Metric Ton") {
            if (toUnit == "Kilogram") {
                setResult(parseFloat(fromValue) * 1000)
            }
            else if (toUnit == "Gram") {
                setResult(parseFloat(fromValue) * 1000000)
            }
            else if (toUnit == "Milligram") {
                setResult(parseFloat(fromValue) * 1000000000)
            }
            else if (toUnit == "Metric Ton") {
                setResult(fromValue)
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
        <div className={`${style.main}`}>
            <div className='flex justify-center items-center border rounded-[10px]'>
                <input value={fromValue} type="number" name='from' id='from' onChange={changeFromValue} placeholder='Enter the length' />
                <select value={fromUnit} name="fromUnit" id="fromUnit" onChange={changeFromUnit}>
                    <option value="Kilogram">Kilogram</option>
                    <option value="Gram">Gram</option>
                    <option value="Milligram">Milligram</option>
                    <option value="Metric Ton">Metric Ton</option>
                </select>
            </div>
            <FontAwesomeIcon icon={faRightLong} className={`${style.icon} text-2xl text-white`} />
            <div className='flex justify-center items-center border rounded-[10px]'>
                <input value={result} type="text" name='to' id='to' placeholder='Result is shown here' />
                <select value={toUnit} name="toUnit" id="toUnit" onChange={changeToUnit}>
                    <option value="Kilogram">Kilogram</option>
                    <option value="Gram">Gram</option>
                    <option value="Milligram">Milligram</option>
                    <option value="Metric Ton">Metric Ton</option>
                </select>
            </div>
        </div>
    )
}

export default Mass