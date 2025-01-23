import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";

const Layout = () => {
  return (
    <>
      <div className="grid-background"></div>
      <main className="min-h-screen container min-w-full">
        <Header/>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
