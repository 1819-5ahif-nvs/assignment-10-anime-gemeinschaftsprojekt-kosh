# JWT, JEE, WebComponents, Docker, Soteria

**Topic**: Anime  
**Application-Server**: Wildfly

## Quickstart

> docker-compose up  
> cd frontend  
> npm i  
> npm run build  
> npm start  

logins:
admin/passme -> hat alle Rechte  
test/pass -> kann nur bearbeiten und anzeigen  

Swagger-Dokumentation verfügbar unter <http://localhost:8080/anime/rs/apiee/index.html>

## Hauer

Frontend mit WebComponents

**Aufgaben**
* Konfiguration von Webpack & BrowserSync
* MockUp
* Implementierung und Design des Frontend
* Implementierung der Kommunikation mit dem Server
* Einarbeitung der API-Changes
* Aktivierung von CORS

**Tipp für CORS**
```xml
  <dependency>
    <groupId>com.airhacks</groupId>
    <artifactId>jaxrs-cors</artifactId>
    <version>0.0.2</version>
    <scope>compile</scope>
  </dependency>
```

Angestrebte Note: **1**  
Angestrebte Zeugnisnote: **2**

## Kneidinger

Docker mit Wildfly 16 (latest) und MariaDB

**Aufgaben**:

* docker-compose.yml mit MariaDB und Wildfly erstellen
* Dockerfile für Wildfly erstellen
  * MySQL-Client installieren
  * Java 8 installieren (vorinstalliertes Java 11 wirft Fehler)
  * Datasource mit Treiber aufsetzen
* Umgebungsvariablen korrekt setzen (Benutzernamen, Passwörter, DB-Name, ...)
* wait.sh-Datei (um auf die DB zu warten) erstellen und verwenden´
* Einarbeitung der API-Changes

Angestrebte Note: **1**  
Angestrebte Zeugnisnote: **1**

## Oberaigner

Backend mit JavaEE (CRUD + DB) und fetchen der Anime-Daten; Swagger; CORS-Filter um die HTTP-Header für die Fetch-Requests sichtbar zu machen (via WebFilter)

**Tipp für Swagger:**  
um den Swagger Editor direkt auf über den Wildfly hosten zu können, wurde lediglich folgende dependency eingebunden, wodurch der Editor automatisch auf <http://localhost:8080/anime/rs/apiee/index.html> aufrufbar ist:

``` xml
  <dependency>
      <groupId>com.github.phillip-kruger</groupId>
      <artifactId>apiee-core</artifactId>
      <version>1.0.8</version>
  </dependency>
```

Außerdem werden durch diese dependency die Swagger dependencies automatisch eigebunden und man kann die Endpoints annotieren.

Angestrebte Note: **2**  
Angestrebte Zeugnisnote: **2**

## Sheludchenko

Soteria

**Aufgaben**
* Implementierung von Soteria
* Implementierung der div. Rollen
* Implementierung von Login-Endpoint

Angestrebte Note: **4**  
Angestrebte Zeugnisnote: **4**

## Special Problems

### API-Änderungen während der Entwicklung

Die API der Seite, von der die Rohdaten kommen, hat sich während der Entwicklung geändert. Deswegen musste die Applikation noch einmal angepasst werden. Im Backend waren nur kleinere Änderungen notwendig, während im Frontend ein größerer Aufwand nötig war. Diese Änderungen wurden von Hauer und Kneidinger eingearbeitet.

### Probleme mit Docker
Aufgrund der Probleme mit Docker unter Windows (Container konnten nicht gestartet werden) mussten untereinander die Arbeitsgeräte getauscht werden und so hat Sheludchenko zum Teil auf dem Laptop von Kneidinger gearbeitet.
