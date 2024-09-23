import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useAddUserMutation } from "../services/authApi"; 
import { useNavigate } from "react-router-dom";


const PostDemo = () => {
      const [formStateData, setFormStateData] = useState({
      id: "",
      title: "",
      description: "",
    });
    const [AddUserInfo] = useAddUserMutation();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormStateData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault(); 
      try {
        const res = await AddUserInfo(formStateData) 
        console.log('Sign-in successful:', res);
        alert("Added Successful")
        navigate('/')
      } catch (err) {
        // console.log('Sign-in error:', err);
        alert("Adding Failed")
      }
    };
    
  return (
     <Card className="bg-slate-200 w-5/12 m-10 p-10 ">
     
      <form className="mt-8 mb-2 border" onSubmit={handleSubmit}>
        <h1 className="text-center mb-10 text-2xl font-bold">Add User</h1>
        <div className="mb-1 flex flex-col gap-6 ">
          <h1>User ID</h1>
        <Input
                 name="id"
                 type="text"
                 value={formStateData.id}
                 onChange={handleChange}
        />
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
        
        <Button className="mt-6 bg-green-700 text-sm " type="submit" >
          Add
        </Button>
        
      </form>
    </Card>
  );
}
export default PostDemo












// /* eslint-disable no-unused-vars */
// // App.jsx
// import {
//     CardBody,
//     Input,
//     Button,
//   } from "@material-tailwind/react";
//   import { useState } from "react";
//   import { useSignInMutation } from "../services/authApi"; // Import the hook
  
//   const PostDemo = () => {
//     // State to hold form data
//     const [formStateData, setFormStateData] = useState({
//       username: "",
//       password: "",
//     });
  
//     // Use the sign-in mutation from the authApi
//     const [signIn] = useSignInMutation();
  
//     // Handle form input changes
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormStateData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     };
  
//     // Handle form submission
//     const handleSubmit = async (e) => {
//       e.preventDefault(); // Prevent form from submitting the traditional way
//       try {
//         // Call the sign-in mutation with form data
//         const res = await signIn(formStateData) // Unwrap the promise for proper error handling
//         console.log('Sign-in successful:', res); // Log the response
//         alert("login Successful")
//       } catch (err) {
//         console.log('Sign-in error:', err); // Handle errors
//         alert("Login Failed")
//       }
//     };
  
//     return (
//       <>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <CardBody className="flex flex-col gap-4">
//               {/* Input for Email */}
//               <Input
//                 label="Email"
//                 name="username"
//                 type="email"
//                 value={formStateData.username}
//                 onChange={handleChange}
//               />
//               {/* Input for Password */}
//               <Input
//                 label="Password"
//                 name="password"
//                 type="password"
//                 value={formStateData.password}
//                 onChange={handleChange}
//               />
//             </CardBody>
//             <Button variant="gradient" fullWidth type="submit">
//                 Sign In
//             </Button>
//           </form>
         
//         </div>
//       </>
//     );
//   };
  
//   export default PostDemo;
