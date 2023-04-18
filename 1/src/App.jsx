function App() {
  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex flex-col justify-start items-center pt-16 px-4">
      <form className="flex w-full">
        <input
          className="grow border-2 px-2 py-1 border-gray-300 rounded-lg focus:outline-main shadow-lg"
          type="text"
        />
        <input
          className="ml-4 px-2 py-1 border-2 border-main text-main rounded-lg shadow-lg"
          type="submit"
        />
      </form>
    </div>
  );
}

export default App;
