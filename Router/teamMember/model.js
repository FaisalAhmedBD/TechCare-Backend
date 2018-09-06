var mongoose = require('mongoose');
var { teamMemberSchema } = require('./schema');
var {database}=require('../../configDatabase/index')
var teamMemberModel = mongoose.model('team-member', teamMemberSchema);

module.exports = {
    teamMemberModel
};