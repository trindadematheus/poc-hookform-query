import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-64 flex gap-8 flex-col justify-center items-center">
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Back to home page and try again.</span>
          </div>

          <Link to="/">
            <button className="btn btn-primary btn-block">HOME PAGE</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
