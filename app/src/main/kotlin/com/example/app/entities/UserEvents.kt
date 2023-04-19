package com.example.app.entities

import com.example.app.dto.UserEventsDto
import jakarta.persistence.*

@Table(name = "_user_has_events")
@Entity
class UserEvents
constructor(
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    val user: User,
    @OneToOne
    @JoinColumn(name = "events_id", referencedColumnName = "id")
    val events: Events,
) {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val id: String = ""

    fun toDto(): UserEventsDto {
        return UserEventsDto(
            this.user.username,
            this.events.name,
            this.events.type.value,
        )
    }
}
