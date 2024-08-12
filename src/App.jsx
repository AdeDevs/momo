import { Route, Routes } from "react-router-dom";
import Message from "./screen/message";
import MoMo from "./screen/mo";

function App() {
  return (
    <div className="parent">
      <Routes>
        <Route path="/" element={<MoMo />}></Route>
        <Route path="/message" element={<Message />}>
      </Route>
      </Routes>
      {/* <MoMo /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
