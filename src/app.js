
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { create } from "express-handlebars";

import usuariosRoutes from "./routes/usuarios.routes.js"
import viewRoutes from "./routes/views.routes.js"


import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const hbs = create({
    partialsDir: [path.resolve(__dirname, "./views/partials/")],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

//MIDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));


//ENDPOINTS
app.use("/api/v1/usuarios", usuariosRoutes)

//RUTAS DE VISTAS
app.use("/", viewRoutes);

app.all("*", (req, res) => {
    res.status(404).send("<h1 style= 'text-align:center'> Ruta no existe </>")
})



export default app;