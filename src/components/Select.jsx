import { IoIosArrowDown } from "react-icons/io"; 
import { twMerge } from "tw-merge";

export function Select({title, options, className, defaultValue}) {

    return (
      <div className="relative">
        <select defaultValue={defaultValue || ''} name={title} id={title} 
          className={twMerge(`w-24 p-4 bg-white border border-gray-300 appearance-none ${className}`)}>
          <option value="" disabled hidden>
            {title}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        {/* Arrow Icon */}
        <div className="absolute inset-y-0 right-0 p-3 pointer-events-none flex-center">
          <IoIosArrowDown className="text-2xl text-gray-400" />
        </div>
      </div>
    )
  }