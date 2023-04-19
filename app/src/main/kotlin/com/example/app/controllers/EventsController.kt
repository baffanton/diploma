package com.example.app.controllers

import com.example.app.dto.EventsDto
import com.example.app.services.EventsService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
@RequestMapping("/events")
class EventsController
constructor(
    private val eventsService: EventsService,
) {
    @GetMapping()
    fun getAll(): ResponseEntity<List<EventsDto>> {
        val events = eventsService.getAll()

        return ResponseEntity(
            events,
            HttpStatus.OK,
        )
    }
}
