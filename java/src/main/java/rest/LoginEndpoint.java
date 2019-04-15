package rest;

import business.UserFacade;
import entities.User;
import entities.UserDTO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import rest.jwt.JWTCredential;
import rest.jwt.JWTStore;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;

@Path("login")
@Api(value="Login")
public class LoginEndpoint {
    @Inject
    private UserFacade userFacade;
    @Inject
    private JWTStore jwtStore;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get the JWT")
    public Response login(@ApiParam(value = "JsonCredentials", required = true) UserDTO credentials){
        User user = userFacade.find(credentials.getUsername());
        if(user != null && user.getPassword().equals(credentials.getPassword())) {
            JWTCredential jwt = jwtStore.generateJWT(user);
            return Response.ok()
                    .entity("{\"token\":\"" + jwt.getValue() + "\"}")
                    .build();
        }
        else
            return Response.status(400).build();
    }
}
