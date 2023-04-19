package com.example.app.repositories

import com.example.app.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface UserRepository : JpaRepository<User, String> {
    fun findByUsername(username: String): Optional<User>
}
