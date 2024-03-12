package com.meubles.backmeubles.repositoryBdd;

import com.meubles.backmeubles.bdd.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositoryUser extends JpaRepository<User, Integer> {
    Optional<User> findByEmailAndMdp(String email, String mdp);
}

