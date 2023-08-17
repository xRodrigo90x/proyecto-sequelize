
import Usuarios from "../models/Usuario.models.js"


//CONSULTAR TODO LOS USUARIOS
export const findAll = async (req, res) => {
    try {
        let usuarios = await Usuarios.findAll({
            attributes: ["id", "nombre", "apellido", "email"]
        })
        res.json({ code: 200, message: "OK", data: usuarios })
    } catch (error) {
        res.status(500).json({ code: 500, message: "Error al buscar usuario." })
    }
};


//CREAR USUARIO
export const addUsuario = async (req, res) => {
    try {
        let { nombre, apellido, email } = req.body;

        let nuevoUsuarios = await Usuarios.create({
            nombre,
            apellido,
            email
        })
        
        res.status(201).json({ code: 201, message: "Usuario creado con exito.", data: nuevoUsuarios })
    } catch (error) {
        res.status(500).json({ code: 500, message: "Error al crear el nuevo usuario." })
    }
};


//FILTRAR POR ID 
export const findById = async (req, res) => {
    let id = Number(req.params.id);
    try {
        if (isNaN(id)) {
            return res
                .status(400)
                .json({ code: 400, message: "Debe enviar un id númerico." });
        }
        let usuario = await Usuarios.findByPk(id, {
            // attributes: ["id", "nombre", "apellido", "email", "imagen"],
            // include: [
            //     {
            //         model: Direccion,
            //         as: "direccion",
            //         attributes: { exclude: ["usuarioId"] },
            //     },
            // ],
        });
        if (!usuario) {
            return res.status(400).json({
                code: 400,
                message: "No existe un usuario registrado con el id: " + id,
            });
        }

        res.json({ code: 200, message: "ok", data: usuario });
    } catch (error) {
        console.log("Error findById usuarios", error);
        res.status(500).json({
            code: 500,
            message: "Error al obtener el usuario con id: " + id,
        });
    }
};

//FILTRAR POR EMAIL
export const findByEmail = async (req, res) => {
    let email = req.params.email;
    try {
        let usuario = await Usuarios.findOne({ where: { email } });
        if (!usuario) {
            return res
                .status(400)
                .json({
                    code: 400,
                    message: "No existe un usuario registrado con el email: " + email,
                });
        }
        res.json({ code: 200, message: "ok", data: usuario });
    } catch (error) {
        console.log("Error findByEmail usuarios", error);
        res.status(500).json({
            code: 500,
            message: "Error al obtener los datos del usuario con email: ." + email,
        });
    }
};

//BORAR USUARIO
    export const deleteUsuario = async (req, res) => {
        let id = Number(req.params.id);
        try {
            
            if (isNaN(id)) {
                return res
                    .status(400)
                    .json({ code: 400, message: "Debe enviar un id númerico." });
            }
            
            let usuario = await Usuarios.findByPk(id, {
                attributes: ["id", "nombre", "apellido", "email"],
            });
            if (!usuario) {
                return res.status(400).json({
                    code: 400,
                    message: "El usuario que intenta eliminar no existe, id: " + id,
                });
            }
    
            //ELIMINA EL USUARIO SI ES QUE EXISTE.
            await usuario.destroy();
            res.json({ code: 200, message: `Usuario con id: ${id} eliminado con éxito.` });
            
        } catch (error) {
            console.log("Error deleteUsuario", error);
            console.log(Usuarios)
            res.status(500).json({
                code: 500,
                message: "Error al eliminar el usuario con id: " + id,
            });
            
        }
    };


    //ACTUALIZAR USUARIO
    export const updateUsuario = async (req, res) => {
        let id = Number(req.params.id);
        try {
            if (isNaN(id)) {
                return res
                    .status(400)
                    .json({ code: 400, message: "Debe enviar un id númerico." });
            }
     
            let usuario = await Usuarios.findByPk(id, {
                attributes: ["id", "nombre", "apellido", "email"],
            });
     
             if (!usuario) {
                 return res.status(400).json({
                     code: 400,
                     message:
                         "El usuario que intenta actualizar no existe, id: " + id,
                 });
            }
           
            usuario.update(req.body);
     
            res.status(201).json({ code: 201, message: "ok", data: usuario });
        } catch (error) {
            console.log("Error updateUsuario", error);
            res.status(500).json({
                code: 500,
                message:
                    "Error al intentar actualizar el usuario",
            });
        }
    };