package rest;

import javax.annotation.security.DeclareRoles;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("rs")
@DeclareRoles({"user", "admin"})
public class RestConfig extends Application {

}