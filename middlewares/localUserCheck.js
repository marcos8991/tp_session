module.exports = (req, res, next) => {
    if(req.session.bigColor)  {
        res.localUserCheck.bigColor = req.session.bigColor

    }
    next()
}