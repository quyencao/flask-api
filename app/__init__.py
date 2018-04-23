from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'testapi'

mongo = PyMongo(app)

from app.accounts.views import accounts

app.register_blueprint(accounts)
