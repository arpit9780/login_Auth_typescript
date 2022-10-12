import React, { useEffect, useState } from 'react'
import { Modal, Button, Group } from '@mantine/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { inputFieldPost } from '../App/Interfaces';
import { updatePost } from '../Redux/UserReducer';


interface props {
    modelOpen : boolean,
    setModelOpen : React.Dispatch<React.SetStateAction<boolean>>,
    data:any
  }

export const UpdateModel:React.FC<props> = ({modelOpen,setModelOpen,data}:props) => {
    const dispatch =useDispatch<any>()
    const navigate = useNavigate()

    const [id,setId] = useState<any>(data._id)
    const [oldName,setOldName] = useState<string>()
    const [oldAge,setOldAge] = useState<string>()
    const [oldCity,setOldCity] = useState<string>()
    const { register, handleSubmit } = useForm();

    useEffect(()=>{
        setOldName(data.name)
        setOldAge(data.age)
        setOldCity(data.city)
    },[data])

    const onSubmit = (oldData:inputFieldPost) => { 
        const allData = {id,...oldData}
        console.log(96,allData)
        navigate("/dashboard")
        dispatch(updatePost(allData))
    }
      return (
        <>
          <Modal
            opened={modelOpen}
            onClose={() => setModelOpen(false)}
            title="Update Post"
          >
             <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <label>Name </label>
                            <div >
                                <input value={oldName} {...register("oldName")} onChange={(e)=>{setOldName(e.target.value)}}  />
                            </div>
                        </div >

                        <div >
                            <label >Age </label>
                            <div >
                                <input value={oldAge} type='number' {...register("oldAge")} onChange={(e)=>{setOldAge(e.target.value)}}  />
                            </div>
                        </div>

                        <div >
                            <label >City </label>
                            <div >
                                <input value={oldCity} {...register("oldCity")} onChange={(e)=>{setOldCity(e.target.value)}}  />
                            </div>
                        </div>

                        <Button type="submit" style={{marginTop:"10px"}} onClick={() => setModelOpen(false)}>Submit</Button>
                    </form>
          </Modal>
          <Group position="center">
          </Group>
        </>
      );
    
}
