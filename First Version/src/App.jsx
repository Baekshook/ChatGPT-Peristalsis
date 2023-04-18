import axios from "axios";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!content) return;

      setIsLoading(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          },
        }
      );

      setResult(response.data.choices[0].message.content);

      setIsLoading(false);
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex flex-col justify-start items-center pt-16 px-4">
      <form className="flex w-full" onSubmit={onSubmitChat}>
        <input
          className={`grow border-2 px-2 py-1 border-gray-300 rounded-lg focus:outline-main shadow-lg ${
            isLoading && "bg-gray-200 text-gray-400"
          }`}
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          disabled={isLoading}
        />
        <input
          className={`w-24 ml-4 px-2 py-1 border-2 border-main text-main rounded-lg shadow-lg ${
            isLoading && "bg-main text-gray-200"
          }`}
          type="submit"
          disabled={isLoading}
          value={isLoading ? "검색중..." : "검색"}
        />
      </form>
      {result && <div className="mt-16 bg-main p-4 text-gray-50">{result}</div>}
    </div>
  );
}

export default App;
