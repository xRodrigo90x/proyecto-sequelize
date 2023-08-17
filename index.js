
import app from "./src/app.js"
import db from "./src/database/database.js"

//MODELOS
import "./src/models/Usuario.models.js"

const PORT = 3000

const main = async () => {
    try {
        await db.authenticate();
        await db.sync({ force: false, alter: true })
        app.listen(PORT, () => {
            console.log("Servidor escuchan en puerto: " + PORT)
        })
    } catch (error) {
        console.log("Ha ocurrido un error: ", error)
    }
}

main();