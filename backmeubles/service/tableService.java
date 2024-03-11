package com.meubles.backmeubles.service;
import com.meubles.backmeubles.bdd.Meuble;
import java.util.List;

public interface tableService <Objet> {
        Objet creer (Objet objet);
        List<Objet> lire ();
        Objet modifier(Integer id, Objet objet);
        String supprimer(Integer id);
}
