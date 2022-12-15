package com.projeto.viva.entities;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
@Table(name = "CATEGORIES")
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CATEGORY_NAME")
    private String categoryName;

}
