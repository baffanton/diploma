package com.example.app.services

import com.example.app.dto.EventsDto
import com.example.app.repositories.EventsRepository
import org.springframework.stereotype.Service

@Service
class EventsService
constructor(
    private val eventsRepository: EventsRepository,
) {
    fun getAll(): List<EventsDto> {
        return this.eventsRepository.findAll().map { it.toDto() }
    }
}
