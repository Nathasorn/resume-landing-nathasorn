import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Apipokemon2 = ({ classicHeader, darkTheme }) => {

  const [ditto, setDitto] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let abortController = new AbortController();
    const loadditto = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`, {
          signal: abortController.signal,
        });
        setDitto(response.data);
        setError("");
      } catch (error) {
        setError("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    
    };
    loadditto();
    return () => abortController.abort();
  }, []);

  console.log(ditto);

  return (
    <section
      id="apipokemon2"
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
            Pokemon
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Example 2
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
              {ditto?.name}
            </h2>
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              <img width="200" height ="200" src={ditto?.sprites?.other?.home?.front_default} alt={ditto?.name} />
            </h2>
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              {ditto?.abilities?.map((abil , idx) => (
                <li key={idx}>{abil.ability.name}</li>
              ))}
            </h2>
            
          </div>
          {/* contact form */}
        </div>
      </div>
    </section>
  );
};

export default Apipokemon2;
