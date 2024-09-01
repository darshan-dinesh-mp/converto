import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import style from "../style.module.css"

function Area() {
    const [fromValue, setFromValue] = useState(0)
    const [result, setResult] = useState(0)
    const [fromUnit, setFromUnit] = useState("Square Meters")
    const [toUnit, setToUnit] = useState("Square Kilometers")

    useEffect(() => {
        if (fromUnit == "Square Millimeters") {
            if (toUnit == "Square Millimeters") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(parseFloat(fromValue) / 100)
            }
            else if (toUnit == "Square Meters") {
                setResult(parseFloat(fromValue) / 1000000)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(parseFloat(fromValue) / 1000000000000)
            }
            else if (toUnit == "Square Inches") {
                setResult(parseFloat(fromValue) / 645.2)
            }
            else if (toUnit == "Square Feet") {
                setResult(parseFloat(fromValue) / 92900)
            }
            else if (toUnit == "Square Yards") {
                setResult(parseFloat(fromValue) / 836100)
            }
            else if (toUnit == "Square Miles") {
                setResult(parseFloat(fromValue) / 2590000000000)
            }
        }
        if (fromUnit == "Square Centimeters") {
            if (toUnit == "Square Millimeters") {
                setResult(parseFloat(fromValue) * 100)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Meters") {
                setResult(parseFloat(fromValue) / 10000)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(parseFloat(fromValue) / 10000000000)
            }
            else if (toUnit == "Square Inches") {
                setResult(parseFloat(fromValue) / 6.452)
            }
            else if (toUnit == "Square Feet") {
                setResult(parseFloat(fromValue) / 929)
            }
            else if (toUnit == "Square Yards") {
                setResult(parseFloat(fromValue) / 8361)
            }
            else if (toUnit == "Square Miles") {
                setResult(parseFloat(fromValue) / 25900000000)
            }
        }
        if (fromUnit == "Square Meters") {
            if (toUnit == "Square Millimeters") {
                setResult(parseFloat(fromValue) * 1000000)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(parseFloat(fromValue) * 10000)
            }
            else if (toUnit == "Square Meters") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(parseFloat(fromValue) / 1000000)
            }
            else if (toUnit == "Square Inches") {
                setResult(parseFloat(fromValue) * 1550)
            }
            else if (toUnit == "Square Feet") {
                setResult(parseFloat(fromValue) * 10.764)
            }
            else if (toUnit == "Square Yards") {
                setResult(parseFloat(fromValue) * 1.196)
            }
            else if (toUnit == "Square Miles") {
                setResult(parseFloat(fromValue) / 2590000)
            }
        }
        if (fromUnit == "Square Kilometers") {
            if (toUnit == "Square Millimeters") {
                setResult(parseFloat(fromValue) * 1000000000000)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(parseFloat(fromValue) * 10000000000)
            }
            else if (toUnit == "Square Meters") {
                setResult(parseFloat(fromValue) * 1000000)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Inches") {
                setResult(parseFloat(fromValue) * 1550000000)
            }
            else if (toUnit == "Square Feet") {
                setResult(parseFloat(fromValue) * 10760000)
            }
            else if (toUnit == "Square Yards") {
                setResult(parseFloat(fromValue) * 1196000)
            }
            else if (toUnit == "Square Miles") {
                setResult(parseFloat(fromValue) / 2.59)
            }
        }
        if (fromUnit == "Square Inches") {
            if (toUnit == "Square Millimeters") {
                setResult(parseFloat(fromValue) * 645.2)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(parseFloat(fromValue) * 6.452)
            }
            else if (toUnit == "Square Meters") {
                setResult(parseFloat(fromValue) / 1550)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(parseFloat(fromValue) / 1550000000)
            }
            else if (toUnit == "Square Inches") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Feet") {
                setResult(parseFloat(fromValue) / 144)
            }
            else if (toUnit == "Square Yards") {
                setResult(parseFloat(fromValue) / 1296)
            }
            else if (toUnit == "Square Miles") {
                setResult(parseFloat(fromValue) / 4014000000)
            }
        }
        if (fromUnit == "Square Feet") {
            if (toUnit == "Square Millimeters") {
                setResult(parseFloat(fromValue) * 92900)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(parseFloat(fromValue) * 929)
            }
            else if (toUnit == "Square Meters") {
                setResult(parseFloat(fromValue) / 10.764)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(parseFloat(fromValue) / 10760000)
            }
            else if (toUnit == "Square Inches") {
                setResult(parseFloat(fromValue) * 144)
            }
            else if (toUnit == "Square Feet") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Yards") {
                setResult(parseFloat(fromValue) / 9)
            }
            else if (toUnit == "Square Miles") {
                setResult(parseFloat(fromValue) / 27880000)
            }
        }
        if (fromUnit == "Square Yards") {
            if (toUnit == "Square Millimeters") {
                setResult(parseFloat(fromValue) * 836100)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(parseFloat(fromValue) * 8361)
            }
            else if (toUnit == "Square Meters") {
                setResult(parseFloat(fromValue) / 1.196)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(parseFloat(fromValue) / 1196000)
            }
            else if (toUnit == "Square Inches") {
                setResult(parseFloat(fromValue) * 1296)
            }
            else if (toUnit == "Square Feet") {
                setResult(parseFloat(fromValue) * 9)
            }
            else if (toUnit == "Square Yards") {
                setResult(fromValue)
            }
            else if (toUnit == "Square Miles") {
                setResult(parseFloat(fromValue) / 3098000)
            }
        }
        if (fromUnit == "Square Miles") {
            if (toUnit == "Square Millimeters") {
                setResult(parseFloat(fromValue) * 2590000000000)
            }
            else if (toUnit == "Square Centimeters") {
                setResult(parseFloat(fromValue) * 25900000000)
            }
            else if (toUnit == "Square Meters") {
                setResult(parseFloat(fromValue) * 2590000)
            }
            else if (toUnit == "Square Kilometers") {
                setResult(parseFloat(fromValue) * 2.59)
            }
            else if (toUnit == "Square Inches") {
                setResult(parseFloat(fromValue) * 4014000000)
            }
            else if (toUnit == "Square Feet") {
                setResult(parseFloat(fromValue) * 27880000)
            }
            else if (toUnit == "Square Yards") {
                setResult(parseFloat(fromValue) * 3098000)
            }
            else if (toUnit == "Square Miles") {
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
            <div className='flex justify-center items-center border border-gray-500 rounded-[10px]'>
                <input value={fromValue} type="number" name='from' id='from' onChange={changeFromValue} placeholder='Enter the length' />
                <select value={fromUnit} name="fromUnit" id="fromUnit" onChange={changeFromUnit}>
                    <option value="Square Millimeters">Square Millimeters</option>
                    <option value="Square Centimeters">Square Centimeters</option>
                    <option value="Square Meters">Square Meters</option>
                    <option value="Square Kilometers">Square Kilometers</option>
                    <option value="Square Inches">Square Inches</option>
                    <option value="Square Feet">Square Feet</option>
                    <option value="Square Yards">Square Yards</option>
                    <option value="Square Miles">Square Miles</option>
                </select>
            </div>
            <FontAwesomeIcon icon={faRightLong} className={`${style.icon} text-2xl text-white`} />
            <div className='flex justify-center items-center border border-gray-500 rounded-[10px]'>
                <input value={result} type="text" name='to' id='to' placeholder='Result is shown here' />
                <select value={toUnit} name="toUnit" id="toUnit" onChange={changeToUnit}>
                    <option value="Square Millimeters">Square Millimeters</option>
                    <option value="Square Centimeters">Square Centimeters</option>
                    <option value="Square Meters">Square Meters</option>
                    <option value="Square Kilometers">Square Kilometers</option>
                    <option value="Square Inches">Square Inches</option>
                    <option value="Square Feet">Square Feet</option>
                    <option value="Square Yards">Square Yards</option>
                    <option value="Square Miles">Square Miles</option>
                </select>
            </div>
        </div>
    )
}

export default Area