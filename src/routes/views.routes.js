
import { Router } from 'express'
import { viewHomeController, viewsUsuariosController, viewsDetailUsuariosController } from "../controllers/views.controllers.js"
const router = Router()

//RUTA CONSULTAR TODOS LOS USUARIOS
router.get(["/", "/home"], viewHomeController)
router.get(["/usuarios"], viewsUsuariosController)
router.get(["/detalles/usuario/:id"], viewsDetailUsuariosController)






export default router