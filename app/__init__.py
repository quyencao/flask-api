from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config.from_object('app.config.DevelopConfig')

mongo = PyMongo(app)

from app.auth.views import auth

app.register_blueprint(auth)

from app.accounts.views import accounts

app.register_blueprint(accounts)


