import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="bg-[#F2F2F2] py-10">
      <div className="max-w-lg mx-auto bg-white rounded-xl">
        <h1 className="text-5xl py-5 text-white font-bold text-center bg-gradient-to-r from-[#5756CD] to-[#B850C1] rounded-t-xl ">
          Login now
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 p-6 "
        >
          <input
            className="px-5 py-3 rounded-full text-2xl bg-transparent outline-none border"
            type="email"
            placeholder="Email"
            {...register("Email", { required: true })}
          />

          <input
            className="px-5 py-3 rounded-full text-2xl bg-transparent outline-none border"
            type="password"
            placeholder="Password"
            {...register("Password", {
              required: true,
              min: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/i,
            })}
          />

          <input
            className="btn bg-gradient-to-r from-[#5756CD] to-[#B850C1] text-2xl text-white"
            type="submit"
            value="Login"
          />
        </form>
        <div className="px-6 pb-10">
          <p>
            If you don't have any account{" "}
            <Link className="text-green-500" to={"/register"}>
              Register Here
            </Link>
            <div className="divider divider-success">OR</div>
            <div>
              <button className="btn bg-gradient-to-r from-[#5756CD] to-[#B850C1] text-xl text-white w-full">
                <FcGoogle /> Login With Google
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
