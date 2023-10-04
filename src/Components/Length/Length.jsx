import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import style from "../style.module.css"

function Length() {

    const [fromValue, setFromValue] = useState(0)
    const [result, setResult] = useState()
    const [fromUnit, setFromUnit] = useState("m")
    const [toUnit, setToUnit] = useState("cm")

    useEffect(() => {
        if (fromUnit == "m") {
            if (toUnit == "m") {
                setResult(fromValue)
            }
            else if (toUnit == "cm") {
                setResult(fromValue * 100)
            }
            else if (toUnit == "km") {
                setResult(fromValue / 1000)
            }
            else if (toUnit == "mm") {
                setResult(fromValue * 1000)
            }
            else if (toUnit == "in") {
                setResult(fromValue * 39.37)
            }
            else if (toUnit == "ft") {
                setResult(fromValue * 3.281)
            }
            else if (toUnit == "yd") {
                setResult(fromValue * 1.094)
            }
            else if (toUnit == "mi") {
                setResult(fromValue / 1609)
            }
            else if (toUnit == "nautical mile") {
                setResult(fromValue / 1852)
            }
        }
        if (fromUnit == "cm") {
            if (toUnit == "cm") {
                setResult(fromValue)
            }
            else if (toUnit == "m") {
                setResult(fromValue / 100)
            }
            else if (toUnit == "km") {
                setResult(fromValue / 100000)
            }
            else if (toUnit == "mm") {
                setResult(fromValue * 10)
            }
            else if (toUnit == "in") {
                setResult(fromValue / 2.54)
            }
            else if (toUnit == "ft") {
                setResult(fromValue / 30.48)
            }
            else if (toUnit == "yd") {
                setResult(fromValue / 91.44)
            }
            else if (toUnit == "mi") {
                setResult(fromValue / 160900)
            }
            else if (toUnit == "nautical mile") {
                setResult(fromValue / 185200)
            }   
        }
        if (fromUnit == "km") {
            if (toUnit == "km") {
                setResult(fromValue)
            }
            else if (toUnit == "m") {
                setResult(fromValue * 1000)
            }
            else if (toUnit == "cm") {
                setResult(fromValue * 100000)
            }
            else if (toUnit == "mm") {
                setResult(fromValue * 1000000)
            }
            else if (toUnit == "in") {
                setResult(fromValue * 39370)
            }
            else if (toUnit == "ft") {
                setResult(fromValue * 3281)
            }
            else if (toUnit == "yd") {
                setResult(fromValue * 1094)
            }
            else if (toUnit == "mi") {
                setResult(fromValue / 1.609)
            }
            else if (toUnit == "nautical mile") {
                setResult(fromValue / 1.850)
            }
        }
        if (fromUnit == "mm") {
            if (toUnit == "mm") {
                setResult(fromValue)
            }
            else if (toUnit == "m") {
                setResult(fromValue / 1000)
            }
            else if (toUnit == "cm") {
                setResult(fromValue / 10)
            }
            else if (toUnit == "km") {
                setResult(fromValue * 1000000)
            }
            else if (toUnit == "in") {
                setResult(fromValue / 25.4)
            }
            else if (toUnit == "ft") {
                setResult(fromValue / 304.8)
            }
            else if (toUnit == "yd") {
                setResult(fromValue / 914.4)
            }
            else if (toUnit == "mi") {
                setResult(fromValue / 1609000)
            }
            else if (toUnit == "nautical mile") {
                setResult(fromValue / 1852000)
            }
        }
        if (fromUnit == "in") {
            if (toUnit == "in") {
                setResult(fromValue)
            }
            else if (toUnit == "m") {
                setResult(fromValue / 39.37)
            }
            else if (toUnit == "cm") {
                setResult(fromValue * 2.54)
            }
            else if (toUnit == "km") {
                setResult(fromValue / 39370)
            }
            else if (toUnit == "mm") {
                setResult(fromValue * 25.4)
            }
            else if (toUnit == "ft") {
                setResult(fromValue / 12)
            }
            else if (toUnit == "yd") {
                setResult(fromValue / 36)
            }
            else if (toUnit == "mi") {
                setResult(fromValue / 63360)
            }
            else if (toUnit == "nautical mile") {
                setResult(fromValue / 72910)
            }
        }
        if (fromUnit == "ft") {
            if (toUnit == "ft") {
                setResult(fromValue)
            }
            else if (toUnit == "m") {
                setResult(fromValue / 3.281)
            }
            else if (toUnit == "cm") {
                setResult(fromValue * 30.48)
            }
            else if (toUnit == "km") {
                setResult(fromValue / 3281)
            }
            else if (toUnit == "mm") {
                setResult(fromValue * 304.8)
            }
            else if (toUnit == "in") {
                setResult(fromValue * 12)
            }
            else if (toUnit == "yd") {
                setResult(fromValue / 3)
            }
            else if (toUnit == "mi") {
                setResult(fromValue / 5280)
            }
            else if (toUnit == "nautical mile") {
                setResult(fromValue / 6076)
            }
        }
        if (fromUnit == "yd") {
            if (toUnit == "yd") {
                setResult(fromValue)
            }
            else if (toUnit == "m") {
                setResult(fromValue / 1.094)
            }
            else if (toUnit == "cm") {
                setResult(fromValue * 91.44)
            }
            else if (toUnit == "km") {
                setResult(fromValue / 1094)
            }
            else if (toUnit == "mm") {
                setResult(fromValue * 914.4)
            }
            else if (toUnit == "in") {
                setResult(fromValue * 36)
            }
            else if (toUnit == "ft") {
                setResult(fromValue * 3)
            }
            else if (toUnit == "mi") {
                setResult(fromValue / 1760)
            }
            else if (toUnit == "nautical mile") {
                setResult(fromValue / 2025)
            }
        }
        if (fromUnit == "mi") {
            if (toUnit == "mi") {
                setResult(fromValue)
            }
            else if (toUnit == "m") {
                setResult(fromValue * 1609)
            }
            else if (toUnit == "cm") {
                setResult(fromValue * 160900)
            }
            else if (toUnit == "km") {
                setResult(fromValue * 1.609)
            }
            else if (toUnit == "mm") {
                setResult(fromValue * 1609000)
            }
            else if (toUnit == "in") {
                setResult(fromValue * 63360)
            }
            else if (toUnit == "ft") {
                setResult(fromValue * 5280)
            }
            else if (toUnit == "yd") {
                setResult(fromValue * 1760)
            }
            else if (toUnit == "nautical mile") {
                setResult(fromValue / 1.151)
            }
        }
        if (fromUnit == "nautical mile") {
            if (toUnit == "nautical mile") {
                setResult(fromValue)
            }
            else if (toUnit == "m") {
                setResult(fromValue * 1852)
            }
            else if (toUnit == "cm") {
                setResult(fromValue * 185200)
            }
            else if (toUnit == "km") {
                setResult(fromValue * 1.852)
            }
            else if (toUnit == "mm") {
                setResult(fromValue * 1852000)
            }
            else if (toUnit == "in") {
                setResult(fromValue * 72910)
            }
            else if (toUnit == "ft") {
                setResult(fromValue * 6076)
            }
            else if (toUnit == "yd") {
                setResult(fromValue * 2025)
            }
            else if (toUnit == "mi") {
                setResult(fromValue * 1.151)
            }
        }

        return () => {
        }
    },[fromValue,fromUnit,toUnit])

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
            <div className='flex justify-center items-center'>
                <input value={fromValue} type="number" name='from' id='from' onChange={changeFromValue} placeholder='Enter the length' />
                <select value={fromUnit} name="fromUnit" id="fromUnit" onChange={changeFromUnit}>
                    <option value="m">meters</option>
                    <option value="km">Kilometers</option>
                    <option value="cm">centimeters</option>
                    <option value="mm">millimeters</option>
                    <option value="in">inches</option>
                    <option value="ft">foot</option>
                    <option value="yd">yard</option>
                    <option value="mi">mile</option>
                    <option value="nautical mile">nautical mile</option>
                </select>
            </div>
            <FontAwesomeIcon icon={faRightLong} className='text-2xl text-white' />
            <div className='flex justify-center items-center'>
                <input value={result} type="text" name='to' id='to' placeholder='Result is shown here' />
                <select value={toUnit} name="toUnit" id="toUnit" onChange={changeToUnit}>
                    <option value="m">meters</option>
                    <option value="km">Kilometers</option>
                    <option value="cm">centimeters</option>
                    <option value="mm">millimeters</option>
                    <option value="in">inches</option>
                    <option value="ft">foot</option>
                    <option value="yd">yard</option>
                    <option value="mi">mile</option>
                    <option value="nautical mile">nautical mile</option>
                </select>
            </div>
        </div>
    )
}

export default Length