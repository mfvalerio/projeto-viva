package projeto_viva.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import projeto_viva.entities.Events;
import projeto_viva.services.EventService;

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
    public Events update(@PathVariable final Long id, @RequestBody final Events events) {

        return eventService.save(events);
    }

    @PostMapping("/new-event")
    @ResponseStatus(HttpStatus.CREATED)
    public Events save(@RequestBody final Events events) {

        return eventService.save(events);
    }
}
