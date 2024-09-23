import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useEditUserMutation } from "../services/authApi"; 
import { useNavigate, useParams } from "react-router-dom";

export const UpdateDemo = () => {

  const {id} =useParams();
 
  const {data} = useEditUserMutation(id);
  useEffect(()=>{
    if(data){
      setFormStateData({...formStateData,title : data.title, description: data.description })
    }
  },[data])
  const [formStateData, setFormStateData] = useState({
    id: id,
    title: "",
    description: "",
  });
  const [editUser] = useEditUserMutation(); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormStateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await editUser({
        formStateData,
        courseId: formStateData.id 
      }).unwrap(); 

      console.log('Update successful:', res);
      alert("Update Successful");
      navigate('/');
    } catch (err) {
      console.log('Update error:', err);
      alert("Update Failed");
    }
  };

  return (
    <Card className="bg-slate-200 w-5/12 m-10 p-10">
      <form className="mt-8 mb-2 border" onSubmit={handleSubmit}>
        <h1 className="text-center mb-10 text-2xl font-bold">Edit User</h1>
        <div className="mb-1 flex flex-col gap-6">
          {/* <h1>User ID</h1>
          <Input
            name="id"
            type="text"
            value={formStateData.id}
            onChange={handleChange}
          /> */}
          <h1>Enter the Title</h1>
          <Input
            name="title"
            type="text"
            value={formStateData.title}
            onChange={handleChange}
          />
          <h1>Enter the Description</h1>
          <Input
            name="description"
            type="text"
            value={formStateData.description}
            onChange={handleChange}
          />
        </div>
        <Button className="mt-6 bg-green-700 text-sm" type="submit">
          Update
        </Button>
      </form>
    </Card>
  );
};

export default UpdateDemo;
