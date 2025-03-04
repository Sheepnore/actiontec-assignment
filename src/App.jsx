import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <>
      <main className="w-full h-screen p-12 bg-green-100 flex justify-center items-center">
        <div className="p-6 bg-white rounded flex flex-col gap-6 shadow-2xl ">
          <h1 className="text-2xl">
            View Posts data, from JSONPlaceholder API
          </h1>
          <Link
            to="/mainPage"
            className="px-6 py-2 border rounded text-center cursor-pointer "
          >
            Go
          </Link>
        </div>
      </main>
    </>
  );
}

export default App;
