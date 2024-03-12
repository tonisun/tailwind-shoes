import { IoIosArrowDown } from "react-icons/io"; 

export function Select({title,options}) {

    return (
      <div className="relative">
        <select defaultValue={""} name={title} id={title} 
          className="w-24 p-4 bg-white border border-gray-300 appearance-none">
          <option value="" disabled hidden>
            {title}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 p-3 flex-center">
          <IoIosArrowDown size={25}/>
        </div>
      </div>
    )
  }