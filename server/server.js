import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());  // Permite solicitudes CORS desde cualquier origen
app.use(json());   // Permite que Express maneje solicitudes JSON

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });  // Respuesta con la lista de usuarios
});

app.listen(5000, () => { 
    console.log("Server started on port 5000");
});
