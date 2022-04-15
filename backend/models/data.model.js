const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: 'string', require: true},
    category: { type: 'string', require: true},
    image: { type: 'string', require: true},
    video: { type: 'string', require: true},
    github: { type: 'string', require: true},
    stack: { type: 'Array', require: true},
    tech: { type: 'Array', require: true},
     desc: { type: 'string', require: true},
    details: { type: 'Array', require: true},

},{timestamp: true})



module.exports = mongoose.model('project', ProjectSchema)