# LISTA PRINCIPAL DE TRABAJO — UI/UX

> Esta es la lista que iremos tachando. Los detalles y explicaciones se desarrollan debajo de cada punto cuando lleguemos a él.

- [ ] 1. Entender qué es UI (User Interface)
- [ ] 2. Entender qué es UX (User Experience)
- [ ] 3. Definir qué necesitamos de la app
- [ ] 4. Definir el flujo básico del remitente
- [ ] 5. Decidir qué tecnología móvil nos conviene
  - Kotlin / Jetpack Compose
  - Flutter
  - React Native / Expo
- [ ] 6. Buscar plantillas
- [ ] 7. Ver demos de las plantillas
- [ ] 8. Comparar diseño/UX
- [ ] 9. Comparar tecnología/arquitectura
- [ ] 10. Revisar licencia
- [ ] 11. Revisar compatibilidad Android
- [ ] 12. Revisar seguridad de la plantilla
- [ ] 13. Revisar rendimiento
- [ ] 14. Elegir 1–3 finalistas
- [ ] 15. Elegir la plantilla/base definitiva
- [ ] 16. Descargar/clonar
- [ ] 17. Ejecutar la plantilla sin modificarla
- [ ] 18. Medir rendimiento inicial
- [ ] 19. Adaptar la UI a DineroAtuCuenta
- [ ] 20. Diseñar las pantallas definitivas
- [ ] 21. Implementar navegación
- [ ] 22. Implementar formularios y estados
- [ ] 23. Probar distintos Android
- [ ] 24. Optimizar rendimiento
- [ ] 25. Revisión final de UI/UX

## Áreas futuras

- [ ] Backend
- [ ] Base de datos
- [ ] Motor financiero
- [ ] Seguridad
- [ ] Integraciones
- [ ] Pruebas
- [ ] Performance y monitorización
- [ ] Web
- [ ] Producción y operación

---


# 1. UI/UX Y APLICACIÓN MÓVIL — FASE ACTUAL

**Objetivo de esta fase:** definir, investigar y construir progresivamente la interfaz y experiencia de la aplicación Android de DineroAtuCuenta.

**Regla pedagógica permanente del proyecto:**

> **Cada concepto técnico nuevo debe ser explicado antes de utilizarlo.**

No se dará por supuesto que el usuario conoce términos técnicos. Cuando aparezca una palabra como `UI`, `UX`, `State`, `API`, `Repository`, `Dependency Injection`, `JWT`, `Webhook`, etc., se explicará:

1. qué significa;
2. qué problema resuelve;
3. por qué existe;
4. cómo funciona a nivel conceptual;
5. cómo se relaciona con DineroAtuCuenta;
6. cuándo lo utilizaremos;
7. qué alternativas existen cuando sea relevante.

El objetivo no es solamente construir la aplicación: **el usuario debe terminar entendiendo la arquitectura y el vocabulario técnico del proyecto.**

---

## 1.1. Primer concepto — UI (User Interface)

### ¿Qué significa UI?

**UI = User Interface = Interfaz de Usuario.**

Es **todo aquello mediante lo cual el usuario ve e interactúa con la aplicación**.

Ejemplos:

- botones;
- textos;
- campos para introducir datos;
- menús;
- iconos;
- imágenes;
- tarjetas;
- listas;
- colores;
- tipografías;
- barras de navegación;
- pantallas;
- mensajes;
- indicadores de carga;
- ventanas;
- animaciones;
- elementos táctiles.

Por ejemplo, en DineroAtuCuenta podríamos tener:

```text
┌─────────────────────────────┐
│       DineroAtuCuenta       │
│                             │
│  ¿Cuánto quieres enviar?    │
│                             │
│       $ 500.00              │
│                             │
│  Recibirá: Bs 3.480         │
│  Comisión: $ 10             │
│                             │
│     [ CONTINUAR ]           │
│                             │
└─────────────────────────────┘
```

Todo lo que vemos y tocamos en esa pantalla forma parte de la **UI**.

### ¿Qué problema resuelve la UI?

La aplicación tiene que transformar operaciones internas complejas en algo que una persona pueda utilizar.

El sistema puede tener internamente:

```text
500 USD
+
tipo de cambio
+
comisión
+
destinatario
+
estado de transferencia
```

Pero el usuario no debería tener que entender cómo funciona el código.

La UI convierte esa información en algo comprensible:

```text
Envías:       $500
Comisión:     $10
Recibirá:     Bs 3.480

[ CONTINUAR ]
```

### Conceptos que aparecerán dentro de UI

Durante esta fase aprenderemos progresivamente:

- **Screen** → pantalla.
- **Component** → componente reutilizable de interfaz.
- **Button** → botón.
- **Input / Text Field** → campo donde el usuario introduce información.
- **Form** → conjunto estructurado de campos para introducir datos.
- **Card** → bloque visual que agrupa información.
- **Modal** → ventana superpuesta.
- **Navigation** → navegación entre pantallas.
- **Layout** → organización espacial de los elementos.
- **Typography** → sistema de textos y tipografías.
- **Theme** → configuración visual general.
- **Design System** → reglas y componentes que mantienen consistente la interfaz.
- **Responsive UI** → interfaz que se adapta a diferentes tamaños.
- **Accessibility** → diseño que permite utilizar la aplicación a personas con diferentes necesidades.

No es necesario memorizar estos términos ahora. Los aprenderemos cuando aparezcan en el trabajo práctico.

---

## 1.2. Segundo concepto — UX (User Experience)

**UX = User Experience = Experiencia de Usuario.**

La UI responde principalmente:

> **¿Qué ve y toca el usuario?**

La UX pregunta:

> **¿Qué tan fácil, claro, seguro y agradable es realizar una tarea?**

Ejemplo:

Una UI puede tener un botón:

```text
[ ENVIAR DINERO ]
```

Pero la UX se preocupa por qué sucede alrededor:

```text
Usuario
  ↓
¿Cuánto quiere enviar?
  ↓
¿A quién?
  ↓
¿Cuánto recibirá?
  ↓
¿Cuánto cuesta?
  ↓
¿Qué debe hacer ahora?
  ↓
¿El dinero fue recibido?
  ↓
¿Dónde está su transferencia?
```

Una aplicación puede tener una UI bonita y una UX terrible.

Por ejemplo:

```text
UI bonita
+
botones bonitos
+
colores bonitos

pero...

el usuario no entiende cuánto
dinero recibirá.
```

Eso sería un problema de **UX**, aunque visualmente la aplicación sea atractiva.

### En DineroAtuCuenta

La UX debe reducir la incertidumbre del usuario.

El usuario debe poder entender:

```text
1. cuánto envía;
2. cuánto paga;
3. cuánto recibe el destinatario;
4. qué tiene que hacer;
5. qué está pasando con su dinero;
6. cuándo terminó la operación.
```

---

## 1.3. Diferencia rápida entre UI y UX

Una forma sencilla de recordarlo:

```text
UI
↓
"¿Cómo se ve y cómo interactúo?"

UX
↓
"¿Qué tan fácil y claro es conseguir lo que quiero?"
```

Ejemplo:

```text
UI:
[ ENVIAR $500 ]

UX:
¿El usuario sabe qué ocurrirá
cuando pulse ese botón?
```

---

## 1.4. Primer objetivo práctico

Antes de programar ninguna pantalla:

- [ ] Entender qué es UI.
- [ ] Entender qué es UX.
- [ ] Identificar UI en las plantillas que investiguemos.
- [ ] Identificar decisiones de UX en las plantillas.
- [ ] Definir el flujo principal de DineroAtuCuenta.
- [ ] Identificar las pantallas necesarias.
- [ ] Identificar los estados de cada pantalla.
- [ ] Comparar varias soluciones visuales.

---

## 1.5. Regla de vocabulario técnico

A partir de este punto, cuando aparezca un término técnico nuevo se documentará en el plan o se explicará durante la conversación.

Ejemplo:

> **UI (User Interface)** → Interfaz de Usuario. Es la parte de la aplicación con la que el usuario ve e interactúa.

No se utilizarán términos técnicos solamente para "sonar profesional".

**Si una palabra técnica aparece, debemos saber qué significa y qué problema resuelve.**

---

