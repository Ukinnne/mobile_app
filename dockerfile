# Используем официальный образ Node.js на Alpine (легковесный)
FROM node:18-alpine

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем ВЕСЬ проект (кроме указанного в .dockerignore)
COPY . .

# Собираем приложение (если используется CRA)
RUN npm run build

# Указываем порт, который будет использоваться
EXPOSE 3000

# Команда для запуска сервера
CMD ["npm", "start"]