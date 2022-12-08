package projeto_viva.services;

//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.BeanUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import projeto_viva.entities.Event;
//import projeto_viva.repositories.EventRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import projeto_viva.entities.Events;
import projeto_viva.repositories.EventRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Events> findAll() {
        return eventRepository.findByOrderByDateTimeStartDesc();
    }

    public Events findById(final Long id) {
        return eventRepository.findById(id).get();
    }

    public Events update(final Long id, final Events events) {
        Events savedEvents = findById(id);
        BeanUtils.copyProperties(events, savedEvents, "id");
        return eventRepository.save(savedEvents);
    }

    public Events save(final Events events) {
        return eventRepository.save(events);
    }
}
