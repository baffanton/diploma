package com.example.app.entities

import com.example.app.dto.UserAwardsDto
import jakarta.persistence.*
import java.sql.Timestamp

@Table(name = "_user_has_awards")
@Entity
class UserAwards
constructor(
    val date: Timestamp,
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    val user: User,
    @OneToOne
    @JoinColumn(name = "awards_id", referencedColumnName = "id")
    val awards: Awards,
) {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val id: String = ""

    fun toDto(): UserAwardsDto {
        return UserAwardsDto(
            this.user.username,
            this.awards.name,
            this.date,
        )
    }
}
