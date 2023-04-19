package com.example.app.controllers

import com.example.app.dto.AwardsDto
import com.example.app.services.AwardsService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("/awards")
class AwardsController
constructor(
    private val awardsService: AwardsService,
) {
    @GetMapping()
    fun getAll(): ResponseEntity<List<AwardsDto>> {
        val awards = awardsService.getAll()

        return ResponseEntity(
            awards,
            HttpStatus.OK,
        )
    }
}
