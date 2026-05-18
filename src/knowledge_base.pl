% =========================================================================
% HECHOS: Kárdex Virtual de Estudiantes (Asignaturas Aprobadas y Créditos)
% =========================================================================

% Historial del alumno 'juan'
aprobada(juan, matematicas_discretas).
aprobada(juan, estructuras_datos).
creditos_acumulados(juan, 120).

% Historial del alumno 'pedro'
aprobada(pedro, matematicas_discretas).
% pedro no ha cursado estructuras_datos
creditos_acumulados(pedro, 45).


% =========================================================================
% REGLAS: Condicionales Curriculares (Seriación)
% =========================================================================

% Regla para Compiladores: Requiere Estructuras de Datos y mínimo 100 créditos
puede_cursar(Alumno, compiladores) :-
    aprobada(Alumno, estructuras_datos),
    creditos_acumulados(Alumno, Creditos),
    Creditos >= 100.

% Regla para Redes: Requiere Matemáticas Discretas y mínimo 60 créditos
puede_cursar(Alumno, redes) :-
    aprobada(Alumno, matematicas_discretas),
    creditos_acumulados(Alumno, Creditos),
    Creditos >= 60.