const knex = require("knex"); // provide connection to database

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development); // create database connection

module.exports = db;
