package business;

import entities.User;

import javax.enterprise.context.ApplicationScoped;
import java.util.LinkedList;
import java.util.List;

public class UserRepository {
    private List<User> users = new LinkedList<>();

    public UserRepository() {
        users.add(new User());
        users.add(new User("Test", "pass"));
    }

    public User find(String username){
        if(username.equals("Test"))
            return users.get(1);
        else
            return users.get(0);

    }
}
