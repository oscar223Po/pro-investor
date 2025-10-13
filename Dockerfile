# --- Этап сборки ---
FROM node:20-alpine AS build

WORKDIR /app

# Устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходники и собираем проект
COPY . .
RUN npm run build

# --- Этап запуска ---
FROM nginx:stable-alpine

# Копируем собранный билд в директорию nginx
COPY --from=build /app/dist /usr/share/nginx/html

# При желании можно подложить свой конфиг nginx:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
