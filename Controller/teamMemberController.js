var { teamMember } = require('../Model/models');

let getTeamMemberInfo = (req, res) => {
    teamMember.find({}, (err, data) => {
        if (err) {
            console.log('team member info not found, error : ', err);
            res.send('team member info not found');
        }
        else {
            res.send({
                team_members: data
            });
        }
    })
}
let addnewTeamMember = (res, req) => {
    const {
        name,
        designation,
        image
    } = req.body;

    const newTeamMember = new teamMember({ name, designation, image });

    newTeamMember.save(error => {
        if (error)
            console.error(error)
        res.send('new team member added')
    }
    )
}
module.exports = {
    getTeamMemberInfo,
    addnewTeamMember
}