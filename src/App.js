import React, { useState, useEffect } from "react";
import EmojiList from "./components/EmojiList";
import Result from "./components/Result";
import "./styles/App.css";


const App = () => {
    const [votes, setVotes] = useState(() => {
        const savedVotes = localStorage.getItem("emojiVotes");
        return savedVotes
            ? JSON.parse(savedVotes)
            : { "😊": 0, "😂": 0, "❤️": 0, "👍": 0 };
    });

    useEffect(() => {
        localStorage.setItem("emojiVotes", JSON.stringify(votes));
    }, [votes]);

    const handleVote = (emoji) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [emoji]: prevVotes[emoji] + 1,
        }));
    };

    const clearVotes = () => {
        setVotes({ "😊": 0, "😂": 0, "❤️": 0, "👍": 0 });
        localStorage.removeItem("emojiVotes");
    };

    return (
        <div className="container">
            <h1>Голосуй за найкращий смайлик!</h1>
            <EmojiList votes={votes} onVote={handleVote} />
            <Result votes={votes} />
            <button
                onClick={clearVotes}
                style={{ marginTop: "20px", padding: "10px 20px" }}
            >
                Очистити результати
            </button>
        </div>
    );
};

export default App;
