import hashlib
import mysql
import mysql.connector
import pandas as pd

#Connexion à la base de donnée
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="api_base"
)

#Récupéreration des informations des users de la base de donnée
def get_user(token):
    querry1 = "SELECT * FROM user WHERE user.token = '%s'" % token
    mycursor = mydb.cursor()
    mycursor.execute(querry1)
    myresult = mycursor.fetchall()
    return myresult


def hash_api_key(api_key: str):
    hashed_key = hashlib.sha256(api_key.encode()).hexdigest()
    return hashed_key

const_api = hash_api_key("Token")
const_api_admin = hash_api_key("TokenAdmin")
print(const_api)