#!/bin/bash
# ============================================================================
#  ADB CHEATSHEET — Referencia completa de comandos
#  Guardado en: ~/Documentos/Fintech/adb_cheatsheet.sh
#  Uso: Este archivo es solo referencia. Copia y pega los comandos que necesites.
# ============================================================================

# ============================================================================
# 1. CONEXIÓN Y DIAGNÓSTICO
# ============================================================================

# Ver dispositivos conectados (lo primero que corres siempre)
adb devices
# Resultado esperado: "AYCQCP4B19402344  device"
# Si dice "unauthorized" → acepta el popup en el teléfono
# Si está vacío → revisa Depuración USB y modo de conexión USB

# Reiniciar el servidor adb (soluciona el 90% de problemas de conexión)
adb kill-server && adb start-server

# Ver estado del dispositivo ("device", "offline", o "unauthorized")
adb get-state

# Ver el número de serie del dispositivo
adb get-serialno

# ============================================================================
# 2. INSTALAR Y GESTIONAR APPS
# ============================================================================

# Instalar un APK (reemplaza si ya existe, SIN perder datos del usuario)
adb install -r ruta/al/archivo.apk
# -r = replace (sobreescribir sin desinstalar)

# Desinstalar la app completamente
adb uninstall com.ejemplo.miapp

# Desinstalar pero CONSERVAR los datos del usuario
adb uninstall -k com.ejemplo.miapp
# -k = keep data (útil para reinstalar sin perder la sesión/base de datos)

# Ver si una app está instalada
adb shell pm list packages | grep nombre_app

# Ver TODAS las apps instaladas
adb shell pm list packages

# Solo apps de terceros (no del sistema)
adb shell pm list packages -3

# Limpiar datos de la app (como "Borrar datos" en Ajustes)
adb shell pm clear com.ejemplo.miapp
# Borra base de datos, shared preferences, caché — vuelve al estado inicial

# Ver info detallada de una app (versión, permisos, etc.)
adb shell dumpsys package com.ejemplo.miapp | head -50

# Ver la versión instalada de una app
adb shell dumpsys package com.ejemplo.miapp | grep versionName

# ============================================================================
# 3. ABRIR Y CONTROLAR APPS
# ============================================================================

# Abrir una app por su activity principal
adb shell am start -n com.ejemplo.miapp/.MainActivity

# Abrir una app como si tocaras su ícono en el launcher
adb shell monkey -p com.ejemplo.miapp -c android.intent.category.LAUNCHER 1

# Forzar cierre de una app (kill)
adb shell am force-stop com.ejemplo.miapp

# Reiniciar una app (cerrar + abrir)
adb shell am force-stop com.ejemplo.miapp && \
adb shell am start -n com.ejemplo.miapp/.MainActivity

# Abrir una URL en el navegador del teléfono
adb shell am start -a android.intent.action.VIEW -d "https://google.com"

# Abrir los Ajustes del teléfono
adb shell am start -a android.settings.SETTINGS

# Abrir ajustes de WiFi
adb shell am start -a android.settings.WIFI_SETTINGS

# Abrir ajustes de desarrollador
adb shell am start -a android.settings.APPLICATION_DEVELOPMENT_SETTINGS

# ============================================================================
# 4. SCREENSHOTS Y GRABACIÓN DE VIDEO
# ============================================================================

# Tomar screenshot y traerlo a tu PC
adb shell screencap -p /sdcard/screen.png && adb pull /sdcard/screen.png ./screen.png

# Grabar video de la pantalla (máximo 3 minutos por defecto)
adb shell screenrecord /sdcard/video.mp4
# Presiona Ctrl+C para detener la grabación

# Traer el video a tu PC después de grabar
adb pull /sdcard/video.mp4 ./video.mp4

# Grabar con resolución reducida (archivo más ligero)
adb shell screenrecord --size 720x1280 /sdcard/video.mp4

# Grabar con límite de tiempo (en segundos, ej: 30s)
adb shell screenrecord --time-limit 30 /sdcard/video.mp4

