
import { Router } from 'express'
import { viewHomeController, viewsUsuariosController } from "../controllers/views.controllers.js"
const router = Router()

//RUTA CONSULTAR TODOS LOS USUARIOS
router.get(["/", "/home"], viewHomeController)
router.get(["/usuarios"], viewsUsuariosController)






export default router