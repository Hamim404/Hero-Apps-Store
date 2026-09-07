import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <section className="bg-slate-50 pt-16 pb-10 px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-tight">
          We Build <br />
          <span className="text-violet-600">Productive</span> Apps
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-slate-500 text-[15px] sm:text-base leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          {/* TODO: redirect to the Play Store */}
          <button className="btn bg-white border border-slate-200 rounded-lg gap-2 normal-case font-semibold text-slate-800 hover:bg-slate-100">
            <span aria-hidden>
              <IoLogoGooglePlaystore />
            </span>{" "}
            Google Play
          </button>
          {/* TODO: redirect to the App Store */}
          <button className="btn bg-white border border-slate-200 rounded-lg gap-2 normal-case font-semibold text-slate-800 hover:bg-slate-100">
            <span aria-hidden>
              <FaAppStoreIos />
            </span>{" "}
            App Store
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src="/src/assets/hero.png"
            alt="App preview"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-violet-600 to-purple-500 -mt-10 pt-16 pb-14 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Trusted By Millions, Built For You
        </h2>

        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <p className="text-sm text-violet-100">Total Downloads</p>
            <p className="text-4xl sm:text-5xl font-extrabold mt-2 text-white">
              29.6M
            </p>
            <p className="text-xs text-violet-100 mt-2">
              21% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm text-violet-100">Total Reviews</p>
            <p className="text-4xl sm:text-5xl font-extrabold mt-2 text-white">
              906K
            </p>
            <p className="text-xs text-violet-100 mt-2">
              46% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm text-violet-100">Active Apps</p>
            <p className="text-4xl sm:text-5xl font-extrabold mt-2 text-white">
              132+
            </p>
            <p className="text-xs text-violet-100 mt-2">31 More Will Launch</p>
          </div>
        </div>
      </section>

      {/* Trending Apps */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Trending Apps
        </h2>
        <p className="text-slate-500 mt-2">
          Explore all trending apps on the market developed by us
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {/* {trendingApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))} */}
        </div>

        {/* TODO: navigate to the All Apps page */}
        <button className="btn mt-10 bg-violet-600 hover:bg-violet-700 text-white border-none rounded-lg px-8 normal-case font-semibold">
          Show All
        </button>
      </section>
    </>
  );
};

export default Home;
