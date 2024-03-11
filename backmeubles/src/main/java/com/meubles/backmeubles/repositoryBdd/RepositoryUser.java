package com.meubles.backmeubles.repositoryBdd;

import com.meubles.backmeubles.bdd.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryUser extends JpaRepository<User, Integer> {
}
