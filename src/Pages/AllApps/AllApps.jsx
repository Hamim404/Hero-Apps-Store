import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";

const AllApps = () => {
  const apps = useLoaderData();
  return (
    <>
      <section className="text-center pt-16 pb-8 px-6">
        <h1 className="text-4xl font-extrabold text-slate-900">
          Our All Applications
        </h1>
        <p className="text-slate-500 mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </section>

      {/* Search + count */}
      <section className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 pb-8">
        <p className="text-lg font-bold text-slate-900">
          ({apps.length}) Apps Found
        </p>

        <label className="input input-bordered bg-white rounded-lg flex items-center gap-2 w-full sm:w-72">
          <svg
            className="h-4 w-4 opacity-50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="7" strokeWidth="2" />
            <path d="m20 20-3.5-3.5" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input type="text" placeholder="search Apps" className="grow" />
        </label>
      </section>

      {/* App grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="gmt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Empty state — show this instead of the grid above when a search has no matches */}
        {/*
        <div className="text-center py-20">
          <p className="text-xl font-semibold text-slate-700">No App Found</p>
          <p className="text-slate-500 mt-2">Try a different search term.</p>
        </div>
        */}
      </section>
    </>
  );
};

export default AllApps;