# Grabar con bitrate reducido (archivo más pequeño, menor calidad)
adb shell screenrecord --bit-rate 4000000 /sdcard/video.mp4

# ============================================================================
# 5. LOGS Y DEBUGGING
# ============================================================================

# Ver TODOS los logs en tiempo real (muy ruidoso, miles de líneas por segundo)
adb logcat

# Filtrar logs por palabra clave
adb logcat | grep -i "mi_palabra"

# Ver solo errores (E = Error)
adb logcat *:E

# Ver warnings + errores (W = Warning)
adb logcat *:W

# Niveles de log disponibles (de menor a mayor severidad):
# V = Verbose (todo)
# D = Debug
# I = Info
# W = Warning
# E = Error
# F = Fatal

# Limpiar los logs acumulados (empezar desde cero)
adb logcat -c

# Guardar logs en un archivo (Ctrl+C para parar)
adb logcat > mis_logs.txt

# Ver el último crash de una app
adb shell logcat -b crash -d | grep -A 20 "nombre_app"

# Ver logs con timestamps legibles
adb logcat -v time | grep -i "nombre_app"

# Ver logs de un proceso específico por PID
adb logcat --pid=$(adb shell pidof com.ejemplo.miapp)

# ============================================================================
# 6. NAVEGACIÓN E INTERACCIÓN REMOTA
# ============================================================================

# --- TOQUES Y GESTOS ---

# Simular toque en coordenadas (x, y)
adb shell input tap 360 1200

# Simular toque largo (long press) — swipe de 0 pixeles en 1000ms
adb shell input swipe 360 1200 360 1200 1000

# Simular swipe/deslizar (de x1,y1 a x2,y2 en milisegundos)
adb shell input swipe 500 1500 500 500 300
# ↑ scroll hacia arriba

adb shell input swipe 500 500 500 1500 300
# ↑ scroll hacia abajo

adb shell input swipe 700 800 100 800 300
# ↑ swipe hacia la izquierda

adb shell input swipe 100 800 700 800 300
# ↑ swipe hacia la derecha

# --- TEXTO ---

# Escribir texto (simula teclado físico)
adb shell input text "hola_mundo"
# ⚠️ No soporta espacios ni @ ni caracteres especiales
# Para espacios usa %s:  adb shell input text "hola%smundo"

# --- TECLAS ESPECIALES ---

# Botón BACK (retroceder)
adb shell input keyevent 4

# Botón HOME
adb shell input keyevent 3

# Botón RECIENTES (app switcher)
adb shell input keyevent 187

# ENTER
adb shell input keyevent 66

# DELETE / BACKSPACE (borrar carácter)
adb shell input keyevent 67

# TAB (siguiente campo)
adb shell input keyevent 61

# ESCAPE
adb shell input keyevent 111

# POWER (encender/apagar pantalla)
adb shell input keyevent 26

# Subir volumen
adb shell input keyevent 24

# Bajar volumen
adb shell input keyevent 25

# Silenciar/desilenciar
adb shell input keyevent 164

# Tomar screenshot (tecla nativa)
adb shell input keyevent 120

# Play/Pause media
adb shell input keyevent 85

# Abrir cámara
adb shell input keyevent 27

# Referencia completa de keycodes:
# https://developer.android.com/reference/android/view/KeyEvent

# ============================================================================
# 7. TRANSFERENCIA DE ARCHIVOS
# ============================================================================

# Copiar archivo DEL TELÉFONO a tu PC
adb pull /sdcard/archivo.txt ./archivo_local.txt

# Copiar archivo DE TU PC al teléfono
adb push ./archivo_local.txt /sdcard/archivo.txt

# Copiar carpeta completa del teléfono
adb pull /sdcard/DCIM/Camera/ ./fotos_telefono/

# Enviar carpeta completa al teléfono
adb push ./mi_carpeta/ /sdcard/mi_carpeta/

# Ver archivos en una carpeta del teléfono
adb shell ls /sdcard/

