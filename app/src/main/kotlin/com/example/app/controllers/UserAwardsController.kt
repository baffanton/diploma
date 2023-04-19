package com.example.app.controllers

import com.example.app.dto.UserAwardsDto
import com.example.app.services.UserAwardsService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("/userAwards")
class UserAwardsController
constructor(
    private val userAwardsService: UserAwardsService,
) {
    @GetMapping()
    fun getAll(): ResponseEntity<List<UserAwardsDto>> {
        val userAwards = this.userAwardsService.getAll()

        return ResponseEntity(
            userAwards,
            HttpStatus.OK,
        )
    }
}
