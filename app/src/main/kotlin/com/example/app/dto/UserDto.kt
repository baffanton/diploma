package com.example.app.dto

data class UserDto
constructor(
    val id: String,
    val username: String,
    val role: String,
    val gender: String,
    val age: Int,
)
