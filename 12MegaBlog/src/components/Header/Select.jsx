import React, { useId } from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()


    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>{label}</label>}
            <select
                id={id}
                ref={ref}
                {...props}
                className='px-3 py-2 rounded-lg'>
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
