package com.meubles.backmeubles.bdd;
import jakarta.annotation.Resource;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="users")
@Getter
@Setter
@RequiredArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "image_user", referencedColumnName = "id")
    private Image image_user;

    private String email;

    private String mdp;
    private String nom;
    private Boolean admin = false;


}
