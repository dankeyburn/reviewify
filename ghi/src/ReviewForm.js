import React, { useState, useEffect} from "react";

function ReviewForm() {

    const [review, setReview] = useState({
            reviewer_id: "",
            title: "",
            rating: "",
            content: "",
            album_id: "",
            best_song: "",
            worst_song: "",
    });

    const [reviewer_id, setReviewerId] = useState("")
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState([])
    const [album_id, setAlbumId] = useState("")
    const [best_song, setBestSong] = useState([])
    const [worst_song, setWorstSong] = useState([])

    useEffect(() => {});

    const handleChange = (event) => {
        setReview({...review, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {...review}
    const reviewUrl = "http://localhost:8000/api/reviews/";
    const fetchConfig = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(reviewUrl, fetchConfig);
    if (response.ok) {
        const newreview = await response.json();
        setReview({
            reviewer_id: "",
            title: "",
            rating: "",
            content: "",
            album_id: "",
            best_song: "",
            worst_song: "",
        });
    } else {
        console.error("Error in creating review")
    }
    };

    return (
        <div className="container">
        <div className="row"></div>
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a New Review</h1>
                    <form onSubmit={handleSubmit} id="create-review-form">
                    <div className="mb-3">{title}</div>
                    <p>Album Rating</p>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"/>
                        <label className="form-check-label" for="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        clasName="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"/>
                        <label className="form-check-label" for="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"/>
                        <label className="form-check-label" for="inlineRadio3">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio4"
                        value="option4"/>
                        <label className="form-check-label" for="inlineRadio4">4</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio5"
                        value="option5"/>
                        <label className="form-check-label" for="inlineRadio5">5</label>
                    </div>
                    <div className="mb-3">
                        <label for="reviewContent">Review Content</label>
                        <textarea rows="3" required type="text" name="reviewContent" id="reviewContent" className="form-control"></textarea>
                    </div>
                    <div className="form-floating mb-3">
                    <input
                        onChange={handleChange}
                        value={review.album_id}
                        placeholder="Album Id"
                        name="AlbumId"
                        id="AlbumId"
                        required type="text"
                        className="form-control"
                        />
                    <label htmlFor='AlbumId'>Album Id</label>
                    </div>
                    <div className="mb-3">
                    <select
                      onChange={handleChange}
                      value={review.best_song}
                      id="best_song"
                      name="best_song"
                      className="form-select"
                    >
                      <option value="">Choose a song</option>
                      {best_song?.map(song => {
                        return (
                          <option
                            key={song.id}
                            value={song.name}
                          >
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
                      <option value="">Choose a song</option>
                      {worst_song?.map(song => {
                        return (
                          <option
                            key={song.id}
                            value={song.name}
                          >
                            {song.name}
                          </option>
                        );
                      })}
                    </select>
                    </div>
                    <button className="btn btn-primary" style={{backgroundColor: "#c69f3a", border: "2px solid black"}}>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm;
