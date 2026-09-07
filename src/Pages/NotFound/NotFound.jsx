const NotFound = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
      <img
        src="/src/assets/error-404.png"
        alt="Page not found"
        className="w-72 sm:w-80 mb-8"
      />
      <h1 className="text-3xl font-extrabold text-slate-900">
        Oops, page not found!
      </h1>
      <p className="text-slate-500 mt-2">
        The page you are looking for is not available.
      </p>

      {/* TODO: navigate back to the previous page / home */}
      <button className="btn mt-8 bg-violet-600 hover:bg-violet-700 text-white border-none rounded-lg px-8 normal-case font-semibold">
        Go Back!
      </button>
    </section>
  );
};

export default NotFound;
