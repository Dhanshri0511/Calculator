import { Routes , Route} from "react-router-dom";
// import { UseContextHook } from "./HooksDemo/UseContextHook";
// import { UseEffect } from "./HooksDemo/UseEffect";
// import { UseStateHook } from "./HooksDemo/UseStateHook";
import GetDemo from "./Practise/GetDemo";
import PostDemo from "./Practise/PostDemo";
// import { Calculator } from "./Practise/Calculator";
// import { Demo } from "./Practise/Demo";
import { UpdateDemo } from "./Practise/UpdateDemo";

const App = () => {


  return (
    <>
      <Routes>
        
        <Route path="/" element={<GetDemo />} />
        <Route path="/create" element={<PostDemo/>}/>
        <Route path="/update/:id" element={<UpdateDemo/>}/>
      </Routes>
    </>
  );
};

export default App;
