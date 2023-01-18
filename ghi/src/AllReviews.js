import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap"

function AllReviews() {
    const [reviews, setReviews] =useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/reviews")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Cannot load review data");
            })
            .then((response) =>
                setReviews(
                    response.reviews
                )
            );
    }, []);



    return (
        <>
        <div className="App" style={{ marginTop: "30px" }}></div>
        <Container>
            <Row className="mx-2 row row-cols-4">
                {reviews.map((review) => {
                    return (
                        <div className="card mb-3" style="max-width: 540px;">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={review.img_url} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

                    );
                })}
            </Row>
        </Container>

        </>
    );
}

export default AllReviews;




 // <Card
                        //     key={review.id}>
                        //     <img src={review.img_url}/>
                        // </Card>
