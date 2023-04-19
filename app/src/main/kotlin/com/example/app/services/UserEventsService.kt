package com.example.app.services

import com.example.app.dto.UserEventsDto
import com.example.app.repositories.UserEventsRepository
import org.springframework.stereotype.Service

@Service
class UserEventsService
constructor(
    private val userEventsRepository: UserEventsRepository,
) {
    fun getAll(): List<UserEventsDto> {
        return this.userEventsRepository.findAll().map { it.toDto() }
    }
}
