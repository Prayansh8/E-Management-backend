const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
