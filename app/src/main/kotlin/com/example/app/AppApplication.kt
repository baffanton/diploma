package com.example.app

import com.example.app.entities.*
import com.example.app.enums.AwardsType
import com.example.app.enums.EventsType
import com.example.app.enums.UserGender
import com.example.app.enums.UserRole
import com.example.app.repositories.*
import com.example.app.services.UserService
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.boot.runApplication
import org.springframework.context.event.EventListener
import java.sql.Timestamp

@SpringBootApplication
class AppApplication
constructor(
    private val userService: UserService,
    private val userRepository: UserRepository,
    private val awardsRepository: AwardsRepository,
    private val userAwardsRepository: UserAwardsRepository,
    private val eventsRepository: EventsRepository,
    private val userEventsRepository: UserEventsRepository,
) {
    @EventListener(ApplicationReadyEvent::class)
    private fun fillDatabase() {
        this.createUser()
        this.createAwards()
        this.createUserAwards()
        this.createEvents()
        this.createUserEvents()
    }

    private fun createUser() {
        this.userService.save(
            User(
                "Baton",
                "123456",
                UserRole.USER,
                UserGender.FEMALE,
                70,
            ),
        )
        this.userService.save(
            User(
                "Anton",
                "12345678",
                UserRole.ADMIN,
                UserGender.MALE,
                22,
            ),
        )
    }

    private fun createAwards() {
        this.awardsRepository.save(
            Awards(
                "Простая награда",
                "Самая обычная награда, доступная всем",
                AwardsType.PUBLIC,
                100,
            ),
        )
        this.awardsRepository.save(
            Awards(
                "Средняя награда",
                "Что-то среднее между простой и супер наградой",
                AwardsType.PUBLIC,
                200,
            ),
        )
        this.awardsRepository.save(
            Awards(
                "Супер награда",
                "Самая премиальная награда доступная, лишь не многим",
                AwardsType.PRIVATE,
                300,
            ),
        )
    }

    private fun createUserAwards() {
        this.userAwardsRepository.save(
            UserAwards(
                Timestamp(100),
                this.userRepository.findByUsername("Baton").get(),
                this.awardsRepository.findByName("Простая награда").get(),
            ),
        )
        this.userAwardsRepository.save(
            UserAwards(
                Timestamp(200),
                this.userRepository.findByUsername("Baton").get(),
                this.awardsRepository.findByName("Средняя награда").get(),
            ),
        )
        this.userAwardsRepository.save(
            UserAwards(
                Timestamp(300),
                this.userRepository.findByUsername("Baton").get(),
                this.awardsRepository.findByName("Супер награда").get(),
            ),
        )
    }

    private fun createEvents() {
        this.eventsRepository.save(
            Events(
                "Мисс профсоюз",
                "Первое необязательное мероприятие",
                "ул. Профессора Дедюкина 22",
                Timestamp(222),
                EventsType.OPTIONAL,
            ),
        )
        this.eventsRepository.save(
            Events(
                "Мистер профсоюз",
                "Второе необязательное мероприятие",
                "ул. Профессора Дедюкина 22",
                Timestamp(333),
                EventsType.OPTIONAL,
            ),
        )
        this.eventsRepository.save(
            Events(
                "Медосмотр",
                "Проверка здоровья всех сотрудников",
                "ул. Профессора Дедюкина 24",
                Timestamp(444),
                EventsType.REQUIRED,
            ),
        )
    }

    private fun createUserEvents() {
        this.userEventsRepository.save(
            UserEvents(
                this.userRepository.findByUsername("Baton").get(),
                this.eventsRepository.findByName("Мисс профсоюз").get(),
            ),
        )
        this.userEventsRepository.save(
            UserEvents(
                this.userRepository.findByUsername("Baton").get(),
                this.eventsRepository.findByName("Мистер профсоюз").get(),
            ),
        )
        this.userEventsRepository.save(
            UserEvents(
                this.userRepository.findByUsername("Baton").get(),
                this.eventsRepository.findByName("Медосмотр").get(),
            ),
        )
    }
}

fun main(args: Array<String>) {
    runApplication<AppApplication>(*args)
}
