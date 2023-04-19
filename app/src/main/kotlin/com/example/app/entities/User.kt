package com.example.app.entities

import com.example.app.dto.UserDto
import com.example.app.enums.UserGender
import com.example.app.enums.UserRole
import jakarta.persistence.*

@Table(name = "_user")
@Entity
class User
constructor(
    var username: String,
    @Enumerated(EnumType.STRING)
    var role: UserRole,
    @Enumerated(EnumType.STRING)
    var gender: UserGender,
    var age: Int,
) {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val id: String = ""
    var password: String = "qwerty"

    constructor(username: String, password: String, role: UserRole, gender: UserGender, age: Int) : this(
        username,
        role,
        gender,
        age,
    ) {
        this.password = password
    }

    fun toDto(): UserDto {
        return UserDto(
            this.id,
            this.username,
            this.role.value,
            this.gender.value,
            this.age,
        )
    }
}
