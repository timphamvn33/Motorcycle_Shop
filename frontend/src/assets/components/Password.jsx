import { useState, useEffect } from "react"
import React from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa"
export const Password = (({value, onChange, placeholder}) => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }
    useEffect(() => {
        
    })
    return (
        <div className="flex items-center w-full h-10 rounded-2xl px-4 bg-gray-200/40 border border-gray-900 focus:border-blue-600  focus:bg-blue-600/40 focus:ring-blue-600 focus:outline-none focus:ring-2">
            <input onChange={onChange}
                value = {value}
                type = {isShowPassword? "text": "password"}
                placeholder= {placeholder}
                className="w-full bg-transparent border-none focus:ring-0 outline-none" 
            />
            <div
            className="cursor-pointer"
            onClick={toggleShowPassword}>
                {isShowPassword? (<FaRegEyeSlash className="w-full text-gray-800 " />): (<FaRegEye className="w-full text-gray-800 " />)}
            </div>
        </div>

        )
})