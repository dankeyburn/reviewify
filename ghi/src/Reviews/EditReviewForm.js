import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../Store";

function EditReviewForm(props) {
  const [state] = useContext(Context);
  const location = useLocation();
  const album_id = location.state["album_id"];
  const initial_title = location.state["title"];
  const image = location.state["img"];
  const review_content = location.state["content"];
  const review_rating = location.state["rating"];
  const review_best_song = location.state["best_song"];
  const review_worst_song = location.state["worst_song"];
  const reviewer_id = location.state["reviewer_id"];
  const review_id = location.state["id"];
  const [tracks, setTracks] = useState([]);
  const [review, setReview] = useState({
    reviewer_id: reviewer_id,
    title: initial_title,
    rating: review_rating,
    content: review_content,
    album_id: album_id,
    best_song: review_best_song,
    worst_song: review_worst_song,
    img_url: image,
  });

  function GetTracks() {
    fetch(
      `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/albums/${album_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTracks(data.tracks.items.filter((track) => track.name));
      });
  }

  useEffect(() => {
    setReview({ ...review, reviewer_id: state.currentAccount["id"] });
    GetTracks();
  }, []);

  const handleChange = (event) => {
    setReview({ ...review, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...review };
    const reviewUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/reviews/${review_id}/`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    const response = await fetch(reviewUrl, fetchConfig);
    if (response.ok) {
      await response.json();
      setReview({
        reviewer_id: "",
        title: "",
        rating: "",
        content: "",
        album_id: "",
        best_song: "",
        worst_song: "",
        img_url: "",
      });
      window.location.href = `${process.env.PUBLIC_URL}/reviews/user`;
    } else {
      console.error("Error in updating review");
    }
  };

  return (
    <div className="container">
      <div className="row"></div>
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <img className="edit-review-image" alt="Album Cover" src={image} />
          <h1>Review:</h1>
          <h1>{initial_title}</h1>
          <form onSubmit={handleSubmit} id="create-review-form">
            <div className="mb-3"></div>
            <p>Album Rating</p>
            <div className="form-check form-check-inline">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                name="rating"
                id="rating1"
                value={1}
              />
              <label className="form-check-label" htmlFor="rating1">
                1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                name="rating"
                id="rating2"
                value={2}
              />
              <label className="form-check-label" htmlFor="rating2">
                2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                name="rating"
                id="rating3"
                value={3}
              />
              <label className="form-check-label" htmlFor="rating3">
                3
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                name="rating"
                id="rating4"
                value={4}
              />
              <label className="form-check-label" htmlFor="rating4">
                4
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                name="rating"
                id="rating5"
                value={5}
              />
              <label className="form-check-label" htmlFor="rating5">
                5
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                value={review.title}
                placeholder="Review Title"
                name="title"
                id="title"
                required
                type="text"
                className="form-control"
              />
              <label htmlFor="title">Review Title</label>
            </div>
            <div className="mb-3">
              <label htmlFor="content">Review Content</label>
              <textarea
                onChange={handleChange}
                rows="8"
                required
                type="text"
                name="content"
                id="content"
                className="form-control"
                value={review.content}
              ></textarea>
            </div>
            <div className="mb-3">
              <select
                onChange={handleChange}
                value={review.best_song}
                id="best_song"
                name="best_song"
                className="form-select"
              >
                <option value="">Best song</option>
                {tracks?.map((song) => {
                  return (
                    <option key={song.id} value={song.name}>
                      {song.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <select
                onChange={handleChange}
                value={review.worst_song}
                id="worst_song"
                name="worst_song"
                className="form-select"
              >
                <option value="">Worst song</option>
                {tracks?.map((song) => {
                  return (
                    <option key={song.id} value={song.name}>
                      {song.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditReviewForm;