# DineroAtuCuenta — Plan maestro del proyecto

> **Estado del documento:** planificación inicial.  
> **Regla principal:** no modificar código ni implementar fixes/funcionalidades hasta que exista una decisión explícita y el plan correspondiente esté documentado.

## 0. ¿Por qué estamos creando este documento?

Este archivo será el **punto central de planificación y seguimiento técnico** del proyecto de una aplicación de transferencias internacionales con destino a Bolivia.

Aunque la estructura original que usamos para otros proyectos está pensada para bugs, aquí el proyecto todavía está en una etapa anterior: **primero debemos tomar decisiones de arquitectura, plataforma, producto, seguridad y operación antes de programar**.

Por eso este documento tendrá componentes equivalentes a un registro de problemas, pero adaptados a un proyecto nuevo:

- **Descripción / trouble:** qué problema, necesidad o decisión estamos intentando resolver.
- **Estado:** pendiente, investigando, decidido, bloqueado, descartado, etc.
- **Causa / contexto confirmado:** información comprobada en código, documentación, pruebas o fuentes confiables.
- **Hipótesis:** posibilidades que todavía no están confirmadas.
- **Decisión:** qué elegimos y por qué.
- **Fix / solución propuesta:** cómo se resolvería cuando llegue el momento de implementarlo.
- **Sugerencias:** mejoras o alternativas que aparezcan durante la investigación.
- **Archivos/componentes afectados:** qué habrá que modificar o revisar.
- **Riesgos de regresión:** qué otras partes podrían romperse o quedar incompatibles.
- **Pruebas necesarias:** cómo vamos a comprobar la decisión o solución.
- **Performance:** mediciones de rendimiento, memoria, CPU, almacenamiento, red y otros recursos cuando corresponda.
- **Preguntas pendientes:** decisiones que todavía requieren información o una respuesta del propietario del proyecto.

La intención es evitar el problema de **empezar a descargar, instalar o programar cosas sin haber decidido primero qué estamos construyendo**.

---

# 1. Resumen / índice

**Estado general:** 🟡 Investigación y definición del proyecto.

Actualmente tenemos **0 bugs reportados**, porque todavía no estamos depurando una aplicación propia.

Tenemos **decisiones/preguntas de proyecto pendientes**:

1. Plataforma móvil: Android nativo, Flutter o React Native/Expo.
2. Compatibilidad: qué versiones/dispositivos Android debemos soportar.
3. Plantilla visual: encontrar una plantilla antes de descargar/instalar proyectos.
4. Licencia: definir qué licencias son aceptables para uso comercial.
5. Alcance inicial del producto.
6. Flujo completo de una transferencia internacional hacia Bolivia.
7. Proveedores de pago y recepción.
8. KYC/AML y requisitos regulatorios.
9. Seguridad de usuarios y transacciones.
10. Arquitectura del backend.
11. Base de datos.
12. Sistema de cotización USD/BOB.
13. Comisiones.
14. Estados y trazabilidad de las transferencias.
15. Panel administrativo.
16. Estrategia futura para web.
17. Estrategia de pruebas.
18. Estrategia de medición de rendimiento y consumo de recursos.

---

# 2. Objetivo del proyecto

Crear una aplicación móvil para **transferencias internacionales con destino a Bolivia**.

## Primera etapa

La prioridad inicial será:

> **Crear una aplicación Android funcional desde el punto de vista visual y de experiencia de usuario, utilizando una plantilla/base visual adecuada.**

En esta etapa **NO se construirá todavía el backend financiero**.

El objetivo es primero definir y validar:

- apariencia;
- navegación;
- pantallas;
- experiencia de usuario;
- flujo de envío;
- flujo de recepción;
- historial;
- estados;
- perfil;
- configuración;
- posibles pantallas de verificación;
- posibles pantallas administrativas si corresponde.

## Segunda etapa

Una vez definida la aplicación móvil:

> **Diseñar y construir el backend que soporte realmente los flujos de transferencia.**

## Tercera etapa — posible

Posteriormente evaluar:

> **Crear una versión web utilizando el mismo backend y, cuando sea conveniente, reutilizando componentes/lógica.**

La web **no es prioridad ahora**.

---

# 2.1. Identidad del proyecto

**Empresa / marca:** DineroAtuCuenta

El nombre del proyecto pasa a ser **DineroAtuCuenta**. El objetivo de la marca es que su nombre comunique directamente la finalidad del servicio: facilitar que una persona envíe dinero internacionalmente y que el destinatario pueda recibirlo en su cuenta en Bolivia.

La marca no debe confundirse con una plantilla, framework o proveedor financiero. Las plantillas y proveedores serán componentes que evaluaremos para construir DineroAtuCuenta.

---

# 2.2. Modelo operativo inicial confirmado

La primera versión del negocio tendrá un flujo deliberadamente sencillo:

```text
Persona en el exterior
        │
        │ 1. Envía dinero
        ▼
Cuenta Mercado Pago de DineroAtuCuenta
        │
        │ 2. Dinero recibido
        │
        │ 3. Se descuenta la comisión
        ▼
Cuenta del destinatario en Bolivia
```

### Interpretación actual

Inicialmente, el usuario remitente utilizará **Mercado Pago** para transferir el dinero a la cuenta de Mercado Pago de DineroAtuCuenta.

Una vez que DineroAtuCuenta confirme la recepción del dinero, se procesará el envío hacia la cuenta del destinatario en Bolivia, descontando la comisión correspondiente.

### Importante

Este flujo describe el **modelo operativo que el usuario propone para la primera versión**. Todavía NO está confirmado que Mercado Pago permita este uso concreto, especialmente cuando se trata de recibir dinero de terceros con finalidad de remesa y posteriormente transferirlo a beneficiarios en Bolivia.

Por lo tanto, antes de implementar integraciones o diseñar un flujo definitivo de fondos debemos verificar:

- términos de Mercado Pago aplicables al país de operación;
- límites y restricciones;
- posibilidad de recibir transferencias de terceros;
- posibilidad de operar con finalidad comercial/remesas;
- identidad del titular de la cuenta;
- conciliación de pagos;
- comprobantes;
- reversos;
- fraude;
- requisitos regulatorios.

**No debemos asumir que una transferencia personal entre cuentas equivale a una infraestructura legal/comercial de remesas.**

### Estado

🟡 **Modelo inicial definido por el propietario del proyecto; viabilidad operativa/legal pendiente de validación.**

---


# 3.1. Plan operativo detallado — Construcción de la aplicación móvil

Esta sección convierte el plan estratégico en **tareas ejecutables y verificables**. No se debe avanzar automáticamente de una fase a otra: cada fase tendrá un resultado que debemos revisar antes de continuar.

## Fase A — Investigación de mercado y plantillas

### A1. Definir criterios de búsqueda
- [ ] Android nativo / Kotlin + Compose.
- [ ] Flutter.
- [ ] React Native / Expo.
- [ ] No descartar tecnologías previamente.
- [ ] Priorizar teléfonos sobre tablets.
- [ ] Priorizar máxima cobertura Android.
- [ ] UX y tecnología tendrán peso comparable.

### A2. Dónde buscar

La búsqueda inicial se realizará en:
- [ ] GitHub.
- [ ] repositorios oficiales de los proyectos.
- [ ] demos oficiales.
- [ ] documentación oficial.
- [ ] marketplaces oficiales cuando corresponda.
- [ ] Figma/Community cuando el diseño sea publicado allí.
- [ ] resultados web para descubrir proyectos, pero la licencia se verificará en la fuente original.

**Regla:** una página de terceros puede servir para descubrir una plantilla, pero no será suficiente para aprobarla.

### A3. Filtro inicial
Para cada candidata:
- [ ] ¿Es realmente móvil?
- [ ] ¿Qué tecnología utiliza?
- [ ] ¿Tiene demo?
- [ ] ¿La demo corresponde al código disponible?
- [ ] ¿Tiene código fuente?
- [ ] ¿Tiene licencia explícita?
- [ ] ¿La licencia permite el uso comercial previsto?
- [ ] ¿Tiene dependencias externas críticas?
- [ ] ¿Está mantenida?
- [ ] ¿Qué versión mínima de Android soporta?
- [ ] ¿Qué dispositivos podría excluir?
- [ ] ¿Tiene problemas conocidos?

