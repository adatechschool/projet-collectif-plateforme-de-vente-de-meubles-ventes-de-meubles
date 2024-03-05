package com.meubles.backmeubles.service;

import com.meubles.backmeubles.bdd.Meuble;
import com.meubles.backmeubles.repositoryBdd.RepositoryMeuble;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MeubleService implements tableService<Meuble>{

    private final RepositoryMeuble repositoryMeuble;

    @Override
    public Meuble creer(Meuble meuble) {
        return repositoryMeuble.save(meuble);
    }

    @Override
    public List<Meuble> lire() {
        return repositoryMeuble.findAll();
    }

    @Override
    public Meuble modifier(Integer id, Meuble meuble) {
        return repositoryMeuble.findById(id)
                .map(m ->{
                    m.setNom(meuble.getNom());
                    m.setType(meuble.getType());
                    m.setPrix(meuble.getPrix());
                    m.setDimension(meuble.getDimension());
                    m.setCouleurs(meuble.getCouleurs());
                    m.setMatieres(meuble.getMatieres());
                    m.setDescription(meuble.getDescription());
                    return repositoryMeuble.save(m);
                }).orElseThrow(()-> new RuntimeException("Meuble non trouvé"));
    }

    @Override
    public String supprimer(Integer id) {
        repositoryMeuble.deleteById(id);
        return "Meuble Supprimé";
    }
}
