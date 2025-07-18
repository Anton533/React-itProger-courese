import React from "react";
import Header from "./components/Header";
import reactLogo from "./img/react-logo.png";
import Button from "./components/Button";
import Users from "./components/Users";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header title="Header" />

        <img src={reactLogo} alt="React JS logo" />

        <div className="main-wrapper">
          <form class="form">
            <div class="form-item">
              <label class="form-label" for="contact-us-full-name">
                Name
              </label>
              <input
                class="form-input "
                type="text"
                id="contact-us-name"
                name="name"
                placeholder="name"
                required="true"
              />
            </div>

            <div class="form-item">
              <label
                class="form-label form-label--neutral-900"
                for="contact-us-full-name">
                Lastname
              </label>
              <input
                class="form-input form-input--accent"
                type="text"
                name="lastname"
                placeholder="lastname"
                required="true"
              />
            </div>

            <div class="form-item">
              <label
                class="form-label form-label--neutral-900"
                for="contact-us-full-name">
                Email
              </label>
              <input
                class="form-input form-input--accent"
                type="email"
                id="contact-us-email"
                name="email"
                placeholder="email"
                required="true"
              />
            </div>

            <div class="form-item">
              <label
                class="form-label form-label--neutral-900"
                for="contact-us-full-name">
                BIO
              </label>
              <textarea
                class="form-textarea form-textarea--accent"
                name="user-message"
                id="user-message"
                placeholder="Type your message here..."
                rows="6"
                required="true"></textarea>
            </div>

            <div class="form-bottom">
              <button type="button" class="btn w-100">
                Send
              </button>
            </div>
          </form>
          <main className="main">
            <Users />
          </main>
        </div>

        <h1 className="clicks">
          Clicks: <span id="counter"></span>
        </h1>
        <Button />
      </div>
    );
  }
}

export default App;
