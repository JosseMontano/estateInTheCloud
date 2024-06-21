""" from decouple import config """
from psycopg2 import connect

""" host = config('HOST')
port = config('PORT')
dbname = config('DBNAME')
user = config('USER')
password = config('PASSWORD') """

host = 'localhost'
port = '5432'
dbname = 'realEstate'
user = 'postgres'
password = 'admin'



def get_conn():
    conn = connect(host=host, port=port, dbname=dbname,
                   user=user, password=password)
    return conn
