# Angular-Node
MEAN stack web app


This web app was created to familiarize myself with full stack development. It uses node/express for the backend and angular/bootstrap 
for the frontend. It connects to a mongo database hosted at mlab.com and utilizes rest apis to add/update/delete/get user data.

It also uses passport for authorization on certain http requests to keep them secure.

This main focus was on functionality so styling was not a high priority.

To check it out,  <a href="https://cryptic-hamlet-49526.herokuapp.com/">click here</a> or go to https://cryptic-hamlet-49526.herokuapp.com/

To view on a local network, requires npm cli, angular cli, and nodemon.

# Install dependancies

Go to the angular-src folder and install dependancies

<pre><code>>npm install</code></pre>

# Run the app

In the angular-src folder, start the app

<pre><code>>ng serve</code></pre>

# To connect to a database and access login features, install node dependancies

In the main folder, install node dependancies

<pre><code>>npm install</code></pre>

# Configure config.database file

Add a link to the database connection point

<pre><code>module.exports = {
    database: 'DatabaseLinkHere',//connection point to database
    secret: 'secretHere' //Secret used for JWT authentication
}</code></pre>

# Configure angular-src/src/services/auth.service.ts

Change all http requests to point to

<pre><code>return this.http.post('http://localhost:5000/users/...</code></pre>

# Run nodemon

In the main folder, start nodemon

<pre><code>>nodemon</code></pre>
