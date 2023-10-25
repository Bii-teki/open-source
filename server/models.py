from flask_sqlalchemy import SQLAlchemy

from sqlalchemy_serializer import SerializerMixin


db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    username=db.Column(db.String(100), nullable=False)
    email=db.Column(db.String(100), nullable=False)
    password =db.Column(db.String(100), nullable=False)
    profile=db.Column(db.String(100), nullable=False)
    created_at =db.Column(db.DateTime, server_default=db.func.now())
    updated_at=db.Column(db.DateTime, onupdate=db.func.now())
    
    contributions1= db.relationship("Contribution", backref="user")
    
    def user_dict(self):
        return {
            "username": self.username,
            "email": self.email,
            "profile": self.profile,
            "password": self.password
        }
    
class Project(db.Model, SerializerMixin):
    __tablename__ = "projects"  
    
    id = db.Column(db.Integer, primary_key=True) 
    project_name= db.Column(db.String(200), nullable=False)
    description=db.Column(db.String, nullable=False) 
    program_lg= db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(100), nullable=False)
    created_at =db.Column(db.DateTime, server_default=db.func.now())
    updated_at=db.Column(db.DateTime, onupdate=db.func.now())
    
    contributions1= db.relationship("Contribution", backref="project")
    
class Contribution(db.Model, SerializerMixin):
    __tablename__ = "contributions"
    
    id = db.Column(db.Integer, primary_key=True)
    status=db.Column(db.String(100), nullable=False)
    created_at =db.Column(db.DateTime, server_default=db.func.now())
    updated_at=db.Column(db.DateTime, onupdate=db.func.now())
    
    user_id=db.Column(db.Integer(), db.ForeignKey("users.id"), nullable=False )
    project_id=db.Column(db.Integer(), db.ForeignKey("projects.id"), nullable=False )
    
    
    
class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments"
    
    id = db.Column(db.Integer, primary_key=True)
    content= db.Column(db.String, nullable=False)
     
    user_id=db.Column(db.Integer(), db.ForeignKey("users.id"), nullable=False )
    project_id=db.Column(db.Integer(), db.ForeignKey("projects.id"), nullable=False ) 
    
    
    





