package com.example.app.entities

import com.example.app.dto.AwardsDto
import com.example.app.enums.AwardsType
import jakarta.persistence.*

@Table(name = "_awards")
@Entity
class Awards
constructor(
    val name: String,
    @Column(length = 2000)
    val description: String,
    val type: AwardsType,
    val points: Int,
) {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val id: String = ""

    fun toDto(): AwardsDto {
        return AwardsDto(
            this.name,
            this.description,
            this.type.value,
            this.points,
        )
    }
}
