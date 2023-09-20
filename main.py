from fastapi import FastAPI , UploadFile , File ,Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from joblib import load
from math import *
import numpy as np
from PIL import Image
from fastapi.security import APIKeyHeader
import hashlib
import mysql
import mysql.connector
import pandas as pd
from io import BytesIO
from fastapi.responses import FileResponse
import tempfile
from datetime import datetime

loadel_model = load('model.joblib')

loadel_modell = load('modell.joblib')

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
   "http://localhost:4200",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class InputData(BaseModel):
    # Structure des données d'entrée
    taille: float

class OutputData(BaseModel):
    # Structure des données de sortie
    poids: float

class InputData1(BaseModel):
    Age: float
    SexCode: int
    Pclass: float


#Connexion à la base de donnée
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="api_base"
)


appel_api_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="appel_api"
)

api_base_cursor = mydb.cursor()
appel_api_cursor = appel_api_connection.cursor()


#Récupéreration des informations des users de la base de donnée
def get_user(token):
    querry1 = "SELECT * FROM user WHERE user.token = '%s'" % token
    mycursor = mydb.cursor()
    mycursor.execute(querry1)
    myresult = mycursor.fetchall()
    return myresult



#def hash_api_key(api_key: str):
    #hashed_key = hashlib.sha256(api_key.encode()).hexdigest()
    #return hashed_key

#const_api = hash_api_key("Token")
#const_api_admin = hash_api_key("TokenAdmin")

api_key_header = APIKeyHeader(name="X-API-Key")
    

async def check_api_key(api_key: str = Depends(api_key_header)):
    user = get_user(api_key)
    if len(user) == 0:
        raise HTTPException(status_code=401, detail="Invalid API key")
    
    user_type = user[0][3]
    if user_type == 'user' or user_type == 'admin':
        return{"message": "Access granted"}
    else:
        raise HTTPException(status_code=401, detail="Invalid API key")
    


async def check_api_key_admin(api_key: str = Depends(api_key_header)):
    user = get_user(api_key)
    if len(user) == 0:
        raise HTTPException(status_code=401, detail="Invalid API key")
    
    user_type = user[0][3]
    if user_type == 'admin':
        return{"message": "Access granted"}
    else:
        raise HTTPException(status_code=401, detail="not authorized")
    
    

#Authentification avec la fonction get_user
@app.get("/authentication/")
async def authentication(request: Request , apikey : str = ""):
     # Récupérer l'URL de la route
    url = str(request.url.path)

    #Récupérer l'ID de l'utilisateur de cette route depuis la base de données "api_base"
    user = get_user(apikey)
    user_id = user[0][0]
    
    #la date actuelle
    date= datetime.now()

    # Insérer les données dans la base de données "appel_api"
    insert_query = "INSERT INTO appel (user_id_appel, url, date) VALUES (%s, %s, %s)"
    insert_values = (user_id, url, date)
    appel_api_cursor.execute(insert_query, insert_values)
    appel_api_connection.commit()

    #Vérifier si le api_key existe dans la base de donnée
    #user = get_user(apikey)
    if len(user) == 0:
        return{"Message" : "User does not exist !"}
    
    user_type = user[0][3]
    user_name = user[0][2]
    return {user_type, user_name}



@app.get("/protected-route", dependencies=[Depends(check_api_key)])
async def protected_route():
    return {"message": "Access granted"}

@app.get("/protected-route-admin", dependencies=[Depends(check_api_key_admin)])
async def protected_route_admin():
    return {"message": "Access granted"}




#response_model=OutputData, 
@app.post("/prediction_Poids", dependencies=[Depends(check_api_key)] )
def predict(data: InputData ,  request: Request , apikey: str = Depends(api_key_header)):
#def predict(data: InputData ,  request: Request , apikey : str = ""):

    # Récupérer l'URL de la route
    url = str(request.url.path)

    #Récupérer l'ID de l'utilisateur de cette route depuis la base de données "api_base"
    user = get_user(apikey)
    user_id = user[0][0]
    
    #la date actuelle
    date= datetime.now()

    # Insérer les données dans la base de données "appel_api"
    insert_query = "INSERT INTO appel (user_id_appel, url, date) VALUES (%s, %s, %s)"
    insert_values = (user_id, url, date)
    appel_api_cursor.execute(insert_query, insert_values)
    appel_api_connection.commit()

    # Convertir la donnée d'entrée en tableau numpy
    input_array = data.taille

    # Faire la prédiction en utilisant le modèle entraîné
    prediction = loadel_model.predict([[input_array]])

    # Créer l'objet de réponse
    prediction=abs(prediction[0])
    prediction=round(prediction,2)
    output_data = OutputData(poids=prediction)
    
    return output_data



