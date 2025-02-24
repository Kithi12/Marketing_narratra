export const JoggingCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-green-300 to-blue-500 p-6 rounded-2xl shadow-lg w-80 text-center">
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Jogging"
          className="mb-4 rounded-lg"
        />
        <h2 className="text-white text-xl font-bold mb-4">Jogging</h2>
        <div className="flex justify-around mb-4">
          <div className="bg-white rounded-lg p-3 text-blue-600 font-semibold shadow">
            368 <span className="text-gray-500 text-sm">Cal.</span>
          </div>
          <div className="bg-white rounded-lg p-3 text-blue-600 font-semibold shadow">
            4.1 <span className="text-gray-500 text-sm">Km.</span>
          </div>
          <div className="bg-white rounded-lg p-3 text-blue-600 font-semibold shadow">
            33 <span className="text-gray-500 text-sm">Min.</span>
          </div>
        </div>
        <p className="text-sm text-gray-100">
          6 km run <span className="text-gray-300">1.9 km left</span>
        </p>
        <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md">
          Download the App
        </button>
      </div>
    </div>
  );
};
