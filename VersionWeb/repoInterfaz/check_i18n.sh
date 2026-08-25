#!/usr/bin/env bash
# @fp-path: check_i18n.sh
set -e

echo "== 1. i18n ya instalado? =="
command grep -riE "next-intl|useTranslations|getTranslations" package.json src -l 2>/dev/null || echo "(nada encontrado)"

echo ""
echo "== 2. Volumen de strings JSX literales por archivo (heurística) =="
rg -c ">[A-Za-z][^<{]{3,}<" src/components src/app -g "*.tsx" 2>/dev/null | sort -t: -k2 -n -r | head -30

echo ""
echo "== 3. Helper centralizado de moneda/fecha? =="
rg -n "formatCurrency|Intl.NumberFormat|date-fns" src/lib src/components -g "*.ts*" 2>/dev/null || echo "(nada encontrado)"

echo ""
echo "== 4. middleware.ts existente? =="
find . -maxdepth 1 -iname "middleware.ts" 2>/dev/null || echo "(no existe)"

echo ""
echo "== 5. Baseline de bundle (Route (app)) =="
pnpm build 2>&1 | grep -A 20 "Route (app)"
