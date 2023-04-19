package com.example.app.services

import com.example.app.dto.LoginDto
import com.example.app.dto.UserDto
import com.example.app.entities.User
import com.example.app.enums.UserGender
import com.example.app.enums.UserRole
import com.example.app.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService
constructor(
    val userRepository: UserRepository,
) {
    fun login(loginDto: LoginDto): UserRole? {
        val user = this.userRepository.findByUsername(loginDto.username)

        if (user.isEmpty) {
            return null
        }

        if (user.get().password != loginDto.password) {
            return null
        }

        return user.get().role
    }

    fun isExist(username: String): Boolean {
        return !this.userRepository.findByUsername(username).isEmpty
    }

    fun save(userDto: UserDto): String {
        val user = this.userRepository.findById(userDto.id)
        user.get().username = userDto.username
        user.get().role = UserRole.valueOf(userDto.role)
        user.get().gender = UserGender.valueOf(userDto.gender)
        user.get().age = userDto.age

        return this.userRepository.save(user.get()).id
    }

    fun save(user: User): String {
        return this.userRepository.save(user).id
    }

    fun getAll(): List<UserDto> {
        return this.userRepository.findAll().map { it.toDto() }
    }

    fun delete(id: String) {
        val user = this.userRepository.findById(id)

        this.userRepository.delete(user.get())
    }
}
