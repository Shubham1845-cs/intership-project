import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function Login() {
  const{
    register,
    handleSubmit,
    formState: { errors }
  }=useForm();

  const submitcall=async(data)=>
  {
    console.log(data)
    try {
        const responce=  await axios.post('http://localhost:3001/api/auth/login',data);
        if(responce.status==201)
        {
             alert("login successfully");
              localStorage.setItem("token", responce.data.token);

        }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Login to Your Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(submitcall)}>
           <input
            id="email"
              {...register("email",{
                required:"email  is required",
                pattern:{
                  value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:"Invalid email address "
                }

              })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            {errors.email && <div>{errors.email.message}</div>}
           <input
               id="password"
               {...register("password",
                {
                  required:"password is required",
                  minLength:
                  {
                    value:6,
                    message:"password must be at least 6 characters"
                  }

                }
               )}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            {errors.password && <div>{errors.password.message}</div>}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/registration" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
