#!/bin/sh
set -eu

urls='
https://factualist.org/ja/records/
https://factualist.org/ja/methodology/
https://factualist.org/records/ac55id-2025/relationship-map/?lang=ja
https://factualist.org/cases/
https://factualist.org/cases/ac55id/
https://factualist.org/records/ac55id-2025/
'

for url in $urls; do
  printf '\n%s\n' "$url"
  curl -sSI "$url" | sed -n '1,12p'
done
