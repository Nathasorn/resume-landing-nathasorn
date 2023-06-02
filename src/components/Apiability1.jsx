import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Apiability1 = ({ classicHeader, darkTheme }) => {

  const [ablilit, setAbilit] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let abortController = new AbortController();
    const loadability = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/ability/?limit=20&offset=20`, {
          signal: abortController.signal,
        });
        setAbilit(response.data);
        setError("");
      } catch (error) {
        setError("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    
    };
    loadability();
    return () => abortController.abort();
  }, []);

  console.log(ablilit);

  return (
    <section
      id="apiability1"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Api Ability Pokemon
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Example 1
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Ability
            </h2>
            <ul>
              {ablilit?.results?.map((abil , idx) => (
                <li key={idx}>{abil.name}</li>
              ))}
            </ul>
          </div>
          {/* contact form */}
        </div>
      </div>
    </section>
  );
};

export default Apiability1;
