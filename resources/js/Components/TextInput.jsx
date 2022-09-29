import React, { useEffect, useRef } from 'react';
//import { IMaskInput } from "react-imask";

export default function TextInput({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    handleChange,
    isFocused,
    placeholder='',
    mask=null
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `placeholder:text-slate-400 placeholder:italic px-3 text-slate-500 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                mask={mask}
            />
        </div>
    );
}
