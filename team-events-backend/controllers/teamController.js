const Team = require('../models/Team');

exports.registerTeam=async(req,res)=>{
    try{
        const { eventName, teamSize, memberNames } = req.body;

        // Check if team already registered for the event
    const existingTeam = await Team.findOne({ teamLeader: req.user.userId, eventName });
    if (existingTeam) {
      return res.status(400).json({ msg: 'Team already registered for this event' });
    }

    // Create new team
    const team = new Team({
      teamLeader: req.user.userId,
      eventName,
      teamSize,
      members: memberNames // Assuming memberNames is an array of strings
    });

    await team.save();

    res.status(201).json({ msg: 'Team registered successfully', team });
    }catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
      }
}