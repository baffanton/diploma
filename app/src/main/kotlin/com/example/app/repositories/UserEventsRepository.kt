package com.example.app.repositories

import com.example.app.entities.UserEvents
import org.springframework.data.jpa.repository.JpaRepository

interface UserEventsRepository : JpaRepository<UserEvents, String>
