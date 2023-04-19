package com.example.app.controllers

import com.example.app.dto.UserDto
import com.example.app.entities.User
import com.example.app.services.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("/users")
class UserController
constructor(
    private val userService: UserService,
) {

    @GetMapping()
    fun getAll(): ResponseEntity<List<UserDto>> {
        val users = this.userService.getAll()

        return ResponseEntity(
            users,
            HttpStatus.OK,
        )
    }

    @GetMapping("/{username}")
    fun isExist(@PathVariable username: String): ResponseEntity<Boolean> {
        val exist = this.userService.isExist(username)

        return ResponseEntity(
            exist,
            HttpStatus.OK,
        )
    }

    @PostMapping("/{id}")
    fun delete(@PathVariable id: String): ResponseEntity<String> {
        this.userService.delete(id)

        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping()
    fun add(@RequestBody user: User): ResponseEntity<String> {
        this.userService.save(user)

        return ResponseEntity(HttpStatus.CREATED)
    }

    @PostMapping("/update")
    fun update(@RequestBody userDto: UserDto): ResponseEntity<String> {
        this.userService.save(userDto)

        return ResponseEntity(HttpStatus.CREATED)
    }
}
