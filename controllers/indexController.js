const {validationResult} = require('express-validatior');

module.exports= {
    index : (req, res) => {
        return res.render('index', {
            title: 'Colorin, colorado'
        })
    },
    color: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const {name, color, email, age, remember} = req.body;

            req.session.bigColor = color;
            res.locals.bigColor = req.session.bigColor;

            if(remember){
                res.cookie('bigColor', req.session.bigColor, {maxAge: 1000 * 60})
            }
            return res.render('index', {
                name,
                color,
                email,
                age
            })
        }else{
            return res.render('index', {
                old: req.body,
                errors: errors.mapped()
            })
        }
    },
    logout : (req, res) => {
        res.render('logout')
    },
    destroy: (req, res) =>{
        req.session.destroy();
        res.cookie('bigColor', null, {maxAge: -1})
        res.redirect('/')
    }
}