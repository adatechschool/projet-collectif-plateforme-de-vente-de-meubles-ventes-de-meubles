package com.meubles.backmeubles.bdd;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;



@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    @Lob
    @Column(name = "image", length = 1000)
    private byte[] image;
}

