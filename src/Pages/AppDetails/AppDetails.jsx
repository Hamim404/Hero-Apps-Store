import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { useLoaderData, useParams } from "react-router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const [installStatus, setInstallStatus] = useState(false);
  const data = useLoaderData();
  const param = useParams();
  const appId = parseInt(param.id);
  const app = data.find((singleData) => singleData.id === appId);
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <ToastContainer></ToastContainer>
      {/* App info */}
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="h-56 w-56 shrink-0 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {app.title}
          </h1>
          <p className="text-slate-500 mt-2">
            Developed by{" "}
            <span className="font-semibold text-violet-600">
              {app.companyName}
            </span>
          </p>

          <div className="mt-6 border-t border-slate-200 pt-6 flex flex-wrap items-center gap-10">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/icon-downloads.png"
                alt=""
                className="h-8 w-8"
              />
              <div>
                <p className="text-xs text-slate-500">Downloads</p>
                <p className="text-xl font-extrabold text-slate-900">
                  {app.downloads}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/src/assets/icon-ratings.png"
                alt=""
                className="h-8 w-8"
              />
              <div>
                <p className="text-xs text-slate-500">Average Ratings</p>
                <p className="text-xl font-extrabold text-slate-900">
                  {app.ratingAvg}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/src/assets/icon-review.png"
                alt=""
                className="h-8 w-8"
              />
              <div>
                <p className="text-xs text-slate-500">Total Reviews</p>
                <p className="text-xl font-extrabold text-slate-900">
                  {app.reviews}
                </p>
              </div>
            </div>
          </div>

          {/* Install button — wire up disabled state + "Installed" text + success toast yourself */}
          <button
            onClick={() => {
              setInstallStatus(true);
              toast.success("Installed Successfully!")
            }}
            disabled={installStatus && "enabled"}
            className="btn mt-8 bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-lg px-6 normal-case font-semibold"
          >
            {installStatus ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings chart */}
      {/* Ratings chart */}
      <div className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-extrabold text-slate-900 mb-6">Ratings</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...app.ratings].reverse()} // Reverse so "5 star" shows at the top
              layout="vertical"
              margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
              barSize={22}
            >
              <CartesianGrid horizontal={false} stroke="#e2e8f0" />
              <XAxis
                type="number"
                domain={[0, "auto"]} // Automatically calculates axis limit based on dynamic count values
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <YAxis
                type="category"
                dataKey="name" // Fixed key from "star" to "name"
                width={60}
                tick={{ fill: "#334155", fontSize: 13 }}
              />
              <Bar dataKey="count" fill="#f97316" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-extrabold text-slate-900 mb-4">
          Description
        </h2>
        <div className="space-y-4 text-slate-500 leading-relaxed">
          <p>{app.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
