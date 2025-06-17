import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Registration() {
    const {
      register,
      handleSubmit,
      formState:{errors}
    }=useForm();

    const submitcall= async(data)=>
    {
      console.log(data);
      try {
        const response = await axios.post("http://localhost:3001/api/auth/registration", data);
          if(response.status === 201)
          {
            alert("registration success");
            
          }
        
      } catch (error) {
        console.log(error.message);
      }
    }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Create a New Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(submitcall)}>
            <input
              id="name" 
              {...register("name",{
                required:"name is required",
                minLength:
                {
                  value:3,
                  message:"name must be at least 3 characters"
                }
              })}
      
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            {errors.name && <div>{errors.name.message}</div>}
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
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800">
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
