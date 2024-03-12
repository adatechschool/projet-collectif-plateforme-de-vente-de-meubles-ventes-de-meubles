package com.meubles.backmeubles.bdd;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@Table(name = "meubles")
public class Meuble {
    @Getter
    @jakarta.persistence.Id
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

    private Integer stock = 0;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)

    private User user;

    @OneToMany(mappedBy = "meuble", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Image> images;

    public void setId(Long id) {
        this.id = Math.toIntExact(id);
    }

}
