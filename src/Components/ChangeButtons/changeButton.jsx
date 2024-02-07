import React from "react";

export default function Buttons({currentPage,nextFn,preFn}){
    return (
        <div style={{textAlign:"center"}}>
      <button
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    cursor: "pointer",
                    marginRight: "16px",
                  }}
                  onClick={preFn}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage}
                </span>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    cursor: "pointer",
                    marginLeft: "16px",
                  }}
                  onClick={nextFn}
                >
                  Next
                </button>
                </div>
    )
}