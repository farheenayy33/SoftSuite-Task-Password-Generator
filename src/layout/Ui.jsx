import axios from "axios";
import { useState } from "react";
const Ui = () => {
  const [length, setlength] = useState("");
  const [password,setPassword]=useState("");

async function submitHandler(e){
console.log('submit handler called ',length)
e.preventDefault();
 length
const response = await axios.post(
  "https://soft-suite-task-password-generator.vercel.app/password",
  { length },
);
console.log(response)
setPassword(response.data.password)
setlength("")
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-200">
      <div className="bg-white p-6 w-[400px] rounded-2xl shadow-xl flex flex-col justify-between">
        <h1 className="font-bold text-4xl text-center mb-6 mt-2 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Password Generator
        </h1>
        <form
          className="flex flex-col gap-6 w-full items-center"
          onSubmit={submitHandler}
        >
          <div className="w-4/5 p-[2px] bg-gray-300 focus-within:bg-gradient-to-r focus-within:from-pink-500 focus-within:via-purple-500 focus-within:to-indigo-500 rounded-lg transition-all duration-300">
            <input
              required
              type="number"
              min="4"
              max="30"
              value={length}
              placeholder="Enter password length"
              onChange={(e) => {
                setlength(e.target.value);
              }}
              className="w-full bg-white p-2.5 rounded-[calc(0.5rem-2px)] outline-none text-gray-800 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-3/5 bg-linear-to-r from-pink-500 via-red-500 to-orange-500 px-6 py-3 rounded-4xl text-lg font-medium text-white shadow-md transition-all duration-150 ease-in-out hover:opacity-95 active:scale-95 active:shadow-sm hover:text-black"
          >
            Generate Password
          </button>
        </form>
        <div className="text-lg text-center mt-4">{password}</div>
      </div>
    </div>
  );
};

export default Ui;
