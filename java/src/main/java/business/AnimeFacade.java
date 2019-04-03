package business;

import entities.Anime;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class AnimeFacade {
    @PersistenceContext
    private EntityManager em;

    public void save(Anime anime){
        em.merge(anime);
    }

    public List<Anime> getAllAnimes() {
        return em.createNamedQuery("Anime.getAllAnimes").getResultList();
    }
}
