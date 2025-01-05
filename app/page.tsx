"use client";

import Image from "next/image";
import { useChat } from "ai/react";
import { Message } from "ai";
import F1GPTLogo from "./assets/F1GPTLogo.png";
import Bubble from "./components/Bubble";
import PromptSuggestionsRow from "./components/PromptSuggestionsRow";
import LoadingBubble from "./components/LoadingBubble";

const Home = () => {
  // Extract functions and state from useChat
  const {
    append,
    isLoading,
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat();

  const noMessages = false; // Temporary: This will change dynamically later.

  // Temporarily hardcode isLoading for testing
  //const isLoading = true; // Change to false to hide the loading bubble

  return (
    <main>
      <Image src={F1GPTLogo} alt="F1GPT logo" width="250" />

      <section className={noMessages ? "" : "populated"}>
        {/* If no messages */}
        {noMessages ? (
          <>
            <p className="starter-text">
              The Ultimate place for Formula 1 super fans! Ask F1GPT anything
              about the fantastic world of F1 racing, and it will provide the
              most up-to-date answers. We hope you enjoy!
            </p>
            <br />
            {/* Placeholder for Prompt Suggestions */}
            <PromptSuggestionsRow />
          </>
        ) : (
          <>
            {messages.map((message, index) => (
              <Bubble
                key={`message-${index}`}
                message={message}
              />
            ))}
            {isLoading && <LoadingBubble />}
          </>
        )}
      </section>
      {/* Input Form */}
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="question-box"
          placeholder="Ask me something..."
          value={input}
          onChange={handleInputChange}
        />
        <input type="submit" />
      </form>
    </main>
  );
};

export default Home;
