package rest;

import business.AnimeFacade;
import com.google.gson.GsonBuilder;
import io.swagger.annotations.ApiOperation;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("anime")
public class AnimeEndpoint {
    @Inject
    private AnimeFacade animeFacade;

    @GET
    @ApiOperation(value = "Get all Animes")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCustomerItemsByDate() {
        return Response.ok()
                .status(200)
                .entity(new GsonBuilder().create().toJson(animeFacade.getAllAnimes()))
                .build();
    }
}
