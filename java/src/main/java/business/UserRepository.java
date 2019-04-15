package business;

import entities.User;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class UserRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(User user) {
        em.merge(user);
    }

    public User find(String username) {
        return em.find(User.class, username);
    }
}
