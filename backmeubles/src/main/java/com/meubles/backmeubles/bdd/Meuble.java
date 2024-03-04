package com.meubles.backmeubles.bdd;
import jakarta.persistence.*;

@Entity
@Table(name="meubles")
public class Meuble {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nom;
    @Enumerated(EnumType.STRING)
    private Types type;
    private Integer prix;
    private String dimension;
    @Enumerated(EnumType.STRING)
    private Couleurs couleurs;
    @Enumerated(EnumType.STRING)
    private Matieres matieres;
    @Column(length = 150)
    private String description;
}

