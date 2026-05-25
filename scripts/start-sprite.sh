#!/bin/bash
set -e

if [ -f /opt/app/.env.production ]; then
  set -a
  . /opt/app/.env.production
  set +a
fi

export PORT="${PORT:-8080}"
cd /opt/app

exec ./node_modules/.bin/vite preview --host 0.0.0.0 --port "$PORT" >/tmp/app-vite-preview.log 2>&1
