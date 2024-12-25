import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { user, createUser, setUser, updateUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, photoUrl } = data;
    createUser(email, password)
      .then((result) => {
        // user update
        updateUser({ displayName: name, photoURL: photoUrl });
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        const creationTime  = user.metadata.creationTime;

        const newUser = {name, email, creationTime}

        // user data api fetch
        fetch('https://server-rho-liart-69.vercel.app/users',{
          method:'POSt',
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify(newUser)

        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("User Account Create Successfully");
            Navigate("/");
            console.log(data)
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => toast.error(err.message));
  };
  const googleLogin = ()=>{
    loginWithGoogle()
    .then(data=>(
      toast.success("You have successfully login with your google account"),
      navigate(location?.state ? location.state : "/")
    ))
    .catch(err=>toast.error(err.message))
  }

  return (
    <div className="bg-[#F2F2F2] py-10">
      <div className="max-w-lg mx-auto bg-white rounded-xl">
        <h1 className="text-5xl py-5 text-white font-bold text-center bg-gradient-to-r from-[#5756CD] to-[#B850C1] rounded-t-xl ">
          Register now
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 p-6 "
        >
          <input
            className="px-5 py-3 rounded-full text-xl bg-transparent outline-none border"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            className="px-5 py-3 rounded-full text-xl bg-transparent outline-none border"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="px-5 py-3 rounded-full text-xl bg-transparent outline-none border"
            type="url"
            placeholder="Photo Url"
            {...register("photoUrl", { required: true })}
          />
          <input
            className="px-5 py-3 rounded-full text-xl bg-transparent outline-none border"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              min: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/i,
            })}
          />

          <input
            className="btn bg-gradient-to-r from-[#5756CD] to-[#B850C1] text-2xl text-white"
            type="submit"
            value="Register"
          />
        </form>
        <div className="px-6 pb-10">
          <p>
            If you have any account{" "}
            <Link className="text-green-500" to={"/login"}>
              Login Here
            </Link>
          </p>
          <div className="divider divider-success">OR</div>
          <div>
            <button onClick={googleLogin} className="btn bg-gradient-to-r from-[#5756CD] to-[#B850C1] text-xl text-white w-full">
              <FcGoogle /> Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
