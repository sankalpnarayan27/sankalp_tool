# Xebia Assessment Tool

The application consists of two modules:

1. `frontend`: This is SPA react application
2. `backend`: This provides the backend APIs of the application

## Building project

To build the project, you have to run following command. This will build both the frontend and backend

```
$ ./gradlew clean build
```

> You don't have to type `$` it signifies command-prompt.

## Run the application

To run the complete application, you need to run the following command.

```
$ java -jar backend/build/libs/backend.jar
```

If you want to use in-memory database then you have to run following command.

```
$ java -Dspring.profiles.active=test -jar backend/build/libs/backend.jar
```

## Running frontend seperately

Go to `frontend` directory and run `npm run` command.

https://xebia-assessment-tool.herokuapp.com/

