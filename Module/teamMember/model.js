var { teamMemberSchema, mongoose } = require('./schema');
var teamMemberModel = mongoose.model('team-member', teamMemberSchema);

module.exports = {
    teamMemberModel
};