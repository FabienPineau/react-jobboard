import axios from "axios";
import useForm from "../hooks/UseForm";
import { useNavigate } from "react-router-dom";

const initialValues = {
  title: "Fullstack Developer",
  location: "Paris",
  type: "Full-time",
  category: "Engineering",
  description: "Lorem ipsum doloris sit amet"
};

const JobNew = () => {
  const navigate = useNavigate();
  const { as, handleSubmit } = useForm({ initialValues });

  const postJob = (v) => {
    axios
      .post("/api/offers", v)
      .then(function (response) {
        if (response.status === 201) {
          navigate(`/offers/${response.data.offer.id}`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (v) => postJob(v);

  return (
    <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <div className="mt-1">
          <input
            {...as("title")}
            type="text"
            className="p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <div className="mt-1">
          <input
            {...as("location")}
            type="text"
            className="p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Type
        </label>
        <div className="mt-1">
          <input
            {...as("type")}
            type="text"
            className="p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <div className="mt-1">
          <input
            {...as("category")}
            type="text"
            className="p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <div className="mt-1">
          <textarea
            {...as("description")}
            className="p-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none"
      >
        Create
      </button>
    </form>
  );
};

export default JobNew;
