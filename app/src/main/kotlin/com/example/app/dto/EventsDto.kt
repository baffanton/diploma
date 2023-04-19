package com.example.app.dto

import java.sql.Timestamp

data class EventsDto
constructor(
    val name: String,
    val description: String,
    val address: String,
    val date: Timestamp,
    val type: String,
)
