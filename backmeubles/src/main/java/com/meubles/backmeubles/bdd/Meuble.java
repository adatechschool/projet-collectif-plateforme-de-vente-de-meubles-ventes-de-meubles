package com.meubles.backmeubles.bdd;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
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

