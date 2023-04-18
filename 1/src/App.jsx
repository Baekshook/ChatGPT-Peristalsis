import axios from "axios";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

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

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex flex-col justify-start items-center pt-16 px-4">
      <form className="flex w-full" onSubmit={onSubmitChat}>
        <input
          className="grow border-2 px-2 py-1 border-gray-300 rounded-lg focus:outline-main shadow-lg"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <input
          className="ml-4 px-2 py-1 border-2 border-main text-main rounded-lg shadow-lg"
          type="submit"
        />
      </form>
      <div className="mt-16 bg-main p-4 text-gray-50">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
        doloremque iusto animi magnam modi consequatur molestias adipisci
        repellat sint autem nulla, distinctio itaque fugiat eligendi dignissimos
        rem veritatis, quod nihil.
      </div>
    </div>
  );
}

export default App;
