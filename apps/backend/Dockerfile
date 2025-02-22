FROM maven:3.8.5-openjdk-17 AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17
WORKDIR /app
COPY --from=builder /app/target/customer_manager.jar app.jar
ENTRYPOINT [ "java", "-jar", "app.jar"]