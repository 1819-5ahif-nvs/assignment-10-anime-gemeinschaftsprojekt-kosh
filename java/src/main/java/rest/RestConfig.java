package rest;

import io.swagger.jaxrs.config.BeanConfig;

import javax.annotation.Resource;
import javax.annotation.security.DeclareRoles;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("rs")
@DeclareRoles("user")
public class RestConfig extends Application {

    public RestConfig() {
        init();
    }

    private void init() {
        BeanConfig beanConfig = new BeanConfig();
        beanConfig.setVersion("1.0.0");
        beanConfig.setSchemes(new String[]{"http"});
        beanConfig.setHost("localhost:8080");
        beanConfig.setBasePath("anime/rs");
        beanConfig.setResourcePackage("rest");
        beanConfig.setTitle("Anime - Server");
        beanConfig.setDescription("REST documentation");
        beanConfig.setScan(true);
    }
}