# JWT, JEE, WebComponents, Docker, Soteria

**Topic**: Anime  
**Application-Server**: Wildfly

## Quickstart

> docker-compose up

Swagger-Dokumentation verfügbar unter <http://localhost:8080/anime/rs/apiee/index.html>

## Hauer

Frontend mit WebComponents

## Kneidinger

Docker mit Wildfly 16 (latest) und MariaDB

## Oberaigner

Backend mit JavaEE und fetchen der Anime-Daten; Swagger

**Tipp für Swagger:** <br>
um den Swagger Editor direkt auf über den Wildfly hosten zu können, wurde lediglich folgende dependency eingebunden, wodurch der Editor automatisch auf <http://localhost:8080/anime/rs/apiee/index.html> aufrufbar ist:
```
  <dependency>
      <groupId>com.github.phillip-kruger</groupId>
      <artifactId>apiee-core</artifactId>
      <version>1.0.8</version>
  </dependency>
```
Außerdem werden durch diese dependency die Swagger dependencies automatisch eigebunden und man kann die Endpoints annotieren.

## Sheludchenko

Soteria
