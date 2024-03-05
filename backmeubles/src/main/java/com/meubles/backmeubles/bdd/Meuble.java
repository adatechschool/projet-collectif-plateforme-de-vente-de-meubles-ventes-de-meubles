package com.meubles.backmeubles.bdd;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@Table(name="meubles")
public class Meuble {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NonNull
    private String nom;
    @Enumerated(EnumType.STRING)
    @NonNull
    private Types type;
    @NonNull
    private Integer prix;
    private String dimension;
    @Enumerated(EnumType.STRING)
    private Couleurs couleurs;
    @Enumerated(EnumType.STRING)
    private Matieres matieres;
    @Column(length = 150)
    @NonNull
    private String description;
}

