from flask import request
from psycopg2 import extras
from database.db import get_conn
from utils.geopy import convertToAddres


def get_realEstate():
    return 'getting'


def post_realEstate():
    new_company = request.get_json()

    # * ========= Get data =========
    title = new_company['title']
    description = new_company['description']
    id_user = new_company['id_user']
    id_type = new_company['id_type']
    bedroom = new_company['bedroom']
    price = new_company['price']
    bathroom = new_company['bathroom']
    squareMeter = new_company['squareMeter']

    ubication = new_company['ubication']

    # * ========= Convert lat and long to Address =========
    if ubication != "":
        address = convertToAddres(ubication)

    if ubication == "":
        address = " "

    # * ========= Save in DB =========
    conn = get_conn()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    query = "insert into real_estates (title, description, user_id, type_real_estate_id, available,amount_bedroom,price,amount_bathroom,square_meter, lat_long, address) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) returning *"

    cur.execute(
        query, (
            title, description, id_user, id_type, True, bedroom, price, bathroom, squareMeter, ubication, address)
    )

    new_created_company = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return new_created_company
