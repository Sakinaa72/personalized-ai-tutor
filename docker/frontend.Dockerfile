FROM node:20
WORKDIR /app
COPY frontend/ /app/
RUN npm install
EXPOSE 3000
CMD ["npm","run","dev"]