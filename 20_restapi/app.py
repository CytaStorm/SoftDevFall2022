
from flask import session, Flask, render_template, request

app = Flask(__name__)
api = None
with open('key_nasa.txt', 'r') as f:
   api = f.read() 

@app.route("/")
def home():
    print(api)
    URL = "https://api.nasa.gov/planetary/apod?api_key=x2f8YnWLKRRkkchhZjqCOsqKGFBAbIzU2IfF0q94"
    return render_template('main.html', key=URL)


if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()


