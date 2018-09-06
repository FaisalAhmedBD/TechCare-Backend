var { teamMemberModel } = require('./model');

let getTeamMemberInfo = (req, res) => {
    return  teamMemberModel
        .find({})
        .then(data => {
            res.send({
                teamMembers: data
            })
        })
        .catch(error => {
            console.error(error);
            res.send('error while loading team-members info, error : ', error);
        })
}
let addNewTeamMember = (req, res) => {
    const {
      name,
     designation,
     image
    } = req.body;

    const newTeamMember = new teamMemberModel({
        name,
        designation,
        image
    });

    newTeamMember.save(error => {
        if (error) {
            console.error(error);
            res.send('error while saving newTeamMember in database');
        }
        res.send('newTeamMember successfully added')
    })

}
module.exports = {
    getTeamMemberInfo,
    addNewTeamMember
}