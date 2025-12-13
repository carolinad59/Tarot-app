#!/usr/bin/env python3
"""
Script para generar iconos PWA para la app de Tarot
Crea archivos PNG usando generación de bytes puros
"""

import struct
import zlib
import math

def create_png(width, height, draw_func):
    """Crea un PNG de forma básica (sin librerías externas)"""
    # Crear datos RGBA (4 bytes por pixel)
    pixels = bytearray(width * height * 4)
    
    # Inicializar fondo y llamar función de dibujo
    for i in range(0, len(pixels), 4):
        pixels[i] = 11      # R (0b132b -> 11)
        pixels[i+1] = 19    # G
        pixels[i+2] = 43    # B
        pixels[i+3] = 255   # A
    
    draw_func(pixels, width, height)
    
    # Convertir a filas PNG
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)  # filter type
        row_start = y * width * 4
        raw_data.extend(pixels[row_start:row_start + width * 4])
    
    compressed = zlib.compress(bytes(raw_data), 9)
    
    # Escribir PNG
    png = bytearray()
    png.extend(b'\x89PNG\r\n\x1a\n')
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    png.extend(_create_chunk(b'IHDR', ihdr_data))
    
    # IDAT chunk
    png.extend(_create_chunk(b'IDAT', compressed))
    
    # IEND chunk
    png.extend(_create_chunk(b'IEND', b''))
    
    return bytes(png)

def _create_chunk(chunk_type, data):
    """Crea un chunk PNG"""
    chunk_data = chunk_type + data
    crc = zlib.crc32(chunk_data) & 0xffffffff
    return struct.pack('>I', len(data)) + chunk_data + struct.pack('>I', crc)

def draw_icon(pixels, width, height):
    """Dibuja el icono del tarot (dorado y azul oscuro)"""
    border = width // 10
    
    # Gradiente de fondo
    for y in range(height):
        for x in range(width):
            idx = (y * width + x) * 4
            # Gradiente del azul oscuro
            factor = (x + y) / (width + height)
            pixels[idx] = int(11 + (28 - 11) * factor)      # R
            pixels[idx+1] = int(19 + (37 - 19) * factor)    # G
            pixels[idx+2] = int(43 + (65 - 43) * factor)    # B
            pixels[idx+3] = 255
    
    # Borde dorado
    for y in range(height):
        for x in range(width):
            if (y < border or y >= height - border or 
                x < border or x >= width - border):
                idx = (y * width + x) * 4
                pixels[idx] = 212     # R (#d4af37)
                pixels[idx+1] = 175   # G
                pixels[idx+2] = 55    # B
    
    # Cuadrado interior dorado (más pequeño)
    inner_border = border + 5
    for y in range(inner_border, height - inner_border):
        for x in range(inner_border, width - inner_border):
            if (y == inner_border or y == height - inner_border - 1 or 
                x == inner_border or x == width - inner_border - 1):
                idx = (y * width + x) * 4
                pixels[idx] = 212
                pixels[idx+1] = 175
                pixels[idx+2] = 55

def draw_screenshot(pixels, width, height):
    """Dibuja el screenshot de preview"""
    # Fondo gradiente oscuro
    for y in range(height):
        for x in range(width):
            idx = (y * width + x) * 4
            factor = y / height
            pixels[idx] = int(11 + (28 - 11) * factor)
            pixels[idx+1] = int(19 + (37 - 19) * factor)
            pixels[idx+2] = int(43 + (65 - 43) * factor)
            pixels[idx+3] = 255
    
    # Rectángulo dorado (play area simulado)
    left = (width - 360) // 2
    top = height // 5
    
    # Borde
    for y in range(top, top + 400):
        for x in range(left, left + 360):
            if (y == top or y == top + 399 or x == left or x == left + 359):
                idx = (y * width + x) * 4
                pixels[idx] = 212
                pixels[idx+1] = 175
                pixels[idx+2] = 55

# Generar los tres archivos
print("Generando iconos PWA...")

icon_192 = create_png(192, 192, draw_icon)
with open('/Users/carolinedarche/tarot-app/icon-192.png', 'wb') as f:
    f.write(icon_192)
print("✓ icon-192.png creado")

icon_512 = create_png(512, 512, draw_icon)
with open('/Users/carolinedarche/tarot-app/icon-512.png', 'wb') as f:
    f.write(icon_512)
print("✓ icon-512.png creado")

screenshot = create_png(540, 720, draw_screenshot)
with open('/Users/carolinedarche/tarot-app/screenshot-540x720.png', 'wb') as f:
    f.write(screenshot)
print("✓ screenshot-540x720.png creado")

print("\n¡Listos! Los 3 archivos han sido generados.")
print("Ahora la app está completamente lista para desplegar como PWA.")
