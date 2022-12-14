"""
Jeff Chen
SoftDev
k07 - flask
10-2-2022
time spent:
30 min
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
Have to use pip install flask
running the file prints out an ip address used to access the website

QCC:
0. Haven't seen this anywhere (dunder method?)
1. Root of file system
2. Doesn't print anywhere
3. Nothing
4. Shows on website
5. Nowhere? (Java Driver files (methods from other files))
...

INVESTIGATIVE APPROACH:
<Your concise summary of how
 you and your team set about
 "illuminating the cave of ignorance" here...>
 
 Used pip install flask to get flask, but running the file doesn't open anything of interest.
 Opened ip address printed out by running this file in terminal, takes me to a website with "no hablo queso!" printed.
'''
