## Pasos para desplegar el proyecto server del test para IQPixels

1. Crear un archivo `.env` en el root del proyeco
2. Agregar una variable de entorno llamada `SECRECT_TOKEN_LOGIN` que contendrá el valor del token de usuario
3. Agregar una variable de entorno llamada `URI_MONGODB` para contener la url de la base de datos(MongoDB)
3. (Opcional) Agregar una variable de entorno llamada `PORT` para el puerto (Por defecto: 9000)
4. Correr `yarn install` o `npm install` para instalar las dependencias
5. Correr `yarn run dev` o `npm run dev` para iniciar el proyecto
