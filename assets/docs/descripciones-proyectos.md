# Descripciones de Proyectos

Este documento consolida descripciones por stack en dos formatos:

- Version tecnica (para perfiles de desarrollo)
- Version corta (para LinkedIn / CV / reclutador no tecnico)

Nota: En proyectos con "solo fotos", la descripcion se mantiene general para no inventar detalles no confirmados.

## React

Cicomp

### Clima

- Demo: https://wheatherappr.netlify.app/
- Repo: https://github.com/rica-2000/WheatherApp

Version tecnica:
Aplicacion web construida con React para consulta meteorologica en tiempo real mediante consumo de API externa. Implementa manejo de estado con hooks, validacion de entradas, control de errores en peticiones HTTP y renderizado dinamico de temperatura, condiciones y metricas climatica por ciudad.

Version corta:
App de clima en React que consulta una API externa y muestra pronosticos por ciudad con una interfaz clara y rapida.

### Buscador de Peliculas

- Demo: https://buscadorpeliculastmdb.netlify.app/
- Repo: https://github.com/rica-2000/Buscador-Peliculas

Version tecnica:
Aplicacion SPA en React para busqueda y exploracion de catalogo cinematografico usando la API de TMDB. Incluye filtros de consulta, consumo de endpoints REST, manejo de carga/errores y composicion de componentes reutilizables para resultados, detalle y navegacion de contenido.

Version corta:
Buscador de peliculas en React conectado a TMDB, con filtros y visualizacion de resultados de forma dinamica.

### Carrito

- Demo: https://comprasdecarrito.netlify.app/
- Repo: https://github.com/rica-2000/Carrito

Version tecnica:
Aplicacion de comercio basico en React enfocada en la logica de carrito de compras. Permite agregar, actualizar y eliminar productos, calcular totales y mantener consistencia del estado en la UI, con una arquitectura de componentes orientada a escalabilidad.

Version corta:
Proyecto de carrito de compras en React con gestion de productos, cantidades y total de compra en tiempo real.

## Angular (Arquitectura MEAN)

### Compras (Arquitectura MEAN)

- Demo: https://escalables-proyect.vercel.app/
- Repo: https://github.com/rica-2000/Escalables-Proyect

Version tecnica detallada:
Plataforma de e-commerce desarrollada con arquitectura MEAN, separando frontend en Angular y backend REST en Node.js/Express con MongoDB. Implementa autenticacion con JWT, autorizacion por roles (cliente/admin) y proteccion de rutas tanto en API como en la interfaz. Incluye modulos CRUD para productos, categorias, usuarios y clientes; ademas de flujo completo de compra: catalogo con filtros/busqueda/paginacion, carrito persistente en localStorage, checkout con validaciones reactivas, creacion de ordenes, consulta de historial y detalle de pedidos. En administracion incorpora dashboard operativo, gestion de usuarios (estado y rol), control de ordenes por estatus y mantenimiento de inventario con actualizacion de stock ligada al ciclo de vida de las ordenes. La solucion prioriza modularidad, validacion de datos, consistencia cliente-servidor y escalabilidad funcional.

Version general (reclutadores no tecnicos):
Sistema web de compras que permite registrar usuarios, administrar productos y procesar pedidos de principio a fin. Los clientes pueden explorar el catalogo, usar carrito, finalizar compras y revisar su historial; mientras que el administrador controla inventario, categorias, usuarios y estado de ordenes desde un panel central. El proyecto esta disenado para mantener orden operativo, reducir tareas manuales y facilitar el crecimiento del negocio.

## Next.js / Full-stack

### CiComp Overflow

- Demo: enlace por confirmar
- Repo: enlace por confirmar

Version tecnica detallada:
Plataforma web colaborativa inspirada en Stack Overflow, desarrollada con Next.js (App Router) y TypeScript bajo una arquitectura por capas (Controller/Service/DAO) sobre PostgreSQL. Implementa autenticacion con JWT (cookie/header), control de acceso por roles (USER/ADMIN) y proteccion de rutas/API mediante middleware. Incluye flujo completo de contenido: creacion/edicion/eliminacion logica de publicaciones, comentarios y sistema de votacion (upvote/downvote) para posts y comentarios con comportamiento toggle y soft delete. Integra catalogo de etiquetas academicas para clasificacion, busqueda/filtrado con paginacion, notificaciones por interaccion (respuestas, likes, ediciones y eliminaciones), y modulo de reportes/solicitudes para moderacion. En administracion incorpora metricas operativas (actividad mensual) y generacion de reporte en PDF. A nivel de infraestructura utiliza Redis para cache, Cloudinary para imagenes, Nginx como proxy con rate limiting, migraciones SQL automatizadas y despliegue reproducible con Docker Compose (Next.js + PostgreSQL + Redis + proxy), ademas de suite de pruebas con Jest para backend y frontend.

