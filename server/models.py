from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class User(db.Model, SerializerMixin):
    __tablename__ = 'users_table'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = True)
    username = db.Column(db.String, nullable = False, unique = True)
    email = db.Column(db.String, nullable = True)
    phone_number = db.Column(db.String, nullable = True)
    password = db.Column(db.String, nullable = False)

    handshakes = db.relationship('Handshake', back_populates = 'user', cascade = 'all, delete-orphan')

class Handshake(db.Model, SerializerMixin):
    __tablename__ = 'handshakes_table'

    serialize_rules= ("-user",)

    id = db.Column(db.Integer, primary_key = True)
    handshake_sequence = db.Column(db.String, nullable = False)
    name = db.Column(db.String, nullable = False)

    user = db.relationship('User', back_populates = 'handshakes')

    user_id = db.Column(db.Integer, db.ForeignKey('users_table.id'), nullable = False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'sequence': self.handshake_sequence
        }