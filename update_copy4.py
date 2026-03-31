import re

with open("index.html", "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace("https://hark.com", "https://savr.com")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(c)

print("Canonical tag replaced.")
