import json
from fastapi.testclient import TestClient
from main import app
from queries.accounts import Account, AccountOut, AccountIn, AccountsQueries

client = TestClient(app=app)



class AccountsQueriesMock:
  def create_account(self, account):
    account_dict = account.dict()
    return AccountOut(id = 23, **account_dict)

def test_create_account():
  # Arrange
  app.dependency_overrides[AccountsQueries] = AccountsQueriesMock
  account_body = {
    "email": "email@email.com",
    "password": "password",
    "username": "username"
  }

  # Act
  res = client.post('/api/accounts', json.dumps(account_body))

  # Assert
  assert res.status_code == 200
  assert res.json()['email'] == "email@email.com"
  assert res.json()['password'] == "password"
  assert res.json()['username'] == "username"
  assert res.json()['id'] == 23

  # A cleanup
  app.dependency_overrides = {}
