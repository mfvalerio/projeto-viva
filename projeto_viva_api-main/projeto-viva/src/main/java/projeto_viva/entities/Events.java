package projeto_viva.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import projeto_viva.enums.EventStatus;

import java.time.LocalDateTime;
@Entity
@Data
@Table(name = "EVENTS")
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private Categories categories;

    String description;

    String address;

    @Column(name = "DATE_TIME_START")
    @JsonFormat(pattern="dd/MM/yyyy HH:mm")
    LocalDateTime dateTimeStart;

    @Column(name = "DATE_TIME_END")
    @JsonFormat(pattern="dd/MM/yyyy HH:mm")
    LocalDateTime dateTimeEnd;

    @Enumerated(EnumType.STRING)
    EventStatus status;

}