Version general (reclutadores no tecnicos):
Comunidad digital para estudiantes de computacion donde pueden publicar dudas, comentar, votar aportes utiles y organizar temas por etiquetas. La plataforma incluye perfiles, notificaciones y un panel administrativo para revisar reportes, moderar contenido y dar seguimiento a la actividad general. Esta disenada para centralizar el apoyo academico, acelerar la resolucion de dudas y fortalecer la colaboracion entre estudiantes.

Version corta:
Foro academico full-stack para comunidad universitaria: publicaciones, comentarios, votos, etiquetas, notificaciones y moderacion administrativa en una sola plataforma.

## Laravel

### Biblioteca-CRUD

- Demo: https://biblioteca-crud-production.up.railway.app/
- Repo: https://github.com/rica-2000/Biblioteca-CRUD

Version tecnica detallada:
Sistema de biblioteca desarrollado en Laravel para gestion de inventario bibliografico y circulacion. Incluye administracion de libros y usuarios, asi como registro de prestamos y devoluciones con reglas basicas de negocio. Implementa operaciones CRUD completas y pantallas de consulta para mantener control de disponibilidad y seguimiento de prestamos.

Version general (reclutadores no tecnicos):
Sistema de biblioteca para controlar libros, usuarios y prestamos/devoluciones. Permite tener mejor orden del material y seguimiento de quien tiene cada libro.

### Sistema de Captura

- Demo: https://sistema-de-captura-production.up.railway.app/
- Repo: https://github.com/rica-2000/Sistema-de-Captura

Version tecnica detallada:
Plataforma academica en Laravel + componentes de interfaz dinamica para gestion de calificaciones con enfoque multirol (coordinador, docente y alumno). Permite administrar materias, asignaciones e inscripciones, y soporta captura/consulta de notas con visibilidad diferenciada por perfil. El diseno privilegia control de acceso, consistencia de datos academicos y flujo administrativo escolar.

Version general (reclutadores no tecnicos):
Aplicacion escolar para registrar y consultar calificaciones segun el tipo de usuario (coordinacion, profesorado y alumnado). Mejora la organizacion academica y evita procesos manuales.

### Es-Cine

- Demo: https://es-cine-production.up.railway.app/
- Repo: https://github.com/rica-2000/Es-Cine

Version tecnica detallada:
Sistema de administracion para operacion de cines construido en Laravel, orientado a entidades relacionadas: sucursales, salas, peliculas y funciones. Implementa flujos CRUD por modulo, validacion de formularios y rutas segmentadas para administracion. Incluye consultas y reportes operativos para control de cartelera y organizacion de funciones por sala/sucursal.

Version general (reclutadores no tecnicos):
Sistema para administrar cines: sucursales, salas, peliculas y horarios de funciones. Facilita la operacion diaria y mejora el control interno de la cartelera.

### Sistema de Citas Medicas y Control de Pacientes

- Demo: https://sistema-de-citas-m-dicas-y-control-de-pacientes-production.up.railway.app/
- Repo: https://github.com/rica-2000/Sistema-de-Citas-M-dicas-y-Control-de-Pacientes

Version tecnica detallada:
Aplicacion web full-stack en Laravel para gestion clinica con modulos de doctores, pacientes, citas e historiales medicos. Implementa autenticacion y autorizacion por roles, operaciones CRUD completas y trazabilidad de atencion por paciente. Incluye generacion de documentos PDF para consulta/descarga de historial y una capa de API protegida con tokens (Sanctum), ademas de integracion con servicios externos de salud para enriquecer datos clinicos.

Version general (reclutadores no tecnicos):
Plataforma para clinicas que organiza citas, pacientes y doctores en un solo sistema. Ayuda a reducir tiempos administrativos, mantener historial medico ordenado y generar reportes de atencion de forma rapida.

## Flutter

### PlanetFutbol

- Evidencia: solo fotos
- Repo: https://github.com/AlexisReynaga/PlanetFutbol

