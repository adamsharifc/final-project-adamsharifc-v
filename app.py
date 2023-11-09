from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/reviews/add', methods=['POST'])
def add_review():
    data = request.get_json()
    print(data.get('title'));
    # You can print the data to the console to check if it's correct
    # print(data)
    return jsonify({'message': 'Data received!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
