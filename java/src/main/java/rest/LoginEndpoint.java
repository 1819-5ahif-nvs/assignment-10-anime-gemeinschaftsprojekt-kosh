package rest;

import business.UserRepository;
import entities.User;
import rest.jwt.JWTCredential;
import rest.jwt.JWTStore;

import javax.inject.Inject;
import javax.json.JsonObject;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;

@Path("login")
public class LoginEndpoint {
    
    private UserRepository repo = new UserRepository();
    @Inject
    private JWTStore jwtStore;

    @POST
    public Response login(JsonObject credentials){
        User user = repo.find(credentials.getString("username"));
        if(user != null && user.getPassword() == credentials.getString("password")) {
            JWTCredential jwt = jwtStore.generateJWT(user);
            return Response.ok().header(HttpHeaders.AUTHORIZATION, "BEARER " + jwt.getValue()).build();
        }
        else
            return Response.status(400).build();
    }
}