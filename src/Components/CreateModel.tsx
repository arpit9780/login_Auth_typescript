import React from 'react'
import { Modal, Button, Group } from '@mantine/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../Redux/UserReducer';
import { inputFieldPost } from '../App/Interfaces';

interface props {
    opened : boolean,
  setOpened : React.Dispatch<React.SetStateAction<boolean>>,
  }

export const CreateModel:React.FC<props> = ({opened,setOpened}:props) => {
    const dispatch =useDispatch<any>()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:inputFieldPost) => {
        console.log(data);
        dispatch(createPost(data))
    }
      return (
        <>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Create New Post"
          >
             <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <label>Name </label>
                            <div >
                                <input  {...register("name")} />
                            </div>
                        </div >

                        <div >
                            <label >Age </label>
                            <div >
                                <input {...register("age")} />
                            </div>
                        </div>

                        <div >
                            <label >City </label>
                            <div >
                                <input {...register("city")} />
                            </div>
                        </div>

                        <Button type="submit" style={{marginTop:"10px"}} onClick={() => setOpened(false)} >Submit</Button>
                    </form>
          </Modal>
          <Group position="center">
          </Group>
        </>
      );
    
}
