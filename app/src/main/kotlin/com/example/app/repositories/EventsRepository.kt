package com.example.app.repositories

import com.example.app.entities.Events
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface EventsRepository : JpaRepository<Events, String> {
    fun findByName(name: String): Optional<Events>
}