# Ver archivos con detalles (tamaño, permisos, fecha)
adb shell ls -la /sdcard/

# Crear carpeta en el teléfono
adb shell mkdir /sdcard/mi_nueva_carpeta

# Borrar archivo del teléfono
adb shell rm /sdcard/archivo_a_borrar.txt

# Borrar carpeta del teléfono
adb shell rm -rf /sdcard/carpeta_a_borrar/

# ============================================================================
# 8. INFORMACIÓN DEL DISPOSITIVO
# ============================================================================

# Modelo del teléfono
adb shell getprop ro.product.model

# Marca del teléfono
adb shell getprop ro.product.brand

# Versión de Android (ej: "14", "13")
adb shell getprop ro.build.version.release

# Nivel de API (ej: "34" = Android 14)
adb shell getprop ro.build.version.sdk

# Resolución de pantalla
adb shell wm size

# Densidad de pantalla (DPI)
adb shell wm density

# Nivel de batería
adb shell dumpsys battery | grep level

# Estado de batería (cargando, descargando, etc.)
adb shell dumpsys battery

# Espacio en disco
adb shell df -h /data

# Memoria RAM disponible
adb shell cat /proc/meminfo | head -5

# Información de CPU
adb shell cat /proc/cpuinfo | head -10

# IP del teléfono (WiFi)
adb shell ip addr show wlan0 | grep "inet "

# Ver todas las propiedades del sistema
adb shell getprop

# ============================================================================
# 9. SHELL INTERACTIVO
# ============================================================================

# Abrir una terminal dentro del teléfono (como SSH)
adb shell
# Ya adentro puedes usar comandos Linux: ls, cd, cat, top, etc.
# Escribe "exit" para salir

# Ejecutar un comando directo sin entrar al shell
adb shell whoami
adb shell date
adb shell uname -a
adb shell uptime

# Ver procesos corriendo
adb shell ps | grep nombre_app

# Ver uso de CPU en tiempo real
adb shell top -n 1

# ============================================================================
# 10. WIFI DEBUGGING (SIN CABLE)
# ============================================================================

# Paso 1: Estando conectado por USB, activa modo TCP/IP
adb tcpip 5555

# Paso 2: Desconecta el cable USB

# Paso 3: Conecta por WiFi (reemplaza con la IP real de tu teléfono)
adb connect 192.168.1.XXX:5555
# Para ver la IP: Ajustes → WiFi → tu red → Dirección IP
# O: adb shell ip addr show wlan0 | grep "inet "

# Verificar que conectó
adb devices

# Desconectar WiFi debugging
adb disconnect 192.168.1.XXX:5555

# Volver al modo USB
adb usb

# ============================================================================
# 11. UTILIDADES AVANZADAS
# ============================================================================

# Reiniciar el teléfono
adb reboot

# Reiniciar en modo recovery
adb reboot recovery

# Reiniciar en modo bootloader/fastboot
adb reboot bootloader

# Hacer backup completo del teléfono
adb backup -all -f backup.ab

# Restaurar backup
adb restore backup.ab

# Activar/desactivar WiFi (requiere root en algunos dispositivos)
adb shell svc wifi enable
adb shell svc wifi disable

# Activar/desactivar datos móviles
adb shell svc data enable
adb shell svc data disable

# Activar modo avión
adb shell settings put global airplane_mode_on 1
adb shell am broadcast -a android.intent.action.AIRPLANE_MODE

# Desactivar modo avión
adb shell settings put global airplane_mode_on 0
adb shell am broadcast -a android.intent.action.AIRPLANE_MODE

# Cambiar brillo de pantalla (0-255)
adb shell settings put system screen_brightness 128

# Ver activity actual en primer plano (útil para saber qué pantalla estás viendo)
adb shell dumpsys activity activities | grep mResumedActivity

# ============================================================================
# FIN DEL CHEATSHEET
# Para más info: https://developer.android.com/tools/adb
# ============================================================================
