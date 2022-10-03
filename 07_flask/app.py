"""
Jeff Chen
SoftDev
k07 - flask
10-2-2022
time spent:

"""
# your heading here

from flask import Flask

app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?
def hello_world():
    print(__name__) # Q2: Where will this print to? Q3: What will it print?
    return "No hablo queso!"  # Q4: Will this appear anywhere? How u know?

app.run()  # Q5: Where have you seen similar constructs in other languages?


'''
DISCO:

QCC:
0. 
1. '/' means current directory when browsing files
2. Doesn't print anywhere
3. Nothing
4. Shows on website
5. 
...

INVESTIGATIVE APPROACH:
<Your concise summary of how
 you and your team set about
 "illuminating the cave of ignorance" here...>
 
 Used pip install flask to get flask, but running the file doesn't open anything of interest.
 Opened ip address printed out by running this file in terminal, takes me to a website with "no hablo queso!" printed.
'''
