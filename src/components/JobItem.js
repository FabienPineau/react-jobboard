import { Link } from "react-router-dom";
import { LocationMarkerIcon, UsersIcon } from "@heroicons/react/solid";

const JobItem = ({ data }) => {
  return (
    <Link to={`/offers/${data.id}`}>
      <div className="bg-white border-b cursor-pointer">
        <div className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-indigo-600 truncate">
                {data.title}
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                <p
                  className={
                    "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
                    (data.type === "Full-time"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-green-800")
                  }
                >
                  {data.type}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  <UsersIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {data.category}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <LocationMarkerIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {data.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobItem;
