const { Router } = require('express');

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { elNombreExiste } = require('../helpers/db-validators');

const {
    categoriaGet,
    categoriaPost,
    categoriaDelete,
    categoriaGetPorId
} = require('../controllers/categoria');


const router = Router();

router.get('/', categoriaGet);
router.get('/:id', categoriaGetPorId); //revisar si el id existe si no es vacio si es id mongo valido si existe la categoria con ese id

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(elNombreExiste),
    validarCampos
], categoriaPost);



router.delete('/:id', [
    //     check('id', 'No es un ID válido').isMongoId(),
    //     check('id').custom(existeUsuarioPorId),
    //     validarCampos
], categoriaDelete);

module.exports = router;