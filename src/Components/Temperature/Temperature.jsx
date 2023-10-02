import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import l from "../style.module.css"


function Temperature() {
    return (
        <div className={`${l.main} flex items-center justify-center w-auto`}>
            <div className='flex justify-center items-center'>
                <input type="number" placeholder='Enter the temperature' />
                <select name="fromUnit" id="fromUnit">
                    <option value="Celcius">Celcius</option>
                    <option value="Farenheit">Farenheit</option>
                </select>
            </div>
            <FontAwesomeIcon icon={faRightLong} className='text-2xl text-white' />
            <div className='flex justify-center items-center'>
                <input type="number" placeholder='Result is shown here' />
                <select name="toUnit" id="toUnit">
                    <option value="Celcius">Celcius</option>
                    <option value="Farenheit">Farenheit</option>
                </select>
            </div>
        </div>
    )
}

export default Temperature