### A4. Seguridad de la fuente
Antes de descargar:
- [ ] Confirmar repositorio oficial.
- [ ] Revisar propietario del repositorio.
- [ ] Revisar actividad y releases.
- [ ] Revisar licencia.
- [ ] Revisar `package.json`, `pubspec.yaml` o configuración equivalente.
- [ ] Revisar dependencias.
- [ ] Buscar secretos accidentalmente publicados.
- [ ] Revisar scripts de instalación.
- [ ] Revisar permisos solicitados por la aplicación.
- [ ] No ejecutar scripts desconocidos sin inspeccionarlos.
- [ ] No introducir credenciales reales.
- [ ] No conectar cuentas financieras reales durante la evaluación.

### A5. Comparación
Crear una tabla de candidatas con:
- UX;
- tecnología;
- arquitectura;
- seguridad base;
- compatibilidad Android;
- rendimiento potencial;
- licencia;
- mantenimiento;
- dependencias;
- facilidad de modificación;
- posibilidad de web;
- pantallas reutilizables;
- riesgos.

### A6. Selección
- [ ] Elegir 1–3 finalistas.
- [ ] Documentar por qué cada una llegó a la final.
- [ ] Elegir una candidata principal.
- [ ] Mantener una alternativa técnica.

**Resultado de la fase:** una candidata elegida sin necesidad de haber instalado todas las demás.

---

## Fase B — Preparación segura del entorno

Solo comienza después de seleccionar la candidata.

### B1. Aislamiento
- [ ] Crear carpeta dentro de `~/Documentos/Fintech/repos/`.
- [ ] Crear entorno específico si la tecnología lo necesita.
- [ ] Evitar instalaciones globales innecesarias.
- [ ] Registrar versiones de Node/Java/Kotlin/Flutter/Dart/Gradle/Android SDK según el stack.
- [ ] Documentar requisitos del proyecto.

### B2. Estado inicial
- [ ] Clonar repositorio.
- [ ] Registrar commit inicial.
- [ ] No modificar código.
- [ ] Revisar `.gitignore`.
- [ ] Revisar archivos de configuración.
- [ ] Revisar scripts de instalación.
- [ ] Revisar dependencias antes de ejecutar.
- [ ] Revisar permisos Android.

### B3. Instalación
- [ ] Instalar dependencias.
- [ ] Registrar errores.
- [ ] Medir tiempo de instalación.
- [ ] Registrar tamaño ocupado.
- [ ] No aprobar scripts de terceros a ciegas.
- [ ] Investigar cualquier warning de seguridad.

**Resultado:** entorno reproducible y documentado.

---

## Fase C — Ejecutar la plantilla sin modificarla

Objetivo: conocer exactamente qué compramos/reutilizamos antes de tocarla.

### C1. Arranque
- [ ] Ejecutar la aplicación.
- [ ] Ejecutar en emulador.
- [ ] Ejecutar en dispositivo físico cuando sea posible.
- [ ] Confirmar instalación.
- [ ] Confirmar navegación.

### C2. Inventario visual
Registrar:
- [ ] onboarding;
- [ ] login;
- [ ] registro;
- [ ] home;
- [ ] envío;
- [ ] historial;
- [ ] perfil;
- [ ] configuración;
- [ ] notificaciones;
- [ ] estados;
- [ ] errores;
- [ ] loading;
- [ ] componentes reutilizables.

### C3. Inventario técnico
- [ ] Arquitectura.
- [ ] navegación.
- [ ] manejo de estado.
- [ ] almacenamiento local.
- [ ] networking.
- [ ] manejo de errores.
- [ ] autenticación existente.
- [ ] dependencias.
- [ ] permisos.
- [ ] logs.
- [ ] configuración de build.

---

## Fase D — Auditoría de rendimiento inicial

**Obligatoria antes de personalizar.**

Crear mediciones reproducibles de:

- [ ] tiempo de arranque;
- [ ] RAM al iniciar;
- [ ] RAM después de navegación;
- [ ] CPU;
- [ ] FPS/jank;
- [ ] almacenamiento;
- [ ] tamaño APK/AAB;
- [ ] tráfico de red;
- [ ] consumo durante una sesión prolongada;
- [ ] crecimiento de memoria;
- [ ] fugas de memoria.

### Prueba de estrés inicial

Realizar navegación repetida:

```text
HOME
→ SEND
→ BACK
→ HISTORY
→ HOME
```

durante un número definido de ciclos y medir si la memoria vuelve aproximadamente al nivel esperado.

Si existe crecimiento sostenido, registrar como problema antes de personalizar.

---

## Fase E — Definir el diseño específico de DineroAtuCuenta

No modificar todavía toda la plantilla.

Primero elaborar el mapa:

```text
Login
 ↓
Home
 ↓
Nuevo envío
 ↓
Destinatario
 ↓
Monto
 ↓
Comisión
 ↓
Total
 ↓
Instrucciones Mercado Pago
 ↓
Esperando pago
 ↓
Pago recibido
 ↓
Procesando
 ↓
Enviado a Bolivia
 ↓
Completado
```

También:

```text
Home
 ├── Historial
 ├── Perfil
 ├── Seguridad
 └── Ayuda
```

### Tareas
- [ ] Definir cada pantalla.
- [ ] Definir estados de cada pantalla.
- [ ] Definir errores.
- [ ] Definir loading.
- [ ] Definir navegación.
- [ ] Identificar componentes de la plantilla que podemos reutilizar.
- [ ] Identificar componentes que debemos reemplazar.
- [ ] Identificar componentes que debemos crear.

---

## Fase F — Adaptación visual

Solo después de aprobar el mapa de pantallas.

### Tareas
- [ ] Branding DineroAtuCuenta.
- [ ] colores.
- [ ] tipografía.
- [ ] iconografía.
- [ ] botones.
- [ ] formularios.
- [ ] tarjetas.
- [ ] navegación.
- [ ] estados de transferencia.
- [ ] mensajes de error.
- [ ] accesibilidad.
- [ ] diferentes tamaños de teléfono.

### Regla
No añadir funcionalidades financieras reales todavía.

La interfaz utilizará datos ficticios/mock.

---

## Fase G — Compatibilidad Android

Probar progresivamente:

- [ ] versión mínima objetivo;
- [ ] Android moderno;
- [ ] dispositivo de gama media;
- [ ] dispositivo de gama baja;
- [ ] diferentes resoluciones;
- [ ] diferentes densidades;
- [ ] poca RAM;
- [ ] conexión lenta.

### Decisión de versión mínima

La versión mínima definitiva se decidirá usando:
1. cobertura;
2. requisitos de la tecnología;
3. dependencias;
4. seguridad;
5. rendimiento;
6. capacidad de mantenimiento.

El candidato inicial sigue siendo **Android 8 / API 26**, pero no es una decisión cerrada.

---

## Fase H — Seguridad de la aplicación móvil

Esta fase será previa a conectar dinero real.

### Tareas
- [ ] Revisar almacenamiento local.
- [ ] Revisar tokens.
- [ ] Revisar logs.
- [ ] Revisar permisos.
- [ ] Revisar deep links.
- [ ] Revisar navegación protegida.
- [ ] Revisar comunicación HTTPS.
- [ ] Revisar certificados/configuración.
- [ ] Revisar exposición de secretos.
- [ ] Revisar screenshots/screen recording donde corresponda.
- [ ] Revisar biometría si se incorpora.
- [ ] Revisar manejo de errores.
- [ ] Revisar datos sensibles en memoria.

**Regla:** ninguna plantilla será considerada segura para dinero real solamente por declarar que tiene "security features".

---

## Fase I — Backend

No comienza hasta que el flujo móvil esté definido.

### Tareas preliminares
- [ ] Definir arquitectura.
- [ ] Definir API.
- [ ] Definir autenticación.
- [ ] Definir autorización.
- [ ] Definir usuarios.
- [ ] Definir beneficiarios.
- [ ] Definir órdenes.
- [ ] Definir transferencias.
- [ ] Definir estados.
- [ ] Definir comisiones.
- [ ] Definir cotización.
- [ ] Definir auditoría.
- [ ] Definir idempotencia.
- [ ] Definir webhooks.
- [ ] Definir conciliación.
- [ ] Definir reintentos.
- [ ] Definir seguridad.

