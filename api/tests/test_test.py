import json
from fastapi.testclient import TestClient
from main import app
from queries.accounts import Account, AccountOut, AccountIn, AccountsQueries
from queries.reviews import ReviewIn, ReviewOut, ReviewQueries, ReviewsOutAll
from authenticator import authenticator

client = TestClient(app=app)

# class AccountsQueriesMock:
#   def create_account(self, account: AccountIn, hashed_password) -> AccountOut:
#     account_dict = account.dict()
#     return AccountOut(id = 23, **account_dict)

# def test_create_account():
#   # Arrange
#   app.dependency_overrides[AccountsQueries] = AccountsQueriesMock
#   account_body = {
#     "email": "email@email.com",
#     "username": "username",
#     "password": "password",
#   }

#   # Act
#   res = client.post('/api/accounts/', json.dumps(account_body))
#   # Assert
#   assert res.status_code == 200
#   assert res.json()['email'] == "email@email.com"
#   assert res.json()['hashed_password'] == "hashed_password"
#   assert res.json()['username'] == "username"
#   assert res.json()['id'] == 23

#   # A cleanup
#   app.dependency_overrides = {}

def get_current_account_data_mock():
  return {
    'id': 1337,
    'username': 'dan@email.com'
  }

class ReviewQueriesMock:
  def get_all_reviews(self):
    return []

  def create_review(self, review: ReviewIn) -> ReviewOut:
    review_dict = review.dict()
    return ReviewOut(id=1337, **review_dict)

  def get_review(self, id: int ) -> ReviewOut:
    record = {"reviewer_id": 1337,
    "title": "This is electrifting",
    "rating": 4,
    "content": "I can't believe this is live, the killed it, and the audio quality is pretty damn good",
    "album_id": "1dmBXO2zmCbsf8qAicqbs0",
    "best_song": "Dirty Deeds Done Dirt Cheap - Live - 1991",
    "worst_song": "For Those About to Rock (We Salute You) - Live - 1991",
    "img_url": "https://i.scdn.co/image/ab67616d0000b273c5a5b4be2acc36cddc42fb8f"
    }
    return ReviewOut(id=666, **record)

  def delete_review(self, review_id: int) -> bool:
    return True

def test_create_review():
  # Arrange
  app.dependency_overrides[ReviewQueries] = ReviewQueriesMock
  app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock
  review_body = {
    "reviewer_id": 1337,
    "title": "This is electrifting",
    "rating": 4,
    "content": "I can't believe this is live, the killed it, and the audio quality is pretty damn good",
    "album_id": "1dmBXO2zmCbsf8qAicqbs0",
    "best_song": "Dirty Deeds Done Dirt Cheap - Live - 1991",
    "worst_song": "For Those About to Rock (We Salute You) - Live - 1991",
    "img_url": "https://i.scdn.co/image/ab67616d0000b273c5a5b4be2acc36cddc42fb8f"
  }

  # Act
  res = client.post('/api/reviews/', json.dumps(review_body))

  # Assert
  assert res.status_code == 200
  assert res.json()['id'] == 1337
  assert res.json()['reviewer_id'] == 1337

  # A cleanup
  app.dependency_overrides = {}



def test_reviews_list():
  app.dependency_overrides[ReviewQueries] = ReviewQueriesMock
  app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock
  res = client.get('/api/reviews/')

  assert res.status_code == 200
  assert res.json() == {'reviews': []}
  app.dependency_overrides = {}

def test_get_review():
  app.dependency_overrides[ReviewQueries] = ReviewQueriesMock
  app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock
  review_body = {
        "reviewer_id": 1337,
    "title": "This is electrifting",
    "rating": 4,
    "content": "I can't believe this is live, the killed it, and the audio quality is pretty damn good",
    "album_id": "1dmBXO2zmCbsf8qAicqbs0",
    "best_song": "Dirty Deeds Done Dirt Cheap - Live - 1991",
    "worst_song": "For Those About to Rock (We Salute You) - Live - 1991",
    "img_url": "https://i.scdn.co/image/ab67616d0000b273c5a5b4be2acc36cddc42fb8f",
  }
  review_id = 666

  res = client.post('/api/reviews/', json.dumps(review_body))
  res = client.get(f'/api/reviews/{review_id}')

  assert res.status_code == 200
  assert res.json() == {
      "reviewer_id": 1337,
    "title": "This is electrifting",
    "rating": 4,
    "content": "I can't believe this is live, the killed it, and the audio quality is pretty damn good",
    "album_id": "1dmBXO2zmCbsf8qAicqbs0",
    "best_song": "Dirty Deeds Done Dirt Cheap - Live - 1991",
    "worst_song": "For Those About to Rock (We Salute You) - Live - 1991",
    "img_url": "https://i.scdn.co/image/ab67616d0000b273c5a5b4be2acc36cddc42fb8f",
    "id": 666
  }

  app.dependency_overrides = {}


def test_delete_review():
  # Arrange
  app.dependency_overrides[ReviewQueries] = ReviewQueriesMock
  app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock
  review_body = {
    "reviewer_id": 1337,
    "title": "This is electrifting",
    "rating": 4,
    "content": "I can't believe this is live, the killed it, and the audio quality is pretty damn good",
    "album_id": "1dmBXO2zmCbsf8qAicqbs0",
    "best_song": "Dirty Deeds Done Dirt Cheap - Live - 1991",
    "worst_song": "For Those About to Rock (We Salute You) - Live - 1991",
    "img_url": "https://i.scdn.co/image/ab67616d0000b273c5a5b4be2acc36cddc42fb8f",
  }

  review_id = 727

  # Act
  res = client.post('/api/reviews/', json.dumps(review_body))
  res = client.delete(f'/api/reviews/{review_id}')

  # Assert
  assert res.status_code == 200
  assert res.json() == True

  # A cleanup
  app.dependency_overrides = {}
