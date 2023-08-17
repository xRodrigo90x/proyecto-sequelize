
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
            order:[["id", "ASC"]]
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