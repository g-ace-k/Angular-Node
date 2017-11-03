const mongoose = require('mongoose');
const config = require('../config/database');

const PageSchema =mongoose.Schema ( {
    name: {type:String},
    content: { type:String,}
});

const Page = module.exports = mongoose.model('Page',PageSchema);

module.exports.getPageById = function(id,callback) {
    Page.findById(id,callback);
};

module.exports.getPageByName = function(name,callback) {
    const query = {name:name};
    Page.findOne(query,callback);
};

module.exports.getAllPages = function(callback) {
    Page.findById("5938234b617c482334ba088b",callback);
};

module.exports.addPage = function(newPage, callback) {
    newPage.save(callback);
};
