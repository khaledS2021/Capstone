import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
