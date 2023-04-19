package com.example.app.services

import com.example.app.dto.AwardsDto
import com.example.app.repositories.AwardsRepository
import org.springframework.stereotype.Service

@Service
class AwardsService
constructor(
    private val awardsRepository: AwardsRepository,
) {
    fun getAll(): List<AwardsDto> {
        return this.awardsRepository.findAll().map { it.toDto() }
    }
}
