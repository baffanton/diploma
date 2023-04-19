package com.example.app.dto

import com.example.app.enums.AwardsType

data class AwardsDto
constructor(
    val name: String,
    val description: String,
    val type: String,
    val points: Int,
)
