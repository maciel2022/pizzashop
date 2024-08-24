import React, {useState, useEffect} from "react";
// nexy image
import Image from "next/image";
// icons
import { IoMdCheckmark } from "react-icons/io"

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false)

  //handle checkbox
  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }
  
  // handle toppng
  const handleToppig = () => {
    if(isChecked) {
      // use set to esure unique values
      const newToppings = new Set([...additionalTopping, { ...topping }])
      setAdditionalTopping(Array.from(newToppings))
    } else {
      // remove the topping with the matching name
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name
      })
      setAdditionalTopping(newToppings)
    }
  }

  useEffect(() => {
    handleToppig()
  }, [isChecked])
  

  return (
    <div className={`${isChecked && 'border-orange'} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}>
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt=""
        className="mb-2"
      />
      {/* topping name */}
      <div className="text-sm capitalize text-center font-medium">
        {topping.name}
      </div>
      {/* checkbox */}
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
      />
      {/* checkmark icon */}
      <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  )
};

export default Topping;
