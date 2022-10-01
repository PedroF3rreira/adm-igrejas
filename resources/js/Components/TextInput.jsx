import React, { useEffect, useRef } from 'react';
import { IMaskInput } from 'react-imask';

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
    mask
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <div className="flex  w-full flex-col items-start flex-wrap">
            <IMaskInput
                mask={mask}
                type={type}
                name={name}
                value={value}
                className={
                    ` flex w-full placeholder:text-slate-400 placeholder:italic px-3 text-slate-500 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}
