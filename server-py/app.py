from flask import Flask, jsonify, request
from flask_cors import CORS
from routes.realEstate import get_realEstate, post_realEstate,translate_textEsToEn, translate_textEsToPt, translate_textEnToEs

app = Flask(__name__)

CORS(app, resources={
     "*": {"origins": ["http://localhost:5173", "exp://192.168.1.13:19000","http://127.0.0.1:5173"]}})


@app.route('/')
def index():
    return jsonify({"Choo Choo": "Welcome to your Flask app 🚅"})


@app.route('/api/real-estate', methods=['GET'])
def get_companyApi():
    value = get_realEstate()
    return value

@app.route('/api/translate-es-en', methods=['POST'])
def translateEsEn():
    val = request.get_json().get('val', '')
    value = translate_textEsToEn(val)
    return jsonify({"val": value})

@app.route('/api/translate-es-pt', methods=['POST'])
def transltateEsPt():
    val = request.get_json().get('val', '')
    value = translate_textEsToPt(val)
    return jsonify({"val": value})

@app.route('/api/translate-en-es', methods=['POST'])
def transltateEnEs():
    val = request.get_json().get('val', '')
    value = translate_textEnToEs(val)
    return jsonify({"val": value})

@app.route('/api/real-estate', methods=['POST'])
def post_companyApi():
    new_created_company = post_realEstate()

    response = {
        "message": "El inmueble se creo con exito",
        "data":    new_created_company,
    }

    return jsonify(response)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
