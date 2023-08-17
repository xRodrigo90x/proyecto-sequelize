
import { Router } from 'express'
import { addUsuario, findAll, findByEmail, findById, deleteUsuario, updateUsuario } from "../controllers/usuarios.controllers.js"
const router = Router()

//RUTA CONSULTAR TODOS LOS USUARIOS
router.get('/', findAll)

//RUTA CONSULTAR LOS USUARIOS POR ID
router.get('/:id', findById)

//RUTA CONSULTAR USUARIO POR EMAIL
router.get('/email/:email', findByEmail);

//RUTA ELIMINAR
router.delete('/:id', deleteUsuario)

//ACTUALIZAR USUARIO
router.put('/:id',updateUsuario )

//RUTA CREAR USUARIO
router.post('/', addUsuario)





export default router