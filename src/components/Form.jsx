import Button from "./Button";
import iconGoogle from "../assets/Google.svg";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [visible, setVisible] = useState("password");

  const handleView = () => {
    if (visible === "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  };

  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col  w-full max-w-[400px] px-4"
    >
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="email"
            className="text-text-color text-base font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@email.com"
            className="h-[60px] px-4 border-2 rounded-md border-text-color
          bg-input-color min-[1024px]:bg-white outline-none transition-all ease-in-out duration-500 focus:border-first-color"
          />
        </div>

        <div className="flex flex-col gap-y-1 relative">
          <label
            htmlFor="password"
            className="text-text-color text-base font-medium "
          >
            Password
          </label>
          <input
            type={visible}
            id="Password"
            name="Password"
            required
            className="h-[60px] px-4 border-2 rounded-md border-text-color bg-input-color
            min-[1024px]:bg-white outline-none transition-all ease-in-out duration-500 focus:border-first-color"
          />

          {visible === "password" ? (
            <Eye
              className="text-text-color absolute top-12 right-4 cursor-pointer"
              onClick={handleView}
            />
          ) : (
            <EyeOff
              className="text-text-color absolute top-12 right-4 cursor-pointer"
              onClick={handleView}
            />
          )}
        </div>

        <div className="flex justify-between">
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="appearance-none w-5 h-5 border-2 border-text-color rounded 
             checked:bg-first-color checked:border-first-color checked:after:content-['✔']
             checked:after:text-white checked:grid checked:place-content-center transition-colors 
              ease-in-out duration-300 cursor-pointer"
            />
            <label htmlFor="checkbox">Remenber me</label>
          </div>
          <a href="#" className="text-first-color font-medium text-base">
            forgot password?
          </a>
        </div>

        <Button
          text={"Sing in"}
          className="text-white bg-title-color hover:scale-105"
        />

        <a
          href="#"
          className="h-[60px]
          rounded-md shadow-md transition-all ease-in-out duration-500 bg-input-color
          min-[1024px]:bg-white text-text-color border-2 border-text-color 
          text-sm font-medium flex justify-center items-center gap-x-2 hover:scale-105"
        >
          <img src={iconGoogle} alt="icon google" width={36} height={36} />
          Sing In with Google
        </a>

        <p className=" text-center text-text-color font-medium">
          Don&rsquo;t have an account?
          <a href="#" className="text-first-color">
            {" "}
            Sing up
          </a>
        </p>
      </div>
    </form>
  );
};

export default Form;
