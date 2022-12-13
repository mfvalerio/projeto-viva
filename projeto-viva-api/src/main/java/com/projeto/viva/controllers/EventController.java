package com.projeto.viva.controllers;

import com.projeto.viva.entities.Events;
import com.projeto.viva.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    @ResponseStatus(HttpStatus.OK)
    public Events update(@PathVariable final Long id, @RequestBody final Events event) {

        return eventService.save(event);
    }

    @PostMapping("/new-event")
    @ResponseStatus(HttpStatus.CREATED)
    public Events save(@RequestBody final Events event) {

        return eventService.save(event);
    }
}
