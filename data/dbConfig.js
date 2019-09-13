const knex = require("knex"); // provide connection to database

const knexFile = require("../knexfile.js");

const db = knex(knexConfig.development); // create database connection

module.exports = db;
