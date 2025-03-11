import React from "react";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homeContainer}>
      <h1>Welcome to Contact Manager App</h1>
      <p>
        A modern and secure contact management solution, built with the latest
        web technologies. Easily store, edit, and organize your contacts in one
        place.
      </p>
      <p>
        <strong>Features:</strong>- User authentication with secure API -
        Create, edit, delete contacts - Fully responsive and modern UI - State
        management using Redux Toolkit
      </p>
      <p className={s.animatedText}>
        Experience seamless contact management like never before.
      </p>
    </div>
  );
};

export default HomePage;
