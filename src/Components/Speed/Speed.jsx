import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import style from "../style.module.css"


function Speed() {

    const [fromValue, setFromValue] = useState(0)
    const [result, setResult] = useState(0)
    const [fromUnit, setFromUnit] = useState("Meter per second")
    const [toUnit, setToUnit] = useState("Kilometer per hour")

    useEffect(() => {
        if (fromUnit == "Meter per second") {
            if (toUnit == "Meter per second") {
                setResult(fromValue)
            }
            else if (toUnit == "Kilometer per hour") {
                setResult(parseFloat((fromValue)) * 3.6)
            }
            else if (toUnit == "Mile per hour") {
                setResult(parseFloat(fromValue) * 2.237)
            }
            else if (toUnit == "Foot per second") {
                setResult(parseFloat(fromValue) * 3.281)
            }
            else if (toUnit == "Knots") {
                setResult(parseFloat(fromValue) * 1.944)
            }
        }
        if (fromUnit == "Kilometer per hour") {
            if (toUnit == "Meter per second") {
                setResult(parseFloat(fromValue) / 3.6)
            }
            else if (toUnit == "Kilometer per hour") {
                setResult(fromValue)
            }
            else if (toUnit == "Mile per hour") {
                setResult(parseFloat(fromValue) / 1.609)
            }
            else if (toUnit == "Foot per second") {
                setResult(parseFloat(fromValue) / 1.097)
            }
            else if (toUnit == "Knots") {
                setResult(parseFloat(fromValue) / 1.852)
            }
        }
        if (fromUnit == "Mile per hour") {
            if (toUnit == "Meter per second") {
                setResult(parseFloat(fromValue) / 2.237)
            }
            else if (toUnit == "Kilometer per hour") {
                setResult(parseFloat((fromValue)) * 1.609)
            }
            else if (toUnit == "Mile per hour") {
                setResult(fromValue)
            }
            else if (toUnit == "Foot per second") {
                setResult(parseFloat(fromValue) * 1.467)
            }
            else if (toUnit == "Knots") {
                setResult(parseFloat(fromValue) / 1.151)
            }
        }
        if (fromUnit == "Foot per second") {
            if (toUnit == "Meter per second") {
                setResult(parseFloat(fromValue) / 3.281)
            }
            else if (toUnit == "Kilometer per hour") {
                setResult(parseFloat((fromValue)) * 1.097)
            }
            else if (toUnit == "Mile per hour") {
                setResult(parseFloat(fromValue) / 1.467)
            }
            else if (toUnit == "Foot per second") {
                setResult(fromValue)
            }
            else if (toUnit == "Knots") {
                setResult(parseFloat(fromValue) / 1.688)
            }
        }
        if (fromUnit == "Knots") {
            if (toUnit == "Meter per second") {
                setResult(parseFloat(fromValue) / 1.944)
            }
            else if (toUnit == "Kilometer per hour") {
                setResult(parseFloat((fromValue)) * 1.852)
            }
            else if (toUnit == "Mile per hour") {
                setResult(parseFloat(fromValue) * 1.151)
            }
            else if (toUnit == "Foot per second") {
                setResult(parseFloat(fromValue) * 1.688)
            }
            else if (toUnit == "Knots") {
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
        <div className={`${style.main} flex items-center justify-center w-auto`}>
            <div className='flex justify-center items-center border border-gray-500 rounded-[10px]'>
                <input value={fromValue} type="number" name='from' id='from' onChange={changeFromValue} placeholder='Enter the value' />
                <select value={fromUnit} name="fromUnit" id="fromUnit" onChange={changeFromUnit}>
                    <option value="Meter per second">Meter per second</option>
                    <option value="Kilometer per hour">Kilometer per hour</option>
                    <option value="Mile per hour">Mile per hour</option>
                    <option value="Foot per second">Foot per second</option>
                    <option value="Knots">Knots</option>
                </select>
            </div>
            <FontAwesomeIcon icon={faRightLong} className='text-2xl text-white' />
            <div className='flex justify-center items-center border border-gray-500 rounded-[10px]'>
                <input value={result} type="text" name='to' id='to' placeholder='Result is shown here' />
                <select value={toUnit} name="toUnit" id="toUnit" onChange={changeToUnit}>
                    <option value="Meter per second">Meter per second</option>
                    <option value="Kilometer per hour">Kilometer per hour</option>
                    <option value="Mile per hour">Mile per hour</option>
                    <option value="Foot per second">Foot per second</option>
                    <option value="Knots">Knots</option>
                </select>
            </div>
        </div>
    )
}

export default Speed