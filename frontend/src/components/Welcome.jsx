import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="space-y-4">
        <Link to="/create-account">
          <button className="w-full py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Create Account
          </button>
        </Link>

        <Link to="/login">
          <button className="w-full py-3 px-4 bg-purple-200 text-purple-700 rounded-md hover:bg-purple-300">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