---

## Fase J — Integración Mercado Pago

**Pendiente de validación comercial, técnica y legal.**

Antes de implementar:
- [ ] Verificar que el modelo sea permitido.
- [ ] Identificar APIs oficiales.
- [ ] Identificar método de recepción.
- [ ] Identificar webhooks.
- [ ] Identificar conciliación.
- [ ] Identificar límites.
- [ ] Identificar reversos.
- [ ] Identificar estados.
- [ ] Identificar requisitos de cuenta comercial.
- [ ] No usar cuentas reales durante pruebas iniciales.

---

## Fase K — Integración con Bolivia

Primera versión:
- [ ] Definir canal bancario.
- [ ] Definir QR si corresponde.
- [ ] Definir proveedor.
- [ ] Definir datos requeridos.
- [ ] Definir conciliación.
- [ ] Definir comprobante.
- [ ] Definir fallos.
- [ ] Definir reembolso.

---

## Fase L — Web de respaldo

Una vez definida la aplicación móvil:

- [ ] Crear versión web.
- [ ] Compartir API/backend.
- [ ] Implementar login.
- [ ] Implementar envío.
- [ ] Implementar historial.
- [ ] Implementar estados.
- [ ] Crear fallback para Android no compatible.
- [ ] Medir compatibilidad con navegadores móviles.

---

# 3.2. Regla de avance entre fases

No avanzar solamente porque "parece funcionar".

Cada fase debe terminar con:

```text
EVIDENCIA
   ↓
REVISIÓN
   ↓
DECISIÓN
   ↓
SIGUIENTE FASE
```

Si aparece una duda crítica:

```text
DETENER
   ↓
INVESTIGAR
   ↓
DOCUMENTAR
   ↓
DECIDIR
   ↓
CONTINUAR
```

---

# 3.3. Registro de herramientas y scripts de medición

Cada vez que una medición sea necesaria se creará o solicitará un script reproducible.

Ejemplos:

```text
scripts/
├── measure_startup.*
├── measure_memory.*
├── measure_build_size.*
├── measure_network.*
└── stress_navigation.*
```

Los nombres y tecnologías concretas se decidirán según el stack seleccionado.

**No crear estos scripts todavía.**

Primero debemos elegir la plataforma.


# 3. Alcance inicial y orden de trabajo

El orden acordado provisionalmente es:

```text
1. Definir producto
        ↓
2. Buscar plantilla visual Android
        ↓
3. Ver demos / screenshots
        ↓
4. Revisar licencia
        ↓
5. Revisar tecnología utilizada
        ↓
6. Evaluar compatibilidad Android
        ↓
7. Elegir plantilla/base
        ↓
8. Descargar/clonar SOLO la candidata elegida
        ↓
9. Ejecutarla y estudiarla
        ↓
10. Adaptar diseño al producto
        ↓
11. Definir arquitectura backend
        ↓
12. Construir backend
        ↓
13. Integrar aplicación móvil + backend
        ↓
14. Pruebas de seguridad y rendimiento
        ↓
15. Evaluar versión web
```

**Regla:** no saltar prematuramente a etapas posteriores.

---

# 4. Decisión pendiente #1 — Tecnología de la aplicación Android

Todavía NO está decidido si utilizaremos:

### Opción A — Android nativo

- Kotlin
- Jetpack Compose

### Opción B — Flutter

- Dart
- Flutter
- Android e iOS desde una misma base de código

### Opción C — React Native / Expo

- JavaScript/TypeScript
- React Native
- Android e iOS desde una misma base

## Pregunta que debemos responder

¿Qué tecnología permite cumplir mejor:

- máxima cobertura de dispositivos Android;
- rendimiento;
- estabilidad;
- mantenimiento;
- seguridad;
- disponibilidad de plantillas;
- facilidad para desarrollar la aplicación;
- posibilidad de crear posteriormente una web;
- integración con servicios financieros;
- facilidad para pruebas;
- tamaño final de la aplicación;
- compatibilidad con versiones antiguas de Android?

**Estado:** 🔴 Pendiente.

---

# 5. Decisión #2 — Estrategia de compatibilidad Android

El objetivo estratégico es:

> **Soportar la mayor cantidad razonable de teléfonos Android posible, priorizando una buena cobertura antes que depender exclusivamente de dispositivos modernos.**

No se dará soporte específico a tablets en la primera versión.

## Estrategia de fallback

La aplicación móvil será la primera experiencia del producto.

Si un teléfono no es compatible con la versión mínima de Android definida para la aplicación, el usuario podrá ser dirigido a la **versión web de DineroAtuCuenta**, siempre que el navegador/dispositivo sea compatible.

La web funcionará como una vía de acceso complementaria y, posteriormente, como una plataforma más completa.

```text
                    DineroAtuCuenta
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
        Android compatible        Android no compatible
              │                         │
              ↓                         ↓
          App móvil                Versión web
```

## Versión mínima de Android

**Todavía no se fija definitivamente.**

Como orientación inicial, **Android 8.0 (API 26)** es un buen candidato para investigar, porque busca un equilibrio entre cobertura amplia y una base suficientemente moderna para una aplicación financiera.

Sin embargo, **la decisión final debe hacerse después de revisar las plantillas y tecnologías candidatas**. Una plantilla concreta puede imponer una versión mínima superior, y no queremos elegir una versión arbitrariamente antes de conocer las opciones reales.

### Principio de decisión

No elegiremos:

> "la versión mínima que técnicamente podamos compilar".

Elegiremos:

> "la versión mínima que maximice cobertura sin comprometer seguridad, mantenimiento, rendimiento y las capacidades necesarias de DineroAtuCuenta".

## Preguntas pendientes

- [ ] ¿Qué porcentaje aproximado de dispositivos cubre API 26 actualmente?
- [ ] ¿Qué mínimo exige cada plantilla candidata?
- [ ] ¿Qué mínimo exige la versión de Android/SDK de las dependencias principales?
- [ ] ¿Qué funciones de seguridad necesitamos que estén disponibles?
- [ ] ¿Qué impacto tiene bajar el mínimo en mantenimiento y testing?
- [ ] ¿Qué dispositivos de gama baja queremos soportar explícitamente?

**Estado:** 🟡 En investigación.  
**Candidato inicial:** Android 8.0 / API 26.  
**Decisión definitiva:** después de comparar plantillas y stack.

---

# 6. Decisión #3 — Plantilla visual Android

Esta es la **prioridad actual**.

Antes de decidir definitivamente la versión mínima de Android y antes de instalar dependencias, vamos a comparar plantillas visuales compatibles con el enfoque móvil que elijamos.

## Objetivo

Encontrar una plantilla/base visual que podamos **ver antes de descargar**, evaluar y recién después incorporar al proyecto.

## Criterios mínimos

La plantilla candidata debería evaluarse por:

- apariencia moderna;
- navegación móvil;
- login;
- registro;
- dashboard;
- perfil;
- historial;
- transferencias;
- formularios;
- estados;
- notificaciones;
- configuración;
- componentes reutilizables;
- responsive/adaptabilidad a distintos tamaños;
- calidad del código;
- documentación;
- actividad del repositorio;
- licencia;
- facilidad de modificación.

## Criterios legales

Preferencia:

1. MIT
2. Apache-2.0
3. BSD u otra licencia permisiva compatible

No debemos interpretar "open source" como automáticamente "sin restricciones".

Para cada candidata debemos revisar **la licencia real del repositorio** antes de decidir utilizarla comercialmente.

## Regla de búsqueda

Primero:

```text
demo / screenshots / preview
```

Después:

```text
GitHub
```

Después:

```text
licencia + tecnología + calidad del proyecto
```

Y solamente después:

```text
clone / download / install
```

**Estado:** 🟡 En investigación.

---

## Estrategia de selección de plantilla

No vamos a clonar candidatos indiscriminadamente.

El proceso será:

```text
1. Buscar candidatos
        ↓
2. Ver demo / screenshots
        ↓
3. Confirmar que realmente son Android / Flutter / React Native
        ↓
4. Revisar licencia
        ↓
5. Revisar stack y compatibilidad Android
        ↓
6. Comparar funcionalidades y calidad visual
        ↓
7. Seleccionar 1–3 finalistas
        ↓
8. Solo entonces descargar/clonar
```

