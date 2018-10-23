const mongoose = require('mongoose');

const UserTable = mongoose.model('UserTable', require('./user-schema'));

module.exports = UserTable; 

