"""
Soup Noodles (Jeff Chen, Brian Chen)
SoftDev
K20: A RESTful Journey Skyward
2022-11-22
time spent: 1
"""
from flask import session, Flask, render_template, json
from urllib.request import urlopen, Request
from urllib import request

app = Flask(__name__)


@app.route("/")
def home():
    getMEME = "https://api.imgflip.com/get_memes"
    request_site = Request(getMEME, headers={"User-Agent": "Mozilla/5.0"})#bundles url with headers to identify user as not a bot
    #print(URL)#checks for getting correct URL
    response = urlopen(request_site)#grabs the JSON from the page
    data_json = json.loads(response.read())#reads the JSON of the page and turns it into a dictionary
    #print(data_json)#checks for correct retrieval of JSON

    return render_template('main.html', image=data_json['data']['memes'][0]['url'])

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()


