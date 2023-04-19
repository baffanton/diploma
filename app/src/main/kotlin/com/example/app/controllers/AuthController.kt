package com.example.app.controllers

import com.example.app.dto.LoginDto
import com.example.app.services.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
class AuthController
constructor(
    private val userService: UserService,
) {

    @PostMapping("/login")
    fun login(@RequestBody loginDto: LoginDto): ResponseEntity<String> {
        val role = this.userService.login(loginDto)

        return if (role == null) {
            ResponseEntity(HttpStatus.UNAUTHORIZED)
        } else {
            ResponseEntity(
                role.toString().lowercase(),
                HttpStatus.OK,
            )
        }
    }
}
