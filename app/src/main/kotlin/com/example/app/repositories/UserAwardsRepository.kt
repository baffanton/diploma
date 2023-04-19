package com.example.app.repositories

import com.example.app.entities.UserAwards
import org.springframework.data.jpa.repository.JpaRepository

interface UserAwardsRepository : JpaRepository<UserAwards, String>
