const {check} = require('express-validator');

module.exports = [

    check('name')
        .notEmpty().withMessage('Debes completar el nombre'),

    check('color')
        .notEmpty().withMessage('Debes seleccionar un color'),  

    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Email inválido'),

    check('age')    
    .optional({nullable: true, checkFalsy: true}).isInt().withMessage('Debe ingresar un numero')
        
]