package com.example.app.controllers

import com.example.app.dto.UserEventsDto
import com.example.app.services.UserEventsService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
@RequestMapping("/userEvents")
class UserEventsController
constructor(
    private val userEventsService: UserEventsService,
) {
    @GetMapping()
    fun getAll(): ResponseEntity<List<UserEventsDto>> {
        val userEvents = userEventsService.getAll()

        return ResponseEntity(
            userEvents,
            HttpStatus.OK,
        )
    }
}
