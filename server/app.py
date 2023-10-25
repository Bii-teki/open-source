#!/usr/bin/env python3

from flask import Flask, make_response, jsonify, request, send_from_directory
from flask_migrate import Migrate

from flask_restful import Api, Resource
from flask_restx import Api, Resource, reqparse, fields
from flask_cors import CORS, cross_origin
import traceback  # Import the traceback module for error logging


import random
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
)



from models import db, User, Project, Contribution

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userprojo.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["JWT_SECRET_KEY"] = "usikusaccomanenos"

migrate = Migrate(app, db)

db.init_app(app)
jwt = JWTManager(app)
api = Api(app)



class Index(Resource):
    def get(self):
        response = {"Index": "Welcome to my Open Source Contribution API"}             
        return make_response(jsonify(response), 200)
api.add_resource(Index, '/')



class UserResource(Resource):
    def get(self):
        try:
            users = User.query.all()
            if users:
                user_list = [user.user_dict() for user in users]
                return make_response(jsonify(user_list), 200)
            else:
                return make_response(jsonify({"message": "Users not found"}), 404)
        except Exception as e:
            return make_response(jsonify({"message": "An error occurred"}), 500)

    def post(self):
        try:
            data = request.get_json()
            new_user = User(
                username=data.get("username"),
                email=data.get("email"),
                profile=data.get("profile"),
                password=data.get("password")
            )
            db.session.add(new_user)
            db.session.commit()

            users_dict = {
                "username": new_user.username,
                "email": new_user.email,
                "profile": new_user.profile,
                "password": new_user.password
            }

            return make_response(jsonify(users_dict), 200)
        except Exception as e:
            return make_response(jsonify({"message": "An error occurred"}), 500)
api.add_resource(UserResource, '/users')



class UserById(Resource):
    def get(self, id):
        try:
            user = User.query.filter_by(id=id).first()
            response_data = (jsonify(user.user_dict()), 200) if user else (jsonify({"message": "User not found"}), 404)
            return make_response(*response_data)
        except Exception as e:
            return jsonify({"message": "An error occurred"}, 500)

    
    def patch(self, id):
        try:
            data = request.get_json()
            user = User.query.filter_by(id=id).first()

            if user:
                if all(key in data for key in ["username", "email", "profile", "password"]):
                    user.username = data["username"]
                    user.email = data["email"]
                    user.profile = data["profile"]
                    user.password = data["password"]
                    db.session.commit()
                    return make_response(jsonify(user.user_dict()), 200)
                else:
                    return jsonify({"message": "Invalid request data"}, 400)
            return jsonify({"message": "User not found"}, 404)
        except Exception as e:
            return jsonify({"message": "An error occurred"}, 500)

    
    def delete(self, id):
        try:
            user = User.query.filter_by(id=id).first()
            if user:
                db.session.delete(user)
                db.session.commit()
                return make_response(jsonify({"message": "User deleted"}, 200))
            else:
                return make_response(jsonify({"message": "User not found"}, 404))
        except Exception as e:
            return jsonify({"message": "An error occurred"}, 500)     

api.add_resource(UserById, '/users/<int:id>')


class Login(Resource):
    def post(self):
        try:
            data = request.get_json()
            email = data.get("email")
            password = data.get("password")

            user = User.query.filter_by(email=email).first()
            if user and user.password == password:
                user_dict = {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                    "profile": user.profile
                }
                access_token = create_access_token(identity=user_dict)
                return make_response(jsonify({"access_token": access_token, "user_id": user.id}), 200)
            else:
                return make_response(jsonify({"message": "Invalid credentials"}), 401)
        except Exception as e:                
                traceback.print_exc()  
                return make_response(jsonify({"message": "An error occurred"}), 500)
    

api.add_resource(Login, '/login') 

class ProjectsResource(Resource):
    def get(self):
        try:
            projects = Project.query.all()
            
            if projects:
                project_list = []
                for project in projects:
                    project_dict = {
                        "id": project.id,
                        "project_name": project.project_name,
                        "description": project.description,
                        "program_lg": project.program_lg,
                        "status": project.status,
                        "created_at": project.created_at
                    }
                    project_list.append(project_dict)
                return make_response(jsonify(project_list), 200)
            else:
                return make_response(jsonify({"message": "Projects not found"}), 404)
        except Exception as e:
            traceback.print_exc()  
            return make_response(jsonify({"message": "An error occurred"}), 500)

api.add_resource(ProjectsResource, '/projects')
       

if __name__ == "__main__":
    app.run(port=5558, debug=True)