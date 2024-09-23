import { Link } from "react-router-dom";
import { useGetAllQuery, useDeleteIdMutation } from "../services/authApi";

const GetDemo = () => {
  const { data: users, isSuccess } = useGetAllQuery();
  console.log(users)
  const [deleteUser] = useDeleteIdMutation();

  const handleDelete = async (id) => {
    try {
        const response = await deleteUser(id).unwrap();
              console.log(" deleted successfully", response);
    } catch (error) {
      console.error("Error in deleting:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-5 p-5">
        {isSuccess &&
          users.map((user) => (
            <div key={user.id} className="p-5 m-2 border border-black bg-slate-100">
              <h4 className="font-semibold text-yellow-600 text-xl">{user.id}</h4>
              <h4 className="font-bold text-lg">{user.title}</h4>
              <h4>{user.description}</h4>
              <Link to={`/update/${user.id}`} className="p-2 bg-green-500 rounded-lg" >Edit</Link>
              <button
                className="p-2 bg-red-600 m-1 rounded-lg"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default GetDemo;
