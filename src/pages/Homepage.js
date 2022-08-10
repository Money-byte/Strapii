import React from "react";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  // console.log(data);

  //   console.log(data.data); // typeof data.data is an array of objects otherwise it will be an object

  return (
    <div>
      {data.data.map((review, index) => {
        let r = review.attributes;
        return (
          <div key={index} className="review-card">
            <div className="rating">{r.rating}</div>
            <h2>{r.title}</h2>
            <small>console list</small>
            <p>{r.body.substring(0, 75)}...</p>
            <Link to={`/details/${r.id}`}>Read more</Link>
          </div>
        );
      })}
    </div>
  );
}
