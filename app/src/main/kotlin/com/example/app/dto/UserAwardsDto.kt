package com.example.app.dto

import java.sql.Timestamp

data class UserAwardsDto
constructor(
    val user: String,
    val awards: String,
    val date: Timestamp,
)
