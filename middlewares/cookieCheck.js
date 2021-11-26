module.exports = (req, res, next) => {
    if(req.cookies.bigColor){
        req.session.bigColor = req.cookies.bigColor
    }
    next()
}