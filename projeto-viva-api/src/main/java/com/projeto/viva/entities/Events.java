package com.projeto.viva.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.projeto.viva.enums.EventStatus;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@Table(name = "EVENTS")
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    @NotNull
    private Categories category;

    @NotNull
    String description;

    @NotNull
    String address;

    @Column(name = "DATE_EVENT")
    @JsonFormat(pattern="dd/MM/yyyy")
    LocalDate date;

    @Column(name = "TIME_START")
    @JsonFormat(pattern="HH:mm")
    LocalTime timeStart;

    @Column(name = "TIME_END")
    @JsonFormat(pattern="HH:mm")
    LocalTime timeEnd;

    @NotNull
    @Enumerated(EnumType.STRING)
    EventStatus status;

}