La razón es evitar gastar tiempo, almacenamiento y dependencias en proyectos que no encajan.

### Pregunta estratégica

¿Debemos priorizar:

- una plantilla visual muy completa aunque tenga una versión mínima de Android más alta;
- o una plantilla visual más sencilla que permita una cobertura Android mucho mayor?

**Criterio provisional:** cobertura + seguridad + mantenibilidad tienen prioridad sobre cantidad de componentes visuales.

---

# 6.1. Primera ronda de plantillas encontradas

La búsqueda inicial ya encontró varias candidatas interesantes. **Todavía no se debe descargar ninguna.**

## Candidata A — SaviPay

urlGitHub — SaviPayhttps://github.com/Yomayratorres/SaviPay

**Tecnología:** React Native + Expo + TypeScript.

**Orientación:** fintech / wallet / pagos móviles.

**Puntos interesantes:**
- mobile-first;
- diseño basado en Figma;
- componentes reutilizables;
- Expo Router;
- autenticación/onboarding;
- componentes financieros;
- theming;
- soporte de Android;
- posibilidad de ejecutar también en web;
- testing y consideraciones de performance documentadas.

El repositorio declara licencia MIT. citeturn1search0

**Valor para DineroAtuCuenta:** alto, porque combina una interfaz financiera móvil con una posible ruta hacia web.

**Pendientes:** revisar visualmente la demo real, estructura del proyecto, versión mínima de Android y calidad efectiva del código antes de considerarla finalista.

---

## Candidata B — i_bank

urlGitHub — i_bankhttps://github.com/ProgramTechBro/i_bank

**Tecnología:** Flutter.

Se presenta como una recreación pixel-perfect de un kit Figma de banca/wallet, con Clean Architecture, Riverpod, go_router y una separación de domain/data/presentation. Usa datos ficticios y está pensado para conectar posteriormente un backend real. El repositorio aparece actualizado en julio de 2026. citeturn2search6turn2search7

**Valor para DineroAtuCuenta:** muy alto desde el punto de vista visual/arquitectónico.

**Pendiente crítico:** confirmar licencia exacta y condiciones de los assets/Figma antes de utilizarlo.

---

## Candidata C — Banking-App-Mock-Compose

urlGitHub — Banking-App-Mock-Composehttps://github.com/alexandr7035/Banking-App-Mock-Compose

**Tecnología:** Kotlin + Jetpack Compose.

Tiene una cantidad considerable de pantallas y conceptos que se parecen a los que necesitamos:

- onboarding;
- registro;
- teléfono/email;
- OTP;
- login;
- home;
- balance;
- enviar dinero;
- top-up;
- solicitar dinero;
- pagos;
- historial;
- contactos;
- perfil;
- QR;
- notificaciones;
- seguridad;
- configuración.

También incluye biometría, almacenamiento seguro, WorkManager, Paging y QR. El repositorio indica licencia MIT. citeturn2search0

**Valor para DineroAtuCuenta:** muy alto por la similitud entre sus flujos y nuestra futura aplicación.

**Advertencia:** el propio proyecto aclara que es una app bancaria simulada y que ciertas implementaciones de seguridad son demostrativas y no apropiadas para una app bancaria real. No reutilizaremos su seguridad financiera sin auditoría. citeturn2search0

---

## Candidata D — Android Compose Template

urlGitHub — Android Compose Templatehttps://github.com/ashtanko/compose-android-template

**Tecnología:** Kotlin + Jetpack Compose.

Es una base Android moderna y modular con Clean Architecture/MVVM, networking, Room, Hilt, tests, benchmarks y baseline profiles. Utiliza Apache License 2.0. citeturn0search0

**Valor para DineroAtuCuenta:** alto como base técnica, pero menor como plantilla visual fintech.

Es más un **esqueleto profesional de Android** que una aplicación bancaria visual lista para adaptar.

---

## Candidata E — Fuse Wallet

urlGitHub — Fuse Wallethttps://github.com/fuseio/fuse-wallet

**Tecnología:** Flutter.

Es una wallet móvil multiplataforma con Flutter y licencia MIT. Tiene más relación con una wallet real que una simple colección de pantallas, pero su orientación principal es Ethereum/crypto, por lo que no encaja directamente con el modelo de remesas de DineroAtuCuenta. citeturn0search2

**Valor:** medio como referencia técnica; bajo como candidata visual principal.

---

## Candidata F — React Native Super App / Fintech Showcase

urlGitHub — Callstack Super App Showcasehttps://github.com/callstack/super-app-showcase

**Tecnología:** React Native + Re.Pack + Module Federation.

Incluye mini-apps de trading, wallet y autenticación y tiene licencia MIT. Es interesante para estudiar arquitectura modular, pero resulta demasiado complejo para nuestra primera etapa. citeturn0search4

**Valor:** bajo para plantilla inicial; alto como referencia futura de arquitectura si DineroAtuCuenta crece mucho.

---

## Primera impresión

Las tres candidatas que merecen una comparación visual profunda son:

1. **SaviPay — React Native/Expo**
2. **i_bank — Flutter**
3. **Banking-App-Mock-Compose — Kotlin/Compose**

No elegimos todavía.

La siguiente tarea será comparar **las pantallas y la experiencia visual**, no instalar las tres.

---

# 7. Incidente de investigación — shadcn-fintech

Se probó inicialmente una plantilla llamada `shadcn-fintech`.

## Qué ocurrió

La plantilla resultó ser una aplicación:

- web;
- Next.js;
- React;
- TypeScript;
- Tailwind/shadcn.

No era una plantilla Android nativa.

Se clonó accidentalmente para evaluar su frontend y se instalaron sus dependencias.

## Estado

**Descartada como candidata Android principal.**

No se debe continuar invirtiendo tiempo en ella para el objetivo móvil.

## Lección incorporada al proceso

Antes de clonar cualquier plantilla debemos confirmar:

1. ¿Es Android?
2. ¿Es Flutter?
3. ¿Es React Native?
4. ¿Es solamente web?
5. ¿Tiene demo?
6. ¿Cuál es la licencia?
7. ¿Qué versión/stack utiliza?
8. ¿Qué tan activa está?

Esto evitará instalar proyectos que no correspondan al objetivo.

## Limpieza pendiente

La carpeta actual se encuentra dentro de:

```text
~/Documentos/Fintech/repos/shadcn-fintech
```

Todavía debemos decidir si conservarla temporalmente como referencia o eliminarla para liberar espacio.

**No modificar código de esta plantilla.**

---

# 8. Organización local del proyecto

Se decidió crear un espacio aislado para el proyecto:

```text
~/Documentos/Fintech/
```

Estructura actual:

```text
Fintech/
├── Fintech_env/
└── repos/
    └── shadcn-fintech/
```

## Propósito

Evitar:

- repositorios dispersos;
- dependencias mezcladas;
- archivos temporales repartidos;
- instalaciones globales innecesarias;
- dificultad para eliminar pruebas.

## Regla

Cada proyecto candidato debe vivir dentro de:

```text
~/Documentos/Fintech/repos/
```

Una plantilla que no sirva puede eliminarse como una unidad.

---

# 9. Entorno Python

Existe:

```text
Fintech_env
```

con Python 3.12.3.

## Estado

Creado como entorno específico del proyecto.

## Importante

La existencia de este entorno **no significa que el backend deba ser Python**.

La decisión del backend todavía está pendiente.

No debemos forzar Python simplemente porque el entorno ya exista.

---

# 10. Pregunta pendiente — ¿qué significa exactamente "giros internacionales a Bolivia"?

Antes de construir el backend debemos definir el producto.

Debemos responder:

### Origen del dinero

- ¿Desde qué países podrán enviar?
- ¿Inicialmente un solo país?
- ¿Estados Unidos?
- ¿Europa?
- ¿Varios países desde el principio?

### Destino

- ¿El receptor siempre estará en Bolivia?
- ¿Cuenta bancaria?
- ¿Cuenta móvil?
- ¿QR?
- ¿Efectivo?
- ¿Otros métodos?

### Monedas

Inicialmente probablemente:

