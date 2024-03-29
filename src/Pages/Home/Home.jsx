import cover from "./../../assets/images/cover.png";

const Home = () => {
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
    </>
  );
};

export default Home;
