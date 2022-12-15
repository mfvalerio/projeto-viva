package com.projeto.viva.controllers;

import com.projeto.viva.entities.Events;
import com.projeto.viva.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Events> findAll() {

        return eventService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Events findById(@PathVariable final Long id) {

        return eventService.findById(id);
    }

    @PutMapping("/{id}")
//    @PreAuthorize("hasAuthority('ROLE_ATUALIZAR') and #oauth2.hasScope('write')")
    @ResponseStatus(HttpStatus.OK)
    public Events update(@PathVariable final Long id, @Valid @RequestBody final Events event) {

        return eventService.update(id, event);
    }

    @PostMapping("/new-event")
//    @PreAuthorize("hasAuthority('ROLE_CADASTRAR') and #oauth2.hasScope('write')")
    @ResponseStatus(HttpStatus.CREATED)
    public Events save(@Valid @RequestBody final Events event) {

        return eventService.save(event);
    }
}
