import re

with open("index.html", "r", encoding="utf-8") as f:
    c = f.read()

# Meta and titles
c = re.sub(r'<title>Hark</title>', '<title>SAVR | Hospitality Intelligence Platform</title>', c)
c = re.sub(r'content="At Hark, we are building the most advanced personal intelligence in the world."', 'content="Turn invisible kitchen losses into visible, measurable savings. India\'s first all-in-one AI-powered kitchen ecosystem for 4-5 star hotel properties."', c)
c = re.sub(r'content="Hark"', 'content="SAVR"', c)

# Main Hero text
c = re.sub(r'<span class="portable-text-module-scss-module__2yjBQq__basicBlock">At Hark, we are building the most advanced personal intelligence in the world.</span>', '<span class="portable-text-module-scss-module__2yjBQq__basicBlock">Turn invisible kitchen losses into visible, measurable savings.</span>', c)

# Beta text
c = re.sub(r'<span class="portable-text-module-scss-module__2yjBQq__basicBlock">Hark is entering beta</span>', '<span class="portable-text-module-scss-module__2yjBQq__basicBlock">SAVR is entering beta</span>', c)

# Copyright
c = re.sub(r'>Hark © 2026<', '>SAVR © 2026<', c)
c = re.sub(r'>Hark ©', '>SAVR ©', c) # Failsafe

# Any remaining "Hark" visible text (excluding links/urls if possible)
c = re.sub(r'>Hark<', '>SAVR<', c)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(c)

print("Title and Meta and Hero Replacements Complete")
