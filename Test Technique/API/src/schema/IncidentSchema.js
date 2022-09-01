const mongoose = require('mongoose');

const { Schema } = mongoose;

const IncidentSchema = new Schema({
    title: String,
    description: String,
    created: String,
    modified: String,
});

const requestdb = mongoose.model('incident', IncidentSchema);

module.exports.IncidentSchema = requestdb;