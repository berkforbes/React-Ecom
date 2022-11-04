import { useState, useEffect } from "react";

const NumberCounter = ({ quantity, updateQuantity }) => {
  const [userInput, setUserInput] = useState(quantity);

  useEffect(() => {
    updateQuantity(userInput);
  }, userInput);

  return (
    <div className="w-32">
      <label
        htmlFor="custon-input-number"
        className="w-full text-black-700 text-sm font-semibold"
      >
        Quantity
      </label>
      <div className="flex flex-row h10 w-full rounded-lg relative bf-transparent mt-1">
        <button
          onClick={() => updateQuantity(quantity - 1)}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 fpont-semibold text-md hover:jtext-black focus:text-bnlack md:text-basecursor-default flex items-center textl-gray-700"
          name="custom-input-number"
          value={quantity}
          onChange={() => setUserInput(e.target.value)}
        />
        <button
          onClick={() => updateQuantity(quantity + 1)}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div> 
  );
};
export default NumberCounter;
