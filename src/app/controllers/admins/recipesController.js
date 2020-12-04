const data = require('../../../../data');

module.exports = {
    index(req, res) {
        return res.render("admin/index"); 
    },
    create(req, res) {
        return res.render("admin/create");
    },
    post(req, res) {
        return res.send("ok")
    },
};