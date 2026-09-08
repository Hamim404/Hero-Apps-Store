import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import { useState } from "react";
import AppNotFound from "../AppNotFound/AppNotFound";

const AllApps = () => {
  const apps = useLoaderData();
  const [filterApps, setFilterApps] = useState([]);
  const [defaultApps, setDefaultApps] = useState(true);
  const handleSearch = (e) => {
    setDefaultApps(false);
    const searchInputValue = e.target.value;
    const searchValue = searchInputValue.toLowerCase();
    const filterAppsData = apps.filter((app) =>
      app.title.toLowerCase().includes(searchValue),
    );
    setFilterApps(filterAppsData);
  };

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
          ({defaultApps ? apps.length : filterApps.length}) Apps Found
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
          <input
            onChange={handleSearch}
            defaultValue={""}
            type="text"
            placeholder="search Apps"
            className="grow"
          />
        </label>
      </section>

      {/* App grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="gmt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {defaultApps
            ? apps.map((app) => <AppCard key={app.id} app={app} />)
            : filterApps.map((app) => <AppCard key={app.id} app={app} />)}
        </div>

        {/* Empty state — show this instead of the grid above when a search has no matches */}

        {filterApps.length === 0 && !defaultApps && <AppNotFound></AppNotFound>}
      </section>
    </>
  );
};

export default AllApps;
