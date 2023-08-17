
export const viewHomeController = (req, res) => {
    res.render("home", {
        homeView: true
    })
}

export const viewsUsuariosController = (req, res) => {
    res.render("usuarios", {
        usuariosViews: true
    })
}