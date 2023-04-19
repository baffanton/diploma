package com.example.app.services

import com.example.app.dto.UserAwardsDto
import com.example.app.repositories.UserAwardsRepository
import org.springframework.stereotype.Service

@Service
class UserAwardsService
constructor(
    private val userAwardsRepository: UserAwardsRepository,
) {
    fun getAll(): List<UserAwardsDto> {
        return this.userAwardsRepository.findAll().map { it.toDto() }
    }
}
