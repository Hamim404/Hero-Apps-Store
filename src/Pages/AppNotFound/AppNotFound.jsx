import appErrorImg from "/src/assets/App-Error.png";

const AppNotFound = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
      <img
        src={appErrorImg}
        alt="App not found"
        className="w-64 sm:w-72 mb-8"
      />
      <h1 className="text-3xl font-extrabold text-slate-900">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-slate-500 mt-2">
        The App you are requesting is not found on our system. Please try
        another apps
      </p>

      {/* TODO: navigate back to the All Apps page */}
      <button className="btn mt-8 bg-violet-600 hover:bg-violet-700 text-white border-none rounded-lg px-8 normal-case font-semibold">
        Go Back!
      </button>
    </section>
  );
};

export default AppNotFound;
