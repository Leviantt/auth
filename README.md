# Проект на стеке Nest.js, PostgreSQL и TypeORM

Этот проект использует фреймворк Nest.js, базу данных PostgreSQL и ORM TypeORM. Для развертывания проекта необходимо иметь работающий Docker и запустить скрипт `start.sh`.

## Развертывание

Для запуска проекта с помощью Docker выполните следующие шаги:

1. Убедитесь, что у вас установлен и работает Docker.
2. Клонируйте этот репозиторий на локальную машину:

   ```shell
   git clone https://github.com/Leviantt/auth
   ```
3. Перейдите в корневую директорию проекта.
   ```shell
   cd auth
   ```
4. Создайте в директории infrastructure файл .env на основе .env.example
5. Выполните команду:

   ```shell
   sh start.sh
   ```

   Этот скрипт соберет Docker-контейнеры для приложения и базы данных, запустит их.

6. После успешного запуска, ваше приложение будет доступно по адресу `http://localhost:4000`.
