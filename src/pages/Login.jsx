import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
    const {signIn, user, setUser, loginWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {email, password} = data;
    signIn(email, password)
    .then(result=>{
        const user = result.user
        setUser(user)
        navigate(location?.state ? location.state : "/");
        // toast.success("User Login Successful")
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };
        fetch(`https://server-rho-liart-69.vercel.app/users`,{
          method: "PATCH",
          headers:{
            'content-type': "application/json"
          },
          body: JSON.stringify(loginInfo)
        })
        .then(res=>res.json())
        .then(data=>{
          toast.success("Login successfully")
        })
        .catch(err=>{
          toast.error(err.message);
        })
    })

  };
  const googleLogin=()=>{
    loginWithGoogle()
    .then(data=>toast.success("You have successfully login with your google account"))
    .catch(err=>toast.error(err.message))
    navigate(location?.state ? location.state : "/");
  }

  return (
    <div className="bg-[#F2F2F2] py-10 my-16">
          <Helmet>
        <title>LAW || Login page</title>
        <meta name="description" content="Learn more about us!" />
      </Helmet>
      <div className="max-w-lg mx-auto bg-[#cccccc] rounded-xl">
        <h1 className="text-4xl py-5  font-bold text-center bg-gradient-to-r from-[#9a9a7d] to-[#94aca7] rounded-t-xl ">
          Login now
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 p-6 "
        >
          <input
            className="px-3 py-2 rounded-full text-xl bg-transparent outline-none border"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />

          <input
            className="px-3 py-2 rounded-full text-xl bg-transparent outline-none border"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              min: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/i,
            })}
          />

          <input
            className="btn bg-gradient-to-r from-[#9a9a7d] to-[#94aca7] text-xl "
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
              <button onClick={googleLogin} className="btn bg-gradient-to-r from-[#9a9a7d] to-[#94aca7] text-xl text-white w-full">
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
