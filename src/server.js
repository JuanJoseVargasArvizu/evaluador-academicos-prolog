const express = require('express');
const { consultarProlog } = require('./logic_engine');

const app = express();
app.use(express.json()); // Middleware para el parseo funcional de JSON

// Endpoint requerido: /query
app.post('/query', async (req, res) => {
    const { query } = req.body;

    // Validación y sanitización (Programación Funcional)
    if (!query || typeof query !== 'string') {
        return res.status(400).json({ success: false, error: "La consulta no puede estar vacía." });
    }

    try {
        // Llamada asíncrona no bloqueante
        const resultado = await consultarProlog(query);
        
        return res.json({
            success: true,
            result: resultado
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor HTTP corriendo en http://localhost:${PORT}`);
});