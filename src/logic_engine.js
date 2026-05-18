const pl = require('tau-prolog');
const fs = require('fs');
const path = require('path');

function consultarProlog(consultaCliente) {
    return new Promise((resolve, reject) => {
        const session = pl.create();
        const kbPath = path.join(__dirname, 'knowledge_base.pl');
        
        // Operación de I/O asíncrona para leer el archivo .pl
        fs.readFile(kbPath, 'utf8', (err, kbSource) => {
            if (err) return reject(new Error("Error al abrir base de conocimiento: " + err.message));

            // 1. Cargar las reglas y hechos en la sesión
            session.consult(kbSource, {
                success: function() {
                    // 2. Cargar la consulta lógica mandada por el cliente
                    session.query(consultaCliente, {
                        success: function() {
                            // 3. Ejecutar el mecanismo de inferencia (resolución)
                            session.answer({
                                success: function(answer) {
                                    // Retorna el resultado formateado (ej: true)
                                    resolve(session.format_answer(answer));
                                },
                                fail: function() {
                                    resolve("false"); // La meta no se unifica (falso)
                                },
                                error: function(err) {
                                    reject(new Error("Error en la inferencia lógica: " + err));
                                }
                            });
                        },
                        error: function(err) {
                            reject(new Error("Error de formato en la consulta Prolog: " + err));
                        }
                    });
                },
                error: function(err) {
                    reject(new Error("Error de sintaxis en el archivo .pl: " + err));
                }
            });
        });
    });
}

module.exports = { consultarProlog };