#!/bin/sh
set -eu

urls='
https://factualist.org/records/
https://factualist.org/records/music-commissioning-authority-2021/
https://factualist.org/records/ac55id-2025/
https://factualist.org/records/ac55id-2025/relationship-map/
https://factualist.org/records/nichion-valse-2021/
https://factualist.org/records/nichion-valse-2021/ja/
https://factualist.org/records/nichion-valse-2021/es/
https://factualist.org/records/nichion-valse-2021/de/
https://factualist.org/records/nichion-valse-2021/fr/
https://factualist.org/records/nichion-valse-2021/sk/
https://factualist.org/records/epm-music-2026/
'

for url in $urls; do
  printf '\n%s\n' "$url"
  curl -sSI "$url" | sed -n '1,12p'
done
