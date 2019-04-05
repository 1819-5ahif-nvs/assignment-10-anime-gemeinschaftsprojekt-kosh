package business;

import entities.Anime;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
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
        try {
            return em
                    .createNamedQuery("Anime.getAllAnimes")
                    .getResultList();
        }catch(NoResultException ex){
            return null;
        }
    }
    public Anime getAnimeById(Long episodeId){
        try {
            return (Anime) em
                    .createNamedQuery("Anime.getAnimeById")
                    .setParameter("episodeId", episodeId)
                    .getSingleResult();
        }catch(NoResultException ex){
            return null;
        }
    }
    public void delete(Anime anime){
        em.remove(anime);
    }
}
