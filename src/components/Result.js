import React from "react";

const Result = ({ votes }) => {
    const maxVotes = Math.max(...Object.values(votes));
    const winner = Object.keys(votes).find((key) => votes[key] === maxVotes);

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Найкращий смайлик</h2>
            {maxVotes > 0 ? (
                <div style={{ fontSize: "36px" }}>
                    {winner} набрав {maxVotes} голосів!
                </div>
            ) : (
                <div>Немає жожного голосу</div>
            )}
        </div>
    );
};

export default Result;
