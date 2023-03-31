import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0 cursor-pointer">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                  alt="Workflow"
                />
              </div>
            </Link>
          </div>

          <div className="ml-4 flex items-center md:ml-6">
            <ul className="flex flex-row self-end h-12">
              <li className="w-22 px-3 py-2 text-white hover:text-gray-200 cursor-pointer font-medium tracking-wide text-sm flex items-center justify-center">
                <Link to="/">Home</Link>
              </li>
              <li className="w-22 px-3 py-2 text-white hover:text-gray-200 cursor-pointer font-medium tracking-wide text-sm flex items-center justify-center">
                <Link to="/offers">Offers</Link>
              </li>
              <li className="w-22 px-3 py-2 text-white hover:text-gray-200 cursor-pointer font-medium tracking-wide text-sm flex items-center justify-center">
                <Link to="/offers/new">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                  >
                    + New offer
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
