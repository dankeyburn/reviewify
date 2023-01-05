from queries.reviews import ReviewIn, ReviewOut, ReviewQueries, ReviewsOutAll
from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel


router = APIRouter()

@router.get("/api/reviews", response_model=ReviewsOutAll)
def reviews_list(queries: ReviewQueries = Depends()):
    return {
        "reviews": queries.get_all_reviews(),
    }

@router.get("/api/reviews/{review_id}", response_model=ReviewOut)
def get_review(
    review_id: int,
    response: Response,
    queries: ReviewQueries = Depends(),
):
    record = queries.get_review(review_id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.post("/api/reviews/", response_model=ReviewOut)
def create_review(review_in: ReviewIn, queries: ReviewQueries = Depends()):
    return queries.create_review(review_in)
