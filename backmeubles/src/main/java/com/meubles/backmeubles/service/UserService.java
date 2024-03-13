package com.meubles.backmeubles.service;

import com.meubles.backmeubles.bdd.User;
import com.meubles.backmeubles.repositoryBdd.RepositoryUser;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;



import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements tableService<User>{

    private final RepositoryUser repositoryUser;
    @Override
    public User creer(User user) {
        return repositoryUser.save(user);
    }

    @Override
    public List<User> lire() {
        return repositoryUser.findAll();
    }
    public Optional<User> findByEmailAndPassword(String email, String password) {
        return repositoryUser.findByEmailAndMdp(email, password);
    }
    @Override
    public User modifier(Integer id, User user) {
        return repositoryUser.findById(id)
        .map(u -> { u.setNom(user.getNom());
            u.setEmail(user.getEmail());
            u.setMdp(user.getMdp());
            u.setAdmin(user.getAdmin());
            return repositoryUser.save(u);

        }).orElseThrow(()->new RuntimeException("User non trouvé"));
    }

    @Override
    public String supprimer(Integer id) {
        repositoryUser.deleteById(id);
        return "User supprimé";
    }
}
