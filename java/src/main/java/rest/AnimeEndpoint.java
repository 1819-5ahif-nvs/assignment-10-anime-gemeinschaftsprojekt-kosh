package rest;

import business.AnimeFacade;
import com.google.gson.GsonBuilder;
import entities.Anime;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.json.JSONObject;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.text.ParseException;
import java.text.SimpleDateFormat;

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
    @ApiOperation(value = "Add Anime")
    @Produces(MediaType.APPLICATION_JSON)
    public Response addAnime(@ApiParam(value = "jsonAnime", required = true) JSONObject json) throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        Anime anime = new Anime(json.getString("title"), sdf.parse(json.getString("airedFrom")), sdf.parse(json.getString("airedTo")), json.getString("videoURL"), json.getString("forumURL"));

        animeFacade.save(anime);
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
    @ApiOperation(value = "Update Anime")
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateAnime(@ApiParam(value = "jsonAnime", required = true) JSONObject json) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        Anime anime = animeFacade.getAnimeById(json.getLong("episodeId"));

        if(anime != null) { //check if Anime with that id really exists

            anime.setTitle(json.getString("title"));
            anime.setAiredFrom(sdf.parse(json.getString("airedFrom")));
            anime.setAiredTo(sdf.parse(json.getString("airedTo")));
            anime.setVideoURL(json.getString("videoURL"));
            anime.setForumURL(json.getString("forumURL"));
            animeFacade.save(anime);

            return Response.ok()
                    .build();
        }
        return Response.status(404).build();
    }

    @DELETE
    @ApiOperation(value = "Delete Anime")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/delete/{animeId}")
    public Response deleteAnime(@ApiParam(value = "expenditureId", required = true) @PathParam("animeId") Long animeId) {
        Anime anime = animeFacade.getAnimeById(animeId);
        if(anime != null) {
            animeFacade.delete(anime);
            return Response.ok().status(204)
                    .build();
        }
        return Response.status(404).build();
    }
}
