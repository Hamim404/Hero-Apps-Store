import { useNavigate } from 'react-router';
import notFoundImg from '/src/assets/error-404.png'
const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // If there is no browser history for your site, fallback to home "/"
    if (window.history.length <= 1) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
      <img
        src={notFoundImg}
        alt="Page not found"
        className="w-72 sm:w-80 mb-8"
      />
      <h1 className="text-3xl font-extrabold text-slate-900">
        Oops, page not found!
      </h1>
      <p className="text-slate-500 mt-2">
        The page you are looking for is not available.
      </p>

      <button
        onClick={handleGoBack}
        className="btn mt-8 bg-violet-600 hover:bg-violet-700 text-white border-none rounded-lg px-8 normal-case font-semibold"
      >
        Go Back!
      </button>
    </section>
  );
};

export default NotFound;