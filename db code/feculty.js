const mongoose = require('mongoose');

const schema = mongoose.Schema({
    FecultyName: String,
    FecultyMobile: Number,
    FecultyEmail: String,
    FecultyPassword: String
});

module.exports = mongoose.model("feculty",schema);