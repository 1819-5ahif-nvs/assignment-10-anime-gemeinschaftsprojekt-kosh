package rest;

import business.AnimeFacade;
import com.google.gson.GsonBuilder;
import entities.Anime;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@RolesAllowed({"admin", "user"})
@Api(value="Anime")
@Path("episode")
public class AnimeEndpoint {
    @Inject
    private AnimeFacade animeFacade;

    @GET
    @RolesAllowed({"user", "admin"})
    @ApiOperation(value = "Get all Animes")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCustomerItemsByDate() {
        return Response.ok()
                .status(200)
                .entity(new GsonBuilder().create().toJson(animeFacade.getAllAnimes()))
                .build();
    }

    /*
    POST example:
    {
    "title": "testEpisode",
    "airedFrom": "21-01-2019",
    "airedTo": "24-03-2019",
    "videoURL":"http://google.at",
    "forumURL":"http://google.at"
    }
    */
    @POST
    @RolesAllowed("admin")
    @ApiOperation(value = "Add Anime")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addAnime(@ApiParam(value = "jsonAnime", required = true) Anime a) {
        animeFacade.save(a);
        return Response.ok().status(201)
                .build();
    }

    /*
    PUT example:
    {
    "episodeId":26,
    "title": "testEpisode2",
    "airedFrom": "21-01-2019",
    "airedTo": "24-03-2019",
    "videoURL":"http://google.at",
    "forumURL":"http://google.at"
    }
    */
    @PUT
    @RolesAllowed({"user", "admin"})
    @ApiOperation(value = "Update Anime")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateAnime(@ApiParam(value = "jsonAnime", required = true) Anime a) {

        System.out.println(a.getTitle());
        Anime anime = animeFacade.getAnimeById(a.getEpisodeId());
        if(anime != null) { //check if Anime with that id really exists
            animeFacade.save(a);

            return Response.ok()
                    .build();
        }
        return Response.status(404).build();
    }

    @DELETE
    @ApiOperation(value = "Delete Anime")
    @RolesAllowed("admin")
    @Path("/{animeId}")
    public Response deleteAnime(@ApiParam(value = "expenditureId", required = true) @PathParam("animeId") Long animeId) {
        Anime anime = animeFacade.getAnimeById(animeId);
        if(anime != null) {
            animeFacade.delete(animeId);
            return Response.ok().status(204)
                    .build();
        }
        return Response.status(404).build();
    }
}
