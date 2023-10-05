import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import style from "../style.module.css"

function Volume() {
    const [fromValue, setFromValue] = useState(0)
    const [result, setResult] = useState()
    const [fromUnit, setFromUnit] = useState("Liter")
    const [toUnit, setToUnit] = useState("Milliliter")

    useEffect(() => {
        if (fromUnit == "Liter") {
            if (toUnit == "Liter") {
                setResult(fromValue)
            }
            else if (toUnit == "Milliliter") {
                setResult(parseFloat(fromValue) * 1000)
            }
            else if (toUnit == "Cubic meter") {
                setResult(parseFloat(fromValue) / 1000)
            }
            else if (toUnit == "Cubic centimeter") {
                setResult(parseFloat(fromValue) * 1000)
            }
        }
        if (fromUnit == "Milliliter") {
            if (toUnit == "Liter") {
                setResult(parseFloat(fromValue) / 1000)
            }
            else if (toUnit == "Milliliter") {
                setResult(fromValue)
            }
            else if (toUnit == "Cubic meter") {
                setResult(parseFloat(fromValue) / 1000000)
            }
            else if (toUnit == "Cubic centimeter") {
                setResult(parseFloat(fromValue) * 1)
            }
        }
        if (fromUnit == "Cubic meter") {
            if (toUnit == "Liter") {
                setResult(parseFloat(fromValue) * 1000)
            }
            else if (toUnit == "Milliliter") {
                setResult(parseFloat(fromValue) * 1000000)
            }
            else if (toUnit == "Cubic meter") {
                setResult(fromValue)
            }
            else if (toUnit == "Cubic centimeter") {
                setResult(parseFloat(fromValue) * 1000000)
            }
        }
        if (fromUnit == "Cubic centimeter") {
            if (toUnit == "Liter") {
                setResult(parseFloat(fromValue) / 1000)
            }
            else if (toUnit == "Milliliter") {
                setResult(parseFloat(fromValue) * 1)
            }
            else if (toUnit == "Cubic meter") {
                setResult(parseFloat(fromValue) / 1000000)
            }
            else if (toUnit == "Cubic centimeter") {
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
            <div className='flex justify-center items-center'>
                <input value={fromValue} type="number" name='from' id='from' onChange={changeFromValue} placeholder='Enter the length' />
                <select value={fromUnit} name="fromUnit" id="fromUnit" onChange={changeFromUnit}>
                    <option value="Liter">Liter</option>
                    <option value="Milliliter">Milliliter</option>
                    <option value="Cubic meter">Cubic meter</option>
                    <option value="Cubic centimeter">Cubic centimeter</option>
                </select>
            </div>
            <FontAwesomeIcon icon={faRightLong} className={`${style.icon} text-2xl text-white`} />
            <div className='flex justify-center items-center'>
                <input value={result} type="text" name='to' id='to' placeholder='Result is shown here' />
                <select value={toUnit} name="toUnit" id="toUnit" onChange={changeToUnit}>
                    <option value="Liter">Liter</option>
                    <option value="Milliliter">Milliliter</option>
                    <option value="Cubic meter">Cubic meter</option>
                    <option value="Cubic centimeter">Cubic centimeter</option>
                </select>
            </div>
        </div>
    )
}

export default Volume