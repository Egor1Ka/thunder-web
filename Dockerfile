# ---------- Build stage ----------
FROM node:22-alpine AS build

# Опционально (иногда помогает с бинарями)
RUN apk add --no-cache libc6-compat
    
WORKDIR /app
    
# Копируем только манифесты для кеша зависимостей
COPY package.json package-lock.json* ./

# Устанавливаем зависимости для сборки
# npm ci гарантирует repeatable install; при отсутствии lock-файла fallback на npm install
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Копируем остальной исходный код
COPY . .
    
# Сборка Nuxt (Nitro выдаст .output/)
RUN npm run build
    
# ---------- Runtime stage ----------
FROM node:22-alpine AS prod
    
WORKDIR /app
    
# Копируем только собранный артефакт
COPY --from=build /app/.output ./.output
    
# Порт Nuxt по умолчанию
EXPOSE 3000
    
# Запуск Nitro-сервера
CMD ["node", ".output/server/index.mjs"]
    