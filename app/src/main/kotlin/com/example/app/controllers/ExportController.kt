package com.example.app.controllers

import com.example.app.export.*
import jakarta.servlet.http.HttpServletResponse
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
@RequestMapping("/export")
class ExportController
constructor(
    private val userExportService: UserExportService,
    private val awardsExportService: AwardsExportService,
    private val eventsExportService: EventsExportService,
    private val userAwardsExportService: UserAwardsExportService,
    private val userEventsExportService: UserEventsExportService,
) {

    @GetMapping("/users")
    fun exportUsers(response: HttpServletResponse) {
        response.contentType = "application/octet-stream"
        val headerKey = "Content-disposition"
        val headerValue = "attachment;filename=users.xls"
        response.setHeader(headerKey, headerValue)
        this.userExportService.generateExcel(response)
    }

    @GetMapping("/awards")
    fun exportAwards(response: HttpServletResponse) {
        response.contentType = "application/octet-stream"
        val headerKey = "Content-disposition"
        val headerValue = "attachment;filename=awards.xls"
        response.setHeader(headerKey, headerValue)
        this.awardsExportService.generateExcel(response)
    }

    @GetMapping("/events")
    fun exportEvents(response: HttpServletResponse) {
        response.contentType = "application/octet-stream"
        val headerKey = "Content-disposition"
        val headerValue = "attachment;filename=events.xls"
        response.setHeader(headerKey, headerValue)
        this.eventsExportService.generateExcel(response)
    }

    @GetMapping("/userAwards")
    fun exportUserAwards(response: HttpServletResponse) {
        response.contentType = "application/octet-stream"
        val headerKey = "Content-disposition"
        val headerValue = "attachment;filename=userAwards.xls"
        response.setHeader(headerKey, headerValue)
        this.userAwardsExportService.generateExcel(response)
    }

    @GetMapping("/userEvents")
    fun exportUserEvents(response: HttpServletResponse) {
        response.contentType = "application/octet-stream"
        val headerKey = "Content-disposition"
        val headerValue = "attachment;filename=userEvents.xls"
        response.setHeader(headerKey, headerValue)
        this.userEventsExportService.generateExcel(response)
    }
}
