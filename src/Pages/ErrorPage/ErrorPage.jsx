import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl flex justify-center items-center h-screen">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
            Oops! The page you&apos;re looking for isn&apos;t here.
          </h1>
          <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
          <Link
            to="/"
            className="w-full mb-2 btn btn-lg btn-light sm:w-auto sm:mb-0"
          >
            Back to homepage
          </Link>
          <Link
            to="/contact"
            className="w-full mb-2 btn btn-lg btn-white sm:w-auto sm:mb-0"
          >
            Contact us
          </Link>
        </div>
        <div>
          <div className="w-full h-full py-48 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