@app.post("/prediction_titanic",dependencies=[Depends(check_api_key_admin)])
def predict(data: InputData1,request: Request , apikey: str = Depends(api_key_header)):
    # Récupérer l'URL de la route
    url = str(request.url.path)

    #Récupérer l'ID de l'utilisateur de cette route depuis la base de données "api_base"
    user = get_user(apikey)
    user_id = user[0][0]
    
    #la date actuelle
    date= datetime.now()

    # Insérer les données dans la base de données "appel_api"
    insert_query = "INSERT INTO appel (user_id_appel, url, date) VALUES (%s, %s, %s)"
    insert_values = (user_id, url, date)
    appel_api_cursor.execute(insert_query, insert_values)
    appel_api_connection.commit()
     
    # Convertir les données d'entrée en tableau numpy
    x = np.array([[data.Age, data.SexCode, data.Pclass]])
    prediction = loadel_modell.predict(x)
    # Vérifier différentes conditions pour la prédiction
    if prediction == 0:
        result = "deceased"
    else:
        result = "survived"
    return result



@app.post("/crop_image", dependencies=[Depends(check_api_key)])
async def crop_image(request: Request , apikey: str = Depends(api_key_header),file: UploadFile = File(...)):
     # Récupérer l'URL de la route
    url = str(request.url.path)

    #Récupérer l'ID de l'utilisateur de cette route depuis la base de données "api_base"
    user = get_user(apikey)
    user_id = user[0][0]
    
    #la date actuelle
    date= datetime.now()

    # Insérer les données dans la base de données "appel_api"
    insert_query = "INSERT INTO appel (user_id_appel, url, date) VALUES (%s, %s, %s)"
    insert_values = (user_id, url, date)
    appel_api_cursor.execute(insert_query, insert_values)
    appel_api_connection.commit()

    # Ouvrir l'image avec Pillow
    image = Image.open(file.file)

    # Dimensions du recadrage
    crop_width = 500
    crop_height = 500

    # Calculer les coordonnées de recadrage pour centrer l'image
    width, height = image.size
    x = (width - crop_width) // 2
    y = (height - crop_height) // 2

    # Effectuer le recadrage de l'image
    cropped_image = image.crop((x, y, x + crop_width, y + crop_height))

    # Enregistrer l'image recadrée (optionnel)
    cropped_image.save("C:/api/image_recadree.jpg")

    #return {"file_name":file.filename} 
    # Récupérer le chemin complet de l'image recadré
    file_path = "C:/api/image_recadree.jpg"

    # Retourner l'image recadré dans l'api
    return FileResponse(file_path, filename="image_recadree.jpg")

    # requete pour afficher l'image recadré dans l'api
    #return FileResponse(file_path)



@app.get("/statistiques-appels", dependencies=[Depends(check_api_key_admin)])
async def get_statistics():
#async def get_statistics(apikey: str = Depends(api_key_header)):
    # Vérifier si l'utilisateur a les autorisations nécessaires
    #user = get_user(apikey)
    #if len(user) == 0:
        #raise HTTPException(status_code=401, detail="Invalid API key")
    #user_type = user[0][3]
    #if user_type != 'admin':
        #raise HTTPException(status_code=401, detail="Not authorized")

    # Effectuer la requête SQL pour récupérer les statistiques des appels
    #query = "SELECT COUNT(*) AS total_appels, url, DATE_FORMAT(date, '%Y-%m-%d') AS date FROM appel GROUP BY url, date"
    #query = "SELECT COUNT(*) AS total_appels, url, DATE_FORMAT(date, '%Y-%m-%d %H:%i:%s') AS date FROM appel GROUP BY url, date"
    #query = "SELECT COUNT(*) AS total_appels, url, DATE_FORMAT(date, '%Y-%m-%d %H:%i:%s') AS date FROM appel GROUP BY url"
    query = "SELECT COUNT(*) AS total_appels,user_id_appel, url, DATE_FORMAT(date, '%Y-%m-%d %H:%i:%s') AS date FROM appel GROUP BY url ,user_id_appel"
    appel_api_cursor.execute(query)
    statistics = appel_api_cursor.fetchall()

    # Créer une liste de dictionnaires pour stocker les statistiques
    #results = []
    #for stat in statistics:
      #  total_appels = stat[0]
       # url = stat[1]
       # date = stat[2]
       # results.append({
       #     'total_appels': total_appels,
        #    'url': url,
         #   'date': date
        
       # })

    results = []
    for stat in statistics:
        total_appels = stat[0]
        user_id_appel= stat[1]
        url = stat[2]
        date = stat[3]

    #    results.append({
     #      'total_appels': total_appels,
     #      'url': url,
      #      'date': date
       # 
      #  })
        results.append({
           'total_appels': total_appels,
            'user_id_appel': user_id_appel,
           'url': url,
            'date': date
        
        })



    # Retourner les statistiques des appels comme réponse JSON
    return {'statistics': results}



@app.get("/")
async def root():
    return {"message": "Hello World"}

#if _name=='__main_':
    #init()
    #uvicorn.run(app,host="127.0.0.1",port=8000)