Version tecnica detallada:
Aplicacion movil desarrollada en Flutter (Dart) para consumo y visualizacion de informacion futbolistica en multiples modulos funcionales. Integra autenticacion de usuarios con Firebase Auth (registro, inicio/cierre de sesion y persistencia de sesion) y gestion de perfil/favoritos con Cloud Firestore. Implementa consumo de APIs externas para busqueda de equipos y ligas, consulta de tablas de posiciones por temporada, estadisticas de equipo, calendario de partidos por fecha y noticias deportivas, con manejo de estados de carga, errores y renderizado dinamico de resultados. La solucion esta organizada en capas de pantallas, servicios, modelos y widgets reutilizables, priorizando una navegacion clara por secciones (inicio, equipos, ligas, noticias y perfil), personalizacion del usuario y experiencia consistente en interfaz movil.

Version general (reclutadores no tecnicos):
App movil de futbol que centraliza en un solo lugar lo mas importante para el usuario: buscar equipos y ligas, revisar tablas y estadisticas, consultar calendario de partidos, leer noticias y guardar favoritos. Ademas, permite crear cuenta y personalizar perfil, mejorando la experiencia de seguimiento deportivo de forma simple y ordenada.

### Chatbot

- Evidencia: solo fotos
- Repo: https://github.com/SirAxLord/Chatbot

Version tecnica detallada:
Aplicacion conversacional en espanol construida con Rasa y Python, disenada para soporte academico con enfoque hibrido NLU + LLM + RAG. Implementa reconocimiento de intenciones, politicas de fallback y acciones personalizadas que enriquecen cada respuesta con historial reciente, memoria por usuario y contexto recuperado desde una base semantica. El componente RAG utiliza embeddings con sentence-transformers e indexacion FAISS para consultar informacion del plan de estudios y devolver contexto relevante al modelo generativo (Ollama), mejorando precision y utilidad de las respuestas. La arquitectura incluye persistencia del estado conversacional en Redis, memoria de largo plazo por usuario y un frontend web ligero conectado al webhook REST de Rasa. Todo el sistema se despliega con Docker Compose, integrando Rasa, servidor de acciones, servicio RAG, modelo local y proxy web en un entorno reproducible.

Version general (reclutadores no tecnicos):
Chatbot academico que ayuda a estudiantes a resolver dudas sobre materias y decisiones de estudio en lenguaje natural. El sistema combina comprension de intencion, busqueda de informacion relevante y respuestas claras en una sola experiencia web. Tambien conserva contexto basico de la conversacion para ofrecer una atencion mas util y personalizada, reduciendo tiempos de consulta y mejorando la orientacion academica.

Version corta:
Chatbot academico con IA que entiende preguntas en espanol, consulta contexto del plan de estudios y responde con recomendaciones claras para apoyar al estudiante.

### Bubble Up

- Demo: https://mikel-barajas.itch.io/bubble-up
- Repo: https://github.com/MikelBarajas38/Bubble-Up-GGJ

Version tecnica detallada:
Videojuego 2D desarrollado en Godot (GDScript) durante una Game Jam, centrado en supervivencia arcade bajo una mecanica de gestion de burbuja. El controlador del jugador integra movimiento horizontal con aceleracion/friccion, salto con coyote time y doble salto condicionado por recurso: cada accion consume o altera el estado de la burbuja. El sistema principal maneja niveles de burbuja (1-3) que impactan colision, feedback visual y HUD en tiempo real; al recibir dano se pierde burbuja con ventana breve de invulnerabilidad, mientras que exceder el limite de recoleccion o quedarse sin burbuja desencadena derrota. El juego implementa pickups, zonas de dano, transiciones entre niveles con fade, progresion global por escenas (menu, niveles, pausa, game over y pantalla de victoria), y enemigos con patrones diferenciados (patrulla horizontal, amenaza por ciclos de expansion/contraccion y ataque emergente temporizado). La arquitectura modular por escenas y scripts facilita iteracion rapida y ajuste de dificultad por nivel.

Version general (reclutadores no tecnicos):
Juego arcade 2D donde el jugador debe avanzar por escenarios submarinos controlando su burbuja para sobrevivir. Combina reflejos, administracion de riesgo y esquiva de enemigos con comportamientos distintos, manteniendo un ritmo dinamico en partidas cortas. Incluye progresion por niveles, indicadores visuales claros, pantallas de pausa/derrota/victoria y una experiencia pensada para ser desafiante, rapida y rejugable.

## Recomendacion rapida de uso
