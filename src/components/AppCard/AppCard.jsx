const AppCard = () => {
  return (
    <div className="card bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
      <figure className="bg-slate-200 aspect-square">
        <img
          src={app.image}
          alt={app.title}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body p-4 gap-3">
        <h3 className="text-[15px] font-semibold text-slate-800 leading-snug line-clamp-2">
          {app.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="badge bg-emerald-50 text-emerald-600 border-none rounded-md gap-1 px-2 py-3 font-semibold">
            <img
              src="/assets/icon-downloads.png"
              alt=""
              className="h-3.5 w-3.5"
            />
            {app.downloads}
          </span>
          <span className="badge bg-orange-50 text-orange-500 border-none rounded-md gap-1 px-2 py-3 font-semibold">
            <img
              src="/assets/icon-ratings.png"
              alt=""
              className="h-3.5 w-3.5"
            />
            {app.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
