import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";


const Root = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="my-2">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;
