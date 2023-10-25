import json


def test_index(client):
    response = client.get('/')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert "Index" in data
    assert "Welcome to my Open Source Contribution API" in data["Index"]

def test_get_users(client):
    response = client.get('/users')
    assert response.status_code == 200
    data = json.loads(response.data)
    # Add assertions for the response data here

def test_create_user(client):
    new_user_data = {
        "username": "test_user",
        "email": "test@example.com",
        "profile": "Test profile",
        "password": "test_password"
    }
    response = client.post('/users', json=new_user_data)
    assert response.status_code == 200
    data = json.loads(response.data)
    # Add assertions for the response data here

# Write similar test cases for other routes
