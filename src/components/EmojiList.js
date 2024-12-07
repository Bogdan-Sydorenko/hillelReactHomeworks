import React from "react";

const EmojiList = ({ votes, onVote }) => {
    return (
        <div>
            {Object.keys(votes).map((emoji) => (
                <div key={emoji} style={{ margin: "10px", fontSize: "24px" }}>
          <span>
            {emoji} - {votes[emoji]} балів
          </span>
                    <button
                        onClick={() => onVote(emoji)}
                        style={{ marginLeft: "10px", padding: "5px 10px" }}
                    >
                        Голосувати
                    </button>
                </div>
            ))}
        </div>
    );
};

export default EmojiList;