```text
USD → BOB
```

pero debemos confirmar.

### Usuario

¿Quién utiliza la aplicación?

- remitente;
- receptor;
- ambos;
- administrador;
- operador.

**Estado:** 🔴 Pendiente.

---

# 11. Flujo funcional que debemos definir

Antes del backend debemos dibujar el flujo.

Ejemplo provisional:

```text
Registro
   ↓
Verificación de identidad
   ↓
Inicio
   ↓
Elegir destinatario
   ↓
Introducir cantidad
   ↓
Cotización
   ↓
Comisión
   ↓
Confirmación
   ↓
Pago
   ↓
Procesamiento
   ↓
Envío hacia Bolivia
   ↓
Recepción
   ↓
Completado
```

Esto es solamente una **hipótesis de flujo**, no una decisión final.

Debemos determinar:

- dónde se cobra;
- cuándo se fija el tipo de cambio;
- cuándo se cobra la comisión;
- qué ocurre si falla el pago;
- qué ocurre si falla el pago al destinatario;
- qué ocurre si la transferencia queda pendiente;
- qué ocurre si se cancela;
- qué ocurre si se devuelve;
- qué ocurre si hay discrepancia de datos.

---

# 12. Backend — pendiente

Una vez definida la aplicación móvil se deberá decidir:

- lenguaje;
- framework;
- API REST/GraphQL/etc.;
- autenticación;
- autorización;
- base de datos;
- almacenamiento;
- colas;
- trabajos asíncronos;
- logs;
- auditoría;
- monitoreo;
- backups;
- despliegue;
- proveedores externos.

No elegir todavía.

---

# 13. Base de datos — pendiente

Probablemente necesitaremos entidades similares a:

```text
User
Recipient
Transfer
TransferStatus
ExchangeRate
Fee
Payment
Payout
IdentityVerification
Notification
AuditLog
```

Esto es solamente una hipótesis inicial.

No crear tablas todavía.

Primero debemos definir el flujo financiero real.

---

# 14. Seguridad — requisito fundamental

Por tratarse de dinero, la seguridad no será una mejora posterior.

Deberemos contemplar:

- autenticación;
- autorización;
- protección de sesiones;
- almacenamiento seguro de tokens;
- cifrado;
- protección de datos personales;
- rate limiting;
- prevención de fraude;
- auditoría;
- idempotencia;
- protección contra transferencias duplicadas;
- control de permisos;
- validación del lado servidor;
- logs sin información sensible;
- manejo seguro de secretos.

---

# 15. KYC / AML / regulación — decisión crítica

No se debe diseñar el sistema suponiendo que una aplicación de transferencias de dinero funciona como una aplicación normal.

Debemos investigar antes de implementar el flujo real:

- requisitos regulatorios;
- KYC;
- AML;
- identificación del remitente;
- identificación del beneficiario;
- límites;
- reportes;
- conservación de registros;
- protección de datos;
- requisitos del país desde donde se envía;
- requisitos aplicables en Bolivia;
- proveedores regulados que podrían procesar los fondos.

**Estado:** 🔴 Pendiente de investigación.

---

# 16. Proveedores de pago y recepción

Debemos determinar si construiremos infraestructura financiera propia o integraremos proveedores.

Preguntas:

- ¿Cómo entra el dinero?
- ¿Cómo sale el dinero?
- ¿Quién convierte USD → BOB?
- ¿Quién mantiene la liquidez?
- ¿Quién hace el payout en Bolivia?
- ¿Qué APIs existen?
- ¿Qué proveedores operan legalmente en los mercados que necesitamos?
- ¿Qué comisiones cobran?
- ¿Qué límites tienen?
- ¿Qué webhooks ofrecen?
- ¿Qué ocurre cuando un webhook no llega?
- ¿Cómo conciliamos una operación?

**Estado:** 🔴 Pendiente.

---

# 17. Cotización y tipo de cambio

Necesitaremos definir:

```text
tipo de cambio
+
comisión
+
monto enviado
=
monto recibido
```

Debemos decidir:

- fuente del tipo de cambio;
- frecuencia de actualización;
- margen;
- momento en que se fija la cotización;
- tiempo de validez;
- redondeo;
- moneda de presentación;
- tratamiento de errores;
- auditoría de cada cotización.

---

# 18. Estados de una transferencia

Necesitamos diseñar una máquina de estados formal.

Ejemplo provisional:

```text
CREATED
   ↓
AWAITING_PAYMENT
   ↓
PAYMENT_RECEIVED
   ↓
PROCESSING
   ↓
SENT
   ↓
PAID
```

También deberán contemplarse estados como:

```text
FAILED
CANCELLED
REFUNDED
EXPIRED
REVIEW
```

No son definitivos.

---

# 19. Panel administrativo

Probablemente necesitaremos un panel separado para:

- usuarios;
- verificaciones;
- transferencias;
- estados;
- incidencias;
- conciliación;
- comisiones;
- tipos de cambio;
- auditoría;
- reportes;
- configuración.

Todavía no se decide si será:

- web;
- parte de la misma aplicación;
- una aplicación administrativa independiente.

---

# 20. Web futura

La web será una **pieza estratégica del producto**, aunque no sea la primera plataforma que construiremos.

No se pretende utilizarla solamente como "página informativa". Debe poder servir como alternativa de acceso para usuarios cuyos dispositivos Android no sean compatibles con la aplicación y, posteriormente, como una experiencia profesional completa.

La idea provisional es:

```text
App Android
   ↓
máxima cobertura posible

Si el dispositivo no es compatible
   ↓
DineroAtuCuenta Web
   ↓
acceso al servicio desde navegador
```

Esto permite no excluir automáticamente a usuarios con teléfonos Android antiguos.

## Preguntas

- [ ] ¿Qué funcionalidades debe tener la web desde el primer día?
- [ ] ¿La web tendrá exactamente las mismas operaciones que Android?
- [ ] ¿Qué navegadores móviles debemos soportar?
- [ ] ¿La web tendrá una versión "profesional" con funcionalidades adicionales?
- [ ] ¿Qué partes de la experiencia pueden compartir Android y web?
- [ ] ¿Cómo se mantendrá la coherencia de seguridad entre ambas plataformas?

La arquitectura del backend deberá permitir que Android y web utilicen los mismos servicios financieros sin duplicar la lógica crítica.


Debemos evitar elegir la tecnología móvil únicamente pensando que necesariamente podremos reutilizar el frontend.

Lo que sí debemos procurar desde el principio es:

```text
Android
   │
   ├── API
   │
Web ─┘
```

Es decir:

**backend desacoplado del frontend.**

Así Android y una futura web podrán utilizar la misma lógica financiera y los mismos servicios.

---

# 21. Performance y consumo de recursos

Esta será una regla permanente del proyecto.

No solamente mediremos si "funciona".

También mediremos:

- tiempo de arranque;
- tiempo de navegación;
- FPS cuando corresponda;
- consumo de RAM;
- CPU;
- batería;
- almacenamiento;
- tamaño de APK/AAB;
- uso de red;
- número de requests;
- tiempos de respuesta;
- fugas de memoria;
- objetos retenidos;
- crecimiento de memoria durante sesiones prolongadas;
- comportamiento en dispositivos de gama baja.

## Regla

Siempre que una decisión técnica pueda afectar rendimiento:

> **medir antes y después mediante scripts/herramientas reproducibles.**

No afirmar que algo "mejora el rendimiento" sin medición.

---

# 22. Estrategia de pruebas

Antes de implementar el sistema financiero real debemos definir:

### Frontend

- navegación;
- formularios;
- errores;
- estados;
- diferentes tamaños;
- diferentes versiones Android.

### Backend

- unit tests;
- integration tests;
- API tests;
- errores;
- concurrencia;
- idempotencia.

### Financiero

- redondeos;
- comisiones;
- conversiones;
- duplicaciones;
- reintentos;
- estados inconsistentes;
- conciliación.

### Seguridad

- autenticación;
- autorización;
- abuso de API;
- secretos;
- almacenamiento local;
- sesiones.

### Performance

- carga;
- memoria;
- CPU;
- red;
- estrés.

---

# 23. Reglas de investigación

Para evitar repetir el problema de `shadcn-fintech`:

