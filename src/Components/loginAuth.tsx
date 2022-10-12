import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../App/Hooks";
import { loginAuth } from "../Redux/UserReducer";
import { LoginField } from "../App/Interfaces";
import { FcManager } from "react-icons/fc";
import { HiLockClosed } from "react-icons/hi";
import { IoIosArrowDropright } from "react-icons/io";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch<any>();
  let [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




const isMessage = useSelector((state: any) => state?.user)

useEffect(()=>{
    if(isMessage?.person?.status == 200){
    toast.success("user Login successfully")
    navigate("/dashboard")
    }
    else if (isMessage?.error?.response?.data){
     toast.error(isMessage?.error?.response?.data?.msg)
    }
    

    
  },[isMessage])
  
  const onSubmit = (data: LoginField) => {
    // useAppDispatch(loginAuth(data))
    setLoading(true)
    dispatch(loginAuth(data));
  };
  const goto = () => {
    navigate("/signup");
  };
  return (
    <>
    <ToastContainer/>
      <div className="container-fc">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit(onSubmit)}>
              <h1>Login</h1>
              <div className="login__field">
                <FcManager className="login__icon" />
                <input 
                className="form-control" 
                {...register("email",{required:true })}
                placeholder="Enter Email"
                 />
              </div>
              <div className="login__field">
                <HiLockClosed className="login__icon" />

                <input
                  className="form-control"
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <button className="button login__submit">{ loading ? <ClipLoader/> :
                <span className="button__text">Log In Now</span>}
                <IoIosArrowDropright className="login_arrow_icon" />
              </button>
              <button className="button goto_button" onClick={goto}>
                <span className="button__text">Go to SignUp page</span>
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
    </>
  );
};
