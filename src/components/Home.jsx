import React from "react";

export default function Home({ updateUser }) {
  return (
    <>
      <div className="container ">
        <div className="row h-100 w-100 justify-content-center align-items-center">
          <div className="col-12">
            <h1>Home</h1>
            <button onClick={() => updateUser({})} className="btn btn-primary">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
