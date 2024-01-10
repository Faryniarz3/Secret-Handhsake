from flask import make_response, request, session, jsonify
from flask_restful import Resource
from flask_bcrypt import Bcrypt

from models import db, User, Handshake
from config import app, db, api

bcrypt = Bcrypt(app)


URL_PREFIX = '/api'

def current_user():
    current_user = session["user_id"]
    if current_user:
        return User.query.filter(User.id == current_user).first()

@app.route(URL_PREFIX + '/')
def home():
    return "Secret Handshake Generator API Index"

@app.post(URL_PREFIX + '/users')
def create_user():
    try:
        data = request.json
        new_user = User(
            name=data.get("name"),
            username=data.get("username"),
            email=data.get("email"),
            phone_number=data.get("phone_number")
            )
        password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        new_user.password = password_hash
        db.session.add(new_user)
        db.session.commit()
        session["user_id"] = new_user.id
        return make_response(new_user.to_dict(), 201)
    except Exception as e:
        return {'error': f"{e}"}, 400

@app.post(URL_PREFIX + '/login')
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    print(username)
    user = User.query.filter(User.username == username).first()
    print(user)
    if user:
        if bcrypt.check_password_hash(user.password, password):
            session["user_id"] = user.id
            return make_response(user.to_dict()), 201
        else:
            return { "message": "Invalid email/password!" }, 401

@app.delete(URL_PREFIX + '/logout')
def logout():
    session.pop('user_id')
    return {}, 204

@app.get(URL_PREFIX + '/check_session')
def check_session():
    user_id = session.get("user_id")
    user = User.query.filter(User.id == user_id).first()
    if user:
        return make_response(user.to_dict(), 200)
    else:
        return { "message": "No user is currently logged in!" }, 401

@app.post(URL_PREFIX + '/handshakes')
def create_handshake():
    try:
        data = request.json
        new_handshake = Handshake(
            handshake_sequence=",".join([str(number) for number in data.get("handshake_sequence")]),
            name=data.get("name"),
            user=current_user()
            )
        db.session.add(new_handshake)
        db.session.commit()
        return make_response(new_handshake.to_dict(), 201)
    except Exception as e:
        return {'error': f"{e}"}, 400


if __name__ == '__main__':
    app.run(port=5555, debug=True)
