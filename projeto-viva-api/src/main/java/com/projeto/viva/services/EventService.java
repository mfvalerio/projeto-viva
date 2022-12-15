package com.projeto.viva.services;


import com.projeto.viva.entities.Events;
import com.projeto.viva.repositories.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Events> findAll() {
        return eventRepository.findByOrderByDateDesc();
    }

    public Events findById(final Long id) {

        return eventRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(0));
//        return eventRepository.findById(id).get();
    }

    public Events update(final Long id, final Events event) {
        Events savedEvent = findById(id);
        BeanUtils.copyProperties(event, savedEvent, "id");
        return eventRepository.save(savedEvent);
    }

    public Events save(final Events event) {
        return eventRepository.save(event);
    }
}
