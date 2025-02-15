import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../App.jsx";
import pdf from "../assets/resume.pdf";

function Hero() {
  const [replyText, setReplyText] = useState("");
  const [messages, setMessages] = useContext(Context);
  const [requestText, setRequestText] = useState("");

  useEffect(() => {
    setReplyText(
      "Hi, I'm a Software Engineer with expertise in Computer Vision and Cloud Computing. Explore my Resume, Experience, Skills, and Projects to learn more about my expertise and accomplishments."
    );
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (requestText.trim() !== "") {
      query({
        model: "meta-llama/Meta-Llama-3-8B-Instruct",
        messages: [
          ...messages,
          {
            role: "user",
            content: `Answer in 50 words only. Question: ${requestText}`,
          },
        ],
        parameters: {
          max_new_tokens: 100,
          stop: ["<|endoftext|>"],
        },
        stream: true,
      })
        .then((result) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: "user", content: requestText },
            { role: "assistant", content: result },
          ]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setRequestText("");
    }
  };

  async function query(data) {
    console.log(data.messages[data.messages.length - 1].content);
    console.log(requestText);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct",
      {
        headers: {
          // Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",

        body: JSON.stringify({
          inputs: data.messages[data.messages.length - 1].content,
          parameters: data.parameters,
          stream: data.stream,
        }),
      }
    );
    if (!response.body) {
      console.error("No response body found");
      return "No response received";
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let text = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      const events = chunk.split("\n\n");
      for (const event of events) {
        if (event.trim() === "") continue;
        try {
          const jsonString = event.startsWith("data:") ? event.slice(5) : event;
          const jsonEvent = JSON.parse(jsonString);

          console.log(jsonEvent);

          // const content = jsonEvent.choices?.[0]?.delta?.content || "";
          // const content = jsonEvent.generated_text || "";

          if (jsonEvent.token && jsonEvent.token.text) {
            text += jsonEvent.token.text;
            setReplyText(text);
            await new Promise((resolve) => setTimeout(resolve, 10));
          } else {
            setReplyText(
              "The model did not return a valid response. Please try again."
            );
          }
        } catch (error) {
          console.error("Error parsing event:", error);
          setReplyText("Error");
        }
      }
    }
    return text;
  }

  return (
    <div className="text-blue-950 dark:text-white text-center">
      <h1 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl pt-16">
        Hello, I'm Vraj Parekh
      </h1>

      <div className="flex justify-center items-center mt-12 flex-wrap">
        <input
          id="chat"
          rows="1"
          className="block mx-4 p-2.5 w-8/12 text-sm text-blue-950 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ask me anything about Vraj ..."
          value={requestText}
          onChange={(e) => setRequestText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage(e)}
        />
        <button
          type="submit"
          className="duration-300 inline-flex justify-center p-2 text-blue-950 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          onClick={handleSendMessage}
        >
          <svg
            className="w-6 h-6 my-1 mx-1 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>

      <div
        className="mt-6 text-lg text-gray-600 dark:text-gray-400 lg:text-xl sm:px-24 lg:px-48"
        dangerouslySetInnerHTML={{ __html: replyText }}
      />

      {/* <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 lg:text-xl sm:px-24 lg:px-48">
        Hi, I'm a Software Engineer with expertise in Computer Vision and Cloud
        Computing. Explore my Resume, Experience, Skills, and Projects sections
        to learn more about my expertise and accomplishments.
      </p> */}
      <div className="mt-12">
        <a
          href={pdf}
          rel="noreferrer"
          target="_blank"
          class="hover:shadow-lg hover:shadow-sky-900 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:focus:ring-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <svg
            class="w-3.5 h-3.5 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"></path>
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
          </svg>{" "}
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
