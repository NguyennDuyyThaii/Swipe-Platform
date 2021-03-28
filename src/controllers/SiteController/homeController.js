let getHome = (req, res) => {
    return res.render("site/index", {
        success: req.flash("success")
    })
}
module.exports = {
    getHome: getHome
}