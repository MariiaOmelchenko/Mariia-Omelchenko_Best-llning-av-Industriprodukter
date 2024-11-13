# Mariia-Omelchenko_Bestllning-av-Industriprodukter
Bygga en websida som använder Forms för att skicka en beställning på industriprodukter.
Produkterna ska kunna väljas från industrial.json i Serverside-repot som delats.
Formuläret ska skickas till ett eget REST-API via ett POST-anrop.
Servern ska spara varje beställning i en tabell med produktens id, ett unikt radnummer och ett id gemensamt för beställningen, detta ska sparas på en en databas.

import db mysql -u root -p my_database_name < db/my_database_name.sql

mkdir my-server
cd my-server

npm init -y

npm install cors

npm install express

npm install mysql2

node server.js