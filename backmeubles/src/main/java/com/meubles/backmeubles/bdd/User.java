package com.meubles.backmeubles.bdd;
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
    @NonNull
    private String email;
    @NonNull
    private String mdp;
    @NonNull
    private String nom;
    private Boolean admin = false;
}
