import business.AnimeFacade;
import business.UserFacade;
import entities.Anime;
import entities.User;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Singleton
@Startup
public class InitBean {
    @Inject
    private AnimeFacade animeFacade;
    @Inject
    private UserFacade userFacade;
    private final String USER_AGENT = "Mozilla/5.0";

    @PostConstruct
    public void init() {
        userFacade.save(new User("admin", "passme", "admin"));
        userFacade.save(new User("test", "pass", "user"));

        List<Anime> list = new ArrayList<>();
        try {
            list = fetchAnimes("https://api.jikan.moe/v3/anime/1/episodes/1"); //url for REST Endpoint
        } catch (IOException e) {
            System.out.println("ERROR: no internet connection !");
        } catch (ParseException e) {
            e.printStackTrace();
        }

        for (Anime anime : list) { //persist all Animes
            animeFacade.save(anime);
        }
    }

    public List<Anime> fetchAnimes(String url) throws IOException, ParseException {
        HttpClient client = HttpClientBuilder.create().build();
        HttpGet request = new HttpGet(url);
        request.addHeader("User-Agent", USER_AGENT);
        HttpResponse response;

        response = client.execute(request);

        BufferedReader rd = new BufferedReader(
                new InputStreamReader(response.getEntity().getContent()));

        StringBuilder result = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            result.append(line);
        }

        //read every episode and persist as Anime
        JSONObject jsonObj = new JSONObject(result.toString());
        JSONArray jsonArr = jsonObj.getJSONArray("episodes");

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        List<Anime> animeList = new ArrayList<>();

        String dateFrom;
        String dateTo = "";
        for (int i = 0; i < jsonArr.length(); i++) {
            jsonObj = jsonArr.getJSONObject(i);
            animeList.add(new Anime(jsonObj.getString("title"), LocalDate.parse(jsonObj.optString("aired", "9999-01-01T").split("T")[0], formatter), jsonObj.getString("video_url"), jsonObj.getString("forum_url"))); //if date from or to is null, set default date
        }

        return animeList;
    }

}
