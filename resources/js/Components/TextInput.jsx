import React, { useEffect, useRef } from 'react';

export default function TextInput({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    onChange,
    isFocused,
    placeholder=''
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const handleChange = (name, e) => {
        return setData(name, e.target.value)
    }

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(name,e)}
                placeholder={placeholder}
            />
        </div>
    );
}
