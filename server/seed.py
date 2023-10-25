from models import  User, Project, Contribution, Comment
import random
from app import app, db
from faker import Faker

with app.app_context():

    db.drop_all()
    db.create_all()
    fake = Faker()

    print("🦸‍♀️ Seeding users...")
    users = []
    for _ in range(30):
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            password=fake.password(),
            profile=fake.name()
        )
        users.append(user)
    db.session.add_all(users)
    db.session.commit()

    print("🦸‍♀️ Seeding projects...")
    projects = []
    for _ in range(30):
        project = Project(
            project_name=fake.company(),
            description=fake.sentence(),
            program_lg=fake.word(),
            status=fake.word()
        )
        projects.append(project)
    db.session.add_all(projects)
    db.session.commit()

    print("🦸‍♀️ Seeding contributions...")
    contributions = []
    for _ in range(30):
        contribution = Contribution(
            status=fake.word(),
            user_id=random.choice(users).id,  # Select a random user from the users list
            project_id=random.choice(projects).id  # Select a random project from the projects list
        )
        contributions.append(contribution)
    db.session.add_all(contributions)
    db.session.commit()
    
    print("🦸‍♀️ Seeding comments...")
    comments= []
    for _ in range(30):
        comment = Comment(
            content=fake.sentence(),
            user_id=random.choice(users).id,  # Select a random user from the users list
            project_id=random.choice(projects).id  # Select a random project from the projects list
        )
        comments.append(comment)
    db.session.add_all(comments)
    db.session.commit()
