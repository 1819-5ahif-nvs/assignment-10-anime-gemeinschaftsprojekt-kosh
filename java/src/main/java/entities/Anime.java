package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Anime implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long episodeId;

    private String title;
    private Date airedFrom;
    private Date airedTo;
    private String videoURL;
    private String forumURL;

    //region constructors
    public Anime(String title, Date airedFrom, Date airedTo, String videoURL, String forumURL) {
        this.title = title;
        this.airedFrom = airedFrom;
        this.airedTo = airedTo;
        this.videoURL = videoURL;
        this.forumURL = forumURL;
    }

    public Anime() {
    }
    //endregion

    //region getter and setter
    public Long getEpisodeId() {
        return episodeId;
    }

    public void setEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getAiredFrom() {
        return airedFrom;
    }

    public void setAiredFrom(Date airedFrom) {
        this.airedFrom = airedFrom;
    }

    public Date getAiredTo() {
        return airedTo;
    }

    public void setAiredTo(Date airedTo) {
        this.airedTo = airedTo;
    }

    public String getVideoURL() {
        return videoURL;
    }

    public void setVideoURL(String videoURL) {
        this.videoURL = videoURL;
    }

    public String getForumURL() {
        return forumURL;
    }

    public void setForumURL(String forumURL) {
        this.forumURL = forumURL;
    }
    //endregion
}