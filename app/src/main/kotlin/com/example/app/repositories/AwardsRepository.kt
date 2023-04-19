package com.example.app.repositories

import com.example.app.entities.Awards
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface AwardsRepository : JpaRepository<Awards, String> {
    fun findByName(name: String): Optional<Awards>
}
