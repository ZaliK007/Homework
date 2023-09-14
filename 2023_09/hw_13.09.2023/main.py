from flask import Flask, render_template

app = Flask(__name__)
a = ['About', 'Reviews', 'Contacts', 'Subscribers']


@app.route('/')
def index():
    return render_template('index.html', a=a)


@app.route('/index1')
def index1():
    return 'Hello World'


app.run(debug=True)