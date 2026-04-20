<<<<<<< HEAD
FROM node:18
WORKDIR /app
COPY . .
EXPOSE 3000
=======
FROM node:18
WORKDIR /app
COPY . .
EXPOSE 3000
>>>>>>> 66a87154cb2cf4e9fc3f9c7e436ba04340b4b19a
CMD ["node", "app.js"]