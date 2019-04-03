import business.AnimeFacade;
import entities.Anime;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;
import java.util.Date;

@Singleton
@Startup
public class InitBean {
    @Inject
    private AnimeFacade animeFacade;

    @PostConstruct
    public void init(){
        animeFacade.save(new Anime("test",new Date(),new Date(),"url1","url2"));
    }
}
