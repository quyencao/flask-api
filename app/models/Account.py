from app import mongo
from app.helpers.Pagination import Pagination
from collections import OrderedDict
import pymongo

class Account:


    @staticmethod
    def get_page_accounts(page, per_page):
        total = mongo.db.accounts.count()
        pagination = Pagination(total, page, per_page)

        accounts = mongo.db.accounts.find().sort('_id', pymongo.ASCENDING).skip(pagination.start - 1).limit(per_page)

        page_accounts = []

        for account in accounts:
            page_accounts.append(Account.make_account_data(account))

        return page_accounts, pagination


    @staticmethod
    def find_all():
        accounts = mongo.db.accounts.find()
        list_accounts = []
        for account in accounts:
            list_accounts.append(Account.make_account_data(account))
        return list_accounts

    @staticmethod
    def delete_account(account_number):
        mongo.db.accounts.delete_one({'account_number': account_number})

    @staticmethod
    def find_account(account_number):
        account = mongo.db.accounts.find_one({'account_number': account_number})
        return account

    @staticmethod
    def create_account(data):
        account_data = Account.make_account_data(data)
        mongo.db.accounts.insert_one(account_data)

    @staticmethod
    def update_account(account_number, data):
        account_data = Account.make_account_data(data)
        account_data['account_number'] = account_number

        mongo.db.accounts.update_one({'account_number': account_number}, {'$set': account_data}, upsert=False)

    @staticmethod
    def make_account_data(account):
        properties = ['account_number', 'balance', 'firstname', 'lastname',
                      'age', 'gender', 'address', 'employer', 'email', 'city', 'state']
        account_data = {}
        for p in properties:
            if p in account:
                account_data[p] = account[p]
        return account_data

