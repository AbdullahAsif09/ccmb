import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "../../layout";

function User() {
  return (
    <Routes>
      {/* <Route path="/" element={<LayoutBuyer />}> */}
      <Route path="/" element={<Layout />}>
        <Route element={<Home />} path="/" />
      </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default User;
