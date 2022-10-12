import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginField } from "../App/Interfaces";
import { deletePost, showPosts } from "../Redux/UserReducer";
import { CreateModel } from "./CreateModel";
import { UpdateModel } from "./UpdateModel";

export const Dashboard = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [opened, setOpened] = useState<boolean>(false);

  const [updateData,setUpdateData] = useState<[]>([])
  const [isVisibleUpdate, setIsVisibleUpdate] = useState<boolean>(false)
  const [modelOpen, setModelOpen] = useState<boolean>(false)

  const posts: any = useSelector((state: any) => state?.user?.posts?.data);
  const crudOp : [] = useSelector((state:any)=>state?.user?.postCrud)
  const tokenn: any = localStorage.getItem("type_token");
   
  useEffect(() => {
    dispatch(showPosts(tokenn));
    // if(!tokenn) {
      // }
    }, [tokenn,crudOp]);
    
    const logout = () => {
      localStorage.removeItem("type_token")
        navigate("/")
}

const createData = () => {
  setIsVisible(true)
  setOpened(true)
}

const deleteData = (id:LoginField) => {
 dispatch(deletePost(id)) 
}

const editData = (data:any) => {
  setUpdateData(data)
  setIsVisibleUpdate(true)
  setModelOpen(true)
}

  return (
    <>
      <h1>Dashboard</h1>
      <div className="container-fluid">
        <div className="row" style={{ height: "400px" }}>
          <div className="col-lg-2 col-sm-12">
            <button
              className="btn btn-warning"
              style={{ margin: "15px" }}
              onClick={() => createData()}
            >
              Create
            </button>
            <button className="logout-btn btn btn-danger" onClick={logout}>
              Log Out
            </button>
          </div>
          <div className="col-lg-8 col-sm-12 container">
            <table className="table">
              <thead className="thead-light">
                <tr className="table-primary">
                  <th scope="col" style={{ border: "1px solid black" }}>
                    ID
                  </th>
                  <th scope="col" style={{ border: "1px solid black" }}>
                    Name
                  </th>
                  <th scope="col" style={{ border: "1px solid black" }}>
                    Age
                  </th>
                  <th scope="col" style={{ border: "1px solid black" }}>
                    City
                  </th>
                  <th scope="col" style={{ border: "1px solid black" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts?.map((item: any, i: number) => {
                  return (
                    <tr key={i} className="table-info">
                      <th scope="row" style={{ border: "1px solid black" }}>
                        {item?._id}
                      </th>
                      <td style={{ border: "1px solid black" }}>
                        {item?.name}
                      </td>
                      <td style={{ border: "1px solid black" }}>{item?.age}</td>
                      <td style={{ border: "1px solid black" }}>
                        {item?.city}
                      </td>
                      <td style={{ border: "1px solid black" }}>
                        <button
                          className="btn btn-outline-success"
                          // onClick={() => viewPost(item._id)}
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteData(item._id)}
                          className="btn btn-outline-danger"
                          style={{ margin: "0px 20px" }}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => editData(item)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isVisible ? <CreateModel opened={opened} setOpened={setOpened} /> : null}
      {isVisibleUpdate ? <UpdateModel modelOpen={modelOpen} setModelOpen={setModelOpen} data={updateData} /> : null}
    </>
  );
};
