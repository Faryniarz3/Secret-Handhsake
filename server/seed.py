from random import randint, choice as rc
from faker import Faker

from app import app
from models import db, User, Handshake

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("deleting old entries")
        User.query.delete()
        Handshake.query.delete()

        print("Seeding new database")

        users_list = []
        for _ in range(10):
            u = User(
                name=fake.name(),
                username=fake.name(),
                email=fake.email(),
                phone_number=fake.phone_number(),
                password = "password"
            )
            users_list.append(u)
            print(u)
        db.session.add_all(users_list)
        db.session.commit()
        print("Seeded users")

        handshakes_list = []
        for _ in range(10):
            h = Handshake(
                handshake_sequence= "1, 2, 2, 3, 1",
                name=fake.name(),
                user_id=rc(users_list).id
            )

            handshakes_list.append(h)
            print(h)

        db.session.add_all(handshakes_list)
        db.session.commit()
        print("Seeded handshakes")

        print("Done seeding...")
        