package com.example.app.entities

import com.example.app.dto.EventsDto
import com.example.app.enums.EventsType
import jakarta.persistence.*
import java.sql.Timestamp

@Table(name = "_events")
@Entity
class Events
constructor(
    val name: String,
    val description: String,
    val address: String,
    val date: Timestamp,
    @Enumerated(EnumType.STRING)
    val type: EventsType,
) {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val id: String = ""

    fun toDto(): EventsDto {
        return EventsDto(
            this.name,
            this.description,
            this.address,
            this.date,
            this.type.value,
        )
    }
}
