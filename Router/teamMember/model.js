var mongoose = require('mongoose');
var { teamMemberSchema } = require('./schema');
var teamMemberModel = mongoose.model('team-member', teamMemberSchema);

module.exports = {
    teamMemberModel
};