## Antes de descargar una plantilla

Debemos responder:

```text
[ ] ¿Es realmente Android / Flutter / React Native?
[ ] ¿Tiene demo visual?
[ ] ¿La demo corresponde al código actual?
[ ] ¿Tiene licencia explícita?
[ ] ¿La licencia permite el uso que necesitamos?
[ ] ¿Está mantenida?
[ ] ¿Qué versión utiliza?
[ ] ¿Qué dependencias importantes tiene?
[ ] ¿Es realmente gratuita?
[ ] ¿Tiene funcionalidades útiles para nuestra aplicación?
[ ] ¿Qué partes son solamente visuales?
[ ] ¿Qué partes requerirían backend?
```

Solamente después de aprobar la candidata:

```text
clone
↓
install
↓
run
↓
inspect
```

---

# 23.1. Decisión — Plantilla/base elegida para Android

**Estado:** ✅ Decidido — lista para clonar y ejecutar sin modificar (punto 17).

## Descripción / trouble

Necesitábamos encontrar una plantilla visual segura, mantenida y con licencia clara para construir la UI/UX de DineroAtuCuenta en Android, siguiendo el proceso del punto 23 (nunca clonar antes de auditar).

## Candidatas evaluadas (revisión rápida)

| Candidata | Tecnología | Estado |
|---|---|---|
| `ProgramTechBro/i_bank` | Flutter | ❌ Descartada — sin estrellas, sin demo visual en el repo, no convenció visualmente |
| `alexandr7035/Banking-App-Mock-Compose` | Kotlin + Jetpack Compose | ✅ **Elegida** |
| `edrickleong/smartbank` | React Native + Expo + Supabase | Backup / comparación, no auditada a fondo |
| `MarceloDJunior/banking-app` | React Native (Expo Bare) | Backup, autor indica que está incompleta |
| `vinothvino42/Mobile-Banking-App-UI` | Flutter (neomorfismo) | Descartada como base — riesgo de accesibilidad/contraste bajo |
| `namanh11611/flutter_mvvm_riverpod` | Flutter (boilerplate, no bancario) | Comodín si ninguna plantilla bancaria convence |

## Decisión

