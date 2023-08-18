
import Usuario from "../models/Usuario.models.js"

export const viewHomeController = (req, res) => {
    res.render("home", {
        homeView: true
    })
}

export const viewsUsuariosController = async (req, res) => {
    try {
        let usuarios = await Usuario.findAll({
            raw: true,
            order: [["id", "ASC"]]
        });

        res.render("usuarios", {
            usuariosViews: true,
            usuarios
        })
    } catch (error) {
        res.render("usuarios", {
            usuariosViews: true,
            error: true
        });
    };
};

export const viewsDetailUsuariosController = async (req, res) => {
    try {
        let id = req.params.id
        let usuario = await Usuario.findByPk(id, {
            raw: true
        });

        res.render("detailUsuario", {
            usuario
        })
    } catch (error) {
        res.render("detailUsuario", {
            error: true
        })
    }
}




