import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faFacebook,
  faGithub,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const fetchQuote = async () => {
    setIsLoading(true); // Set loading state to true before fetching
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?category=success",
        {
          headers: {
            "X-Api-Key": "mtSYuNMNNQIIh6WMIIYklyMTPO3gbPhR9qyDh2Gc",
          },
        }
      );
      setQuote(response.data[0].quote);
      setAuthor(response.data[0].author);
    } catch (error) {
      console.error("Error fetching quote", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mx-2">
      <div className="card col-sm-10 col-md-6 col-lg-5 p-2 text-center shadow rounded-4">
        <div className="card-header bg-transparent border-0">
          <h2 className="txt-blue-v m-3">Quote Generator</h2>
        </div>

        <figure className="text-center">
          <blockquote className="blockquote fs-5">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer mt-2 fw-medium fs-6">
            {author}
          </figcaption>
        </figure>
        <div className="card-footer bg-transparent border-gray">
          <div className="row gap-2 justify-content-center align-items-center d-flex">
            <div className="col text-start">
              <button onClick={fetchQuote} className="fs-6 my-2 btn-new">
                {isLoading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "New Quote"
                )}
              </button>
            </div>
            <div className="col text-end">
              <a
                href="https://linkedin.com/in/gideonagyage"
                className="text-decoration-none mx-2 txt-blue-v"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="https://x.com/gideon_agyage"
                className="text-decoration-none mx-2 txt-blue-v"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a
                href="https://facebook.com/gideonagyage"
                className="text-decoration-none mx-2 txt-blue-v"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://github.com/gideonagyage"
                className="text-decoration-none mx-2 txt-blue-v"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://behance.net/gideonagyage"
                className="text-decoration-none mx-2 txt-blue-v"
              >
                <FontAwesomeIcon icon={faBehance} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteGenerator;