**Plataforma:** Kotlin nativo + Jetpack Compose.
**Base/plantilla:** [`alexandr7035/Banking-App-Mock-Compose`](https://github.com/alexandr7035/Banking-App-Mock-Compose)
**Licencia:** MIT (permite uso comercial).
**Referencia de diseño:** Figma "Finance Mobile App UI KIT" de Aparna Tati.

### Por qué se eligió

- 35 estrellas, 4 forks, mantenida (actualización 2025 de dependencias).
- README con capturas reales y video demo — la demo corresponde al código (requisito del punto 23).
- Clean Architecture (data/domain/ui) + patrón MVI — arquitectura testeable y escalable.
- Pantallas ya implementadas que se mapean directo a nuestro flujo: onboarding, signup, OTP, home con tarjetas/ahorros/balance, **enviar dinero, recargar, historial de transacciones, contactos de transacción**.
- Autor transparente sobre limitaciones (ej. advierte que el lock screen "no es apropiado para una app bancaria real").

## Causa / contexto confirmado — Auditoría estática de seguridad

Antes de clonar, se revisó archivo por archivo (sin ejecutar código) para descartar código malicioso, dado que es un repositorio de temática financiera:

1. **`app/build.gradle.kts`** — todas las dependencias son librerías reconocidas (AndroidX, Koin, Coil, Room, Zxing, PermissionX). Sin URLs de repositorios no oficiales.
2. **`gradle/libs.versions.toml`** — coordenadas y versiones verificadas. Dos dependencias menores vía JitPack (`compose-state-events`, `ksprefs`) — bajo riesgo, librerías de nicho con años de uso.
3. **`AndroidManifest.xml`** — permisos mínimos y justificados: `INTERNET`, `CAMERA` (opcional, para QR), `POST_NOTIFICATIONS`, `VIBRATE`. Sin permisos invasivos (sin SMS, contactos, ubicación).
4. **`BankingApp.kt`** — inicialización limpia (Koin + canal de notificaciones). Sin SDKs de analytics ocultos ni llamadas de red al arrancar.
5. **`appModule.kt`** — mapa completo de DI. Ningún módulo de red (`networkModule`/`apiModule`) declarado.
6. **`dataModule.kt` + `workerModule.kt`** — confirmado: **todos** los repositorios son `*Mock` (Login, Cards, Transactions, SignUp, Savings, Otp, Profile, Account, Contacts). Persistencia 100% local vía Room (`cache.db`) y `EncryptedSharedPreferences` (AES-256-GCM). Cero llamadas HTTP, cero Retrofit/OkHttp.

**Conclusión de la auditoría estática:** sin señales de código malicioso ni de exfiltración de datos. Segura para clonar.

## Rutas locales del proyecto

- **Proyecto (código clonado):** `/home/jonh/Documentos/Fintech`
- **Entorno virtual / tooling auxiliar:** `/home/jonh/Documentos/proyectos_venv/Fintech_env`

## Vocabulario técnico — "Adaptar la app a nuestra empresa" (punto 19)

Siguiendo la regla pedagógica del proyecto (sección 1), antes de ejecutar el punto 19 documentamos los tres conceptos que se mezclan bajo esa idea:

### White-labeling ("marca blanca")
- **Qué significa:** tomar un producto genérico ya construido y ponerle la identidad de tu empresa (nombre, logo, colores) como si fuera propio desde cero.
- **Por qué existe:** ahorra construir desde cero; el producto base está diseñado para ser reutilizado por distintas marcas.
- **Cómo se relaciona con DineroAtuCuenta:** es lo que haremos con `Banking-App-Mock-Compose` — tras el white-labeling, nadie notará qué plantilla se usó originalmente.

### Theming (el paso técnico concreto, específico de Jetpack Compose)
- **Qué significa:** sistema centralizado de `Color`, `Typography` y `Shape` que define la apariencia visual de toda la app desde un solo lugar (`Theme.kt` / `Color.kt`).
- **Por qué existe:** evita cambiar colores "a mano" pantalla por pantalla; se cambia en un archivo y se propaga a toda la app.
- **Cuándo lo usaremos:** sub-paso técnico del punto 19.

### Brand Identity / Design System (lo que coloquialmente llamamos "nuestra identidad de UI/UX")
- **Qué significa:** el conjunto de decisiones de marca (nombre, logo, paleta, tipografía, tono de textos, iconografía) documentado como reglas consistentes, no solo aplicado una vez.
- **Por qué existe:** para que cualquier pantalla nueva (punto 20) se vea coherente sin tener que "adivinar" cada vez.
- **Alternativa:** proyectos pequeños a veces solo hacen theming sin Design System formal para una primera versión, y lo formalizan después. Válido como enfoque inicial para DineroAtuCuenta.

### Desglose del punto 19

```
19.a — Definir el Design System de DineroAtuCuenta
        (nombre final, logo, paleta de colores, tipografía)
19.b — Theming técnico
        (aplicar esas decisiones en código: Theme.kt, Color.kt,
         reemplazar "Banking App" por "DineroAtuCuenta" en strings.xml,
         reemplazar el ícono/launcher)
```



**Estado:** repo clonado con éxito en `/home/jonh/Documentos/Fintech/repos/Banking-App-Mock-Compose`. Pendiente ejecutar (punto 17 de la lista principal).

### Checklist para retomar — Punto 17 (Ejecutar sin modificar)

- [ ] Crear `keystore.properties` de debug propio (no viene en el repo, es intencional).
- [ ] Abrir el proyecto en Android Studio.
- [ ] Configurar un emulador (AVD) **sin cuenta de Google real**.
- [ ] Compilar y correr la app tal cual, sin modificar nada.
- [ ] Navegar todas las pantallas mientras se observa el **Network Inspector** — confirmar que no sale tráfico de red (verificación dinámica cruzada de la auditoría estática ya hecha).
- [ ] Documentar aquí el resultado.

Después de esto recién se pasa al punto 18 (medir rendimiento) y 19 (adaptar UI a DineroAtuCuenta).


## Archivos/componentes afectados

Ninguno propio todavía — es una auditoría previa a clonar. Al clonar, se trabajará sobre una copia local, no sobre el original.

---

# 24. Regla de diagnóstico

Cuando aparezca un problema:

1. No asumir la causa.
2. Revisar código/configuración real.
3. Medir mediante comandos o scripts cuando sea posible.
4. Si falta información, pedirla.
5. Documentar la evidencia.
6. Separar:
   - hecho confirmado;
   - hipótesis;
   - propuesta.
7. No modificar código hasta que el plan esté aprobado.

---

# 25. Registro de bugs

Actualmente:

**Bugs reportados: 0**

Este apartado comenzará a utilizarse cuando exista código propio o cuando una plantilla elegida presente problemas que decidamos conservar como parte del proyecto.

Cada bug tendrá:

- qué reportó el usuario;
- causa confirmada;
- causa no confirmada / hipótesis;
- fix propuesto;
- archivos a modificar;
- archivos solamente a revisar;
- riesgo de regresión;
- impacto en datos;
- impacto en otros componentes;
- pruebas necesarias;
- medición de performance cuando corresponda.

---

# 26. Mejoras que noté yo

Esta sección estará separada de los problemas reportados por el usuario.

Actualmente:

**0 mejoras técnicas confirmadas.**

No se agregarán sugerencias como hechos. Las observaciones deberán estar sustentadas en:

- código real;
- mediciones;
- documentación;
- pruebas;
- evidencia reproducible.

---

# 26.1. Preguntas nuevas derivadas del modelo de negocio

## Flujo de fondos

- [ ] ¿En qué país estará registrada/operará inicialmente DineroAtuCuenta?
- [ ] ¿La cuenta de Mercado Pago será personal o empresarial?
- [ ] ¿Mercado Pago permite este flujo comercial y de remesas?
- [ ] ¿Se puede recibir dinero de múltiples remitentes?
- [ ] ¿Cómo identificaremos a qué transferencia corresponde cada depósito?
- [ ] ¿Cómo verificaremos que el dinero recibido corresponde exactamente a una orden?
- [ ] ¿Qué ocurre si el remitente envía un monto incorrecto?
- [ ] ¿Qué ocurre si envía dinero sin crear previamente una orden?
- [ ] ¿Qué ocurre si una transferencia se duplica?
- [ ] ¿Qué ocurre si Mercado Pago revierte o bloquea una operación?
- [ ] ¿Cómo se registrará la comisión?
- [ ] ¿Cómo se demostrará el monto entregado al beneficiario?
- [ ] ¿Qué proveedor/banco/canal se utilizará para el pago en Bolivia?
- [ ] ¿La cuenta destino será bancaria, billetera, QR u otra?
- [ ] ¿Quién asumirá las comisiones intermedias?
- [ ] ¿Cómo se manejarán reembolsos y disputas?

## Producto

- [ ] ¿El usuario debe crear una orden antes de enviar a Mercado Pago?
- [ ] ¿Cómo sabrá el usuario exactamente cuánto debe transferir?
- [ ] ¿La aplicación mostrará instrucciones específicas para Mercado Pago?
- [ ] ¿Cómo notificaremos que el dinero fue recibido?
- [ ] ¿Cuánto tiempo máximo puede permanecer una orden esperando pago?
- [ ] ¿Qué información del beneficiario boliviano necesitaremos?

---


## Producto

- [ ] ¿Cuál es el primer país desde el que se enviará dinero?
- [ ] ¿Solo habrá destino Bolivia?
- [ ] ¿Quién será el usuario principal?
- [ ] ¿Quién será el beneficiario?
- [ ] ¿Qué métodos de recepción existirán?
- [ ] ¿Cuál será el monto mínimo?
- [ ] ¿Cuál será el máximo?
- [ ] ¿Habrá límites diarios/mensuales?

## Plataforma

- [ ] ¿Android nativo?
- [ ] ¿Flutter?
- [ ] ¿React Native/Expo?
- [ ] ¿Versión mínima de Android?
- [ ] ¿Qué dispositivos de gama baja debemos soportar?
- [ ] ¿Tablet?
- [ ] ¿Offline parcial?

## Diseño

- [ ] ¿Qué plantilla elegiremos?
- [ ] ¿Qué estilo visual buscamos?
- [ ] ¿Qué pantallas son imprescindibles?
- [ ] ¿Qué componentes podemos reutilizar?
- [ ] ¿Qué partes de la plantilla son solamente demo?

## Financiero

- [ ] ¿Cómo entra el dinero?
- [ ] ¿Cómo llega a Bolivia?
- [ ] ¿Qué proveedor realizará cada etapa?
- [ ] ¿Cómo obtenemos el tipo de cambio?
- [ ] ¿Cómo calculamos la comisión?
- [ ] ¿Cuándo fijamos la cotización?
- [ ] ¿Cómo hacemos reembolsos?
- [ ] ¿Cómo conciliamos?

## Legal / cumplimiento

- [ ] ¿Qué entidad operará el servicio?
- [ ] ¿Qué jurisdicciones aplican?
- [ ] ¿Qué KYC necesitamos?
- [ ] ¿Qué AML necesitamos?
- [ ] ¿Qué datos personales debemos almacenar?
- [ ] ¿Durante cuánto tiempo?
- [ ] ¿Qué proveedores ya ofrecen infraestructura regulada?

## Backend

- [ ] ¿Qué lenguaje?
- [ ] ¿Qué framework?
- [ ] ¿Qué base de datos?
- [ ] ¿Qué proveedor cloud?
- [ ] ¿Qué arquitectura?
- [ ] ¿Cómo autenticamos?
- [ ] ¿Cómo auditamos?
- [ ] ¿Cómo manejamos webhooks?
- [ ] ¿Cómo hacemos idempotencia?
- [ ] ¿Cómo hacemos backups?

## Web futura

- [ ] ¿Será necesaria?
- [ ] ¿Qué funcionalidades tendrá?
- [ ] ¿Será pública, privada o ambas?
- [ ] ¿Qué partes compartirá con Android?

## Performance

- [ ] ¿Qué dispositivos de referencia utilizaremos?
- [ ] ¿Qué métricas serán obligatorias?
- [ ] ¿Cómo mediremos RAM?
- [ ] ¿Cómo mediremos CPU?
- [ ] ¿Cómo detectaremos fugas?
- [ ] ¿Cómo mediremos batería?
- [ ] ¿Cómo mediremos red?
- [ ] ¿Cuál será el tamaño máximo aceptable de la aplicación?

---

# 28. Próximo paso acordado

**Estado actualizado:** la comparación visual y la auditoría estática de seguridad ya se realizaron (ver punto 23.1). Plantilla decidida: `Banking-App-Mock-Compose`.

**NO programar backend.**

**NO modificar código todavía** (primero ejecutar sin tocar, punto 17, luego recién adaptar).

El siguiente paso es:

> **Clonar `Banking-App-Mock-Compose`, ejecutarla sin modificar en un emulador Android (AVD, sin cuenta de Google real), verificar con Network Inspector que no hay tráfico de red (confirmación dinámica de la auditoría estática), y luego adaptar la UI/marca a DineroAtuCuenta.**

Con esto se daría por cerrada la fase de UI/UX de esta ronda (puntos 6 a 20 de la lista principal).

El modelo funcional inicial que debe inspirar la UI ya está definido:

```text
Remitente
  ↓
Orden de envío
  ↓
Instrucciones Mercado Pago
  ↓
Dinero recibido por DineroAtuCuenta
  ↓
Comisión
  ↓
Pago al beneficiario en Bolivia
  ↓
Confirmación
```

La plantilla debe ayudarnos a representar claramente ese flujo, no simplemente parecerse a una banca genérica.

No vamos a instalar todavía.

Primero veremos qué opciones existen y qué requisitos de Android impone cada una. Con esa información decidiremos el stack y la versión mínima de Android.

Para cada candidata se documentará:

```text
Nombre
Tecnología
Demo
GitHub
Licencia
Gratis / de pago
Última actualización
Pantallas disponibles
Funcionalidades
Calidad visual
Calidad del código
Compatibilidad Android
Dependencias
Riesgos
Qué podemos reutilizar
Qué habría que construir nosotros
```

**Solo después de comparar las candidatas elegiremos una para descargar y probar.**
