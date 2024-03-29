import { useLoaderData } from "react-router-dom";
import cover from "./../../assets/images/cover.png";
import SingleCard from "../../Components/SingleCard";

const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="hero">
        <div>
          <img className="opacity-30" src={cover} alt="" />
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow text-black"
                placeholder="Search"
              />
              <span className="badge badge-info rounded-md px-3 py-4 text-white cursor-pointer">
                Search 
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {
            data.map( catg => <SingleCard key={catg.id } catg={catg} />)
          }
      </div>
    </>
  );
};

export default Home;
