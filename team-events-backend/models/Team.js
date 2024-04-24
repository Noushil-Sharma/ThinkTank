

const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamLeader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventName: { type: String, ref: 'Event', required: true },
  members: [{ type: String }],
  teamSize: { type: Number, required: true }
});

module.exports = mongoose.model('Team', teamSchema);
