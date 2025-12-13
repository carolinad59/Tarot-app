#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFilter
import math

# Splash screen dimensions (iPhone X/11 Pro: 2436x1125px)
width, height = 2436, 1125

# Create image with dark background
img = Image.new('RGB', (width, height), color='#0b132b')
draw = ImageDraw.Draw(img, 'RGBA')

# Add gradient overlay (dark blue to slightly lighter blue)
for y in range(height):
    # Gradient from #0b132b to #1c2541
    r = int(11 + (28 - 11) * (y / height))
    g = int(19 + (37 - 19) * (y / height))
    b = int(43 + (65 - 43) * (y / height))
    draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

# Add gold accent stars and mystical elements
gold = '#d4af37'
gold_rgb = (212, 175, 55, 220)
light_gold = (255, 215, 0, 180)

# Draw decorative stars
def draw_star(x, y, size, color):
    """Draw a 5-pointed star"""
    points = []
    for i in range(10):
        angle = math.pi / 2 + (i * math.pi / 5)
        if i % 2 == 0:  # Outer points
            r = size
        else:  # Inner points
            r = size * 0.4
        px = x + r * math.cos(angle)
        py = y - r * math.sin(angle)
        points.append((px, py))
    draw.polygon(points, fill=color)

# Place stars around the composition
star_positions = [
    (200, 150, 25, gold_rgb),
    (2236, 250, 30, gold_rgb),
    (400, 800, 20, light_gold),
    (2000, 900, 25, light_gold),
    (1218, 300, 35, gold_rgb),  # Center top
]

for x, y, size, color in star_positions:
    draw_star(x, y, size, color)

# Add central circle with mystical glow effect
center_x, center_y = width // 2, height // 2

# Draw concentric circles for mystical effect
for radius in range(150, 0, 10):
    alpha = int(100 * (1 - radius / 150))
    circle_color = (212, 175, 55, alpha)
    draw.ellipse(
        [(center_x - radius, center_y - radius), 
         (center_x + radius, center_y + radius)],
        outline=circle_color,
        width=3
    )

# Add "Tarot de Marsella" text in the center
try:
    # Try to load a system font, fallback to default
    from PIL import ImageFont
    try:
        title_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 90)
        subtitle_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 45)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Title
    title = "Tarot"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (width - title_width) // 2
    title_y = center_y - 80
    draw.text((title_x, title_y), title, fill=(212, 175, 55, 255), font=title_font)
    
    # Subtitle
    subtitle = "de Marsella"
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (width - subtitle_width) // 2
    subtitle_y = center_y + 20
    draw.text((subtitle_x, subtitle_y), subtitle, fill=(212, 175, 55, 200), font=subtitle_font)
except Exception as e:
    print(f"Text rendering note: {e}")

# Save the image
output_path = '/Users/carolinedarche/tarot-app/splash-screen.png'
img.save(output_path, 'PNG')
print(f"✓ Splash screen created: {output_path}")
print(f"  Dimensions: {width}x{height}px")
print(f"  Colors: Dark blue (#0b132b) with gold (#d4af37) accents")
