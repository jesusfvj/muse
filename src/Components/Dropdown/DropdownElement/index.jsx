import React from 'react'
import { useNavigate } from 'react-router-dom'

export const DropdownElement = ({ text,path }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(path)
    }
    return (
    <li>
        <p className="block px-4 py-2  hover:bg-gray-600" onClick={ handleNavigate }>
            { text }
        </p>
    </li>
    )
}