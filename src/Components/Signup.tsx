import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoginField } from "../App/Interfaces";
import { signupUser } from "../Redux/UserReducer";

export const Signup = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const message = useSelector((state:any)=> state?.user)
  console.log(92,message?.person?.data?.message);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
   if(message?.person?.data?.message){
    toast.success(message?.person?.data?.message)
   }
  },[message])
  const onSubmit = (data: LoginField) => {
    dispatch(signupUser(data));
  };


  const goto = () => {
    navigate("/");
  };
  return (
    <>
    <ToastContainer/>
      <div className="container-fc">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit(onSubmit)}>
              <h1>Signup</h1>
              <div className="login__field">
                <input
                  className="form-control"
                  {...register("name")}
                  placeholder="Enter Name"
                />
              </div>
              <div className="login__field">
                <input
                  className="form-control"
                  {...register("email")}
                  placeholder="Enter Email"
                />
              </div>
              <div className="login__field">
                <input
                  className="form-control"
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <button className="button login__submit" type="submit">
                <span className="button__text">Sign Up Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <button className="button goto_button" onClick={goto}>
                <span className="button__text">Go to login page</span>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
    <div>Signup</div>
    <label htmlFor="name">Name</label>
    <input  {...register("name")} placeholder='Enter Name'/>
    <label htmlFor="name">Email</label>
    <input  {...register("email")}  placeholder='Enter Email'/>
    <label htmlFor="name">Password</label>
      <input {...register("password", { required: true })} type='password' placeholder='Enter Password'/>
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form> */}
    </>
  );
};
