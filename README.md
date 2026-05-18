# Evaluador de Requisitos Académicos (Kárdex) como API REST

Este proyecto es un servicio web que funciona como un **motor de inferencia lógica declarativa**. Su objetivo es evaluar de forma automática si un estudiante cumple con los requisitos académicos, créditos mínimos y seriaciones necesarias para cursar una materia específica, procesando un kárdex mediante una API REST en Node.js con Express y Tau Prolog.

## 🚀 Instalación Local

Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu equipo.

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/evaluador-academicos-prolog.git](https://github.com/tu-usuario/evaluador-academicos-prolog.git)
   cd evaluador-academicos-prologre

2. Entrar a la carpeta del proyecto desde la terminal
3. Ejecutar comando npm install
4. Ejecutar comando npm start
5. Ejemplo de curl para ejecutar:
curl -X POST http://localhost:3000/query \\
     -H "Content-Type: application/json" \\
     -d '{"query": "penalty_applicable(contract1)."}'
