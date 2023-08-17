
import express from "express";
import cors from "cors";
import morgan from "morgan";
import usuariosRoutes from "./routes/usuarios.routes.js"

const app = express();

//MIDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));


//ENDPOINTS
app.use("/api/v1/usuarios", usuariosRoutes)

app.all("*", (req, res) => {
    res.status(404).send("<h1 style= 'text-align:center'> Ruta no existe </>")
})



export default app;