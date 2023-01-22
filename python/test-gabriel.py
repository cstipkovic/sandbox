from PIL import Image, ImageDraw
import random

# Cria uma imagem com as dimensões 300x300
image = Image.new("RGB", (300, 300))

# Cria um objeto para desenhar na imagem
draw = ImageDraw.Draw(image)

# Gera formas aleatórias na imagem
for _ in range(100):
  x1 = random.randint(0, 300)
  y1 = random.randint(0, 300)
  x2 = random.randint(0, 300)
  y2 = random.randint(0, 300)
  draw.line((x1, y1, x2, y2), fill=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))

# Salva a imagem
image.save("abstract.jpg")