package com.meubles.backmeubles.repositoryBdd;


import ch.qos.logback.core.pattern.parser.OptionTokenizer;
import com.meubles.backmeubles.bdd.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositoryImage extends JpaRepository<Image, Long> {
        Optional<Image> findByName(String name);
    }

