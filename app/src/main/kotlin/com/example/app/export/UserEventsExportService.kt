package com.example.app.export

import com.example.app.dto.UserEventsDto
import com.example.app.services.UserEventsService
import jakarta.servlet.http.HttpServletResponse
import org.apache.poi.hssf.usermodel.HSSFRow
import org.apache.poi.hssf.usermodel.HSSFSheet
import org.apache.poi.hssf.usermodel.HSSFWorkbook
import org.springframework.stereotype.Service

@Service
class UserEventsExportService
constructor(
    private val userEventsService: UserEventsService,
) {
    private lateinit var workbook: HSSFWorkbook
    private lateinit var sheet: HSSFSheet
    private lateinit var header: HSSFRow

    fun generateExcel(response: HttpServletResponse) {
        val userEvents = userEventsService.getAll()

        this.createBook()
            .createHeader()
            .fillSheet(userEvents)
            .styleColumn()
            .load(response)
    }

    private fun createBook(): UserEventsExportService {
        this.workbook = HSSFWorkbook()
        this.sheet = workbook.createSheet(USER_TABLE_NAME)
        this.header = sheet.createRow(0)

        return this
    }

    private fun createHeader(): UserEventsExportService {
        this.header.createCell(0).setCellValue(HEADER_USER)
        this.header.createCell(1).setCellValue(HEADER_EVENTS)
        this.header.createCell(2).setCellValue(HEADER_TYPE)

        return this
    }

    private fun fillSheet(userEvents: List<UserEventsDto>): UserEventsExportService {
        var index = 1
        userEvents.forEach { userDto ->
            run {
                val dataRow = sheet.createRow(index)
                dataRow.createCell(0).setCellValue(userDto.user)
                dataRow.createCell(1).setCellValue(userDto.events)
                dataRow.createCell(2).setCellValue(userDto.type)
                index++
            }
        }

        return this
    }

    private fun styleColumn(): UserEventsExportService {
        sheet.autoSizeColumn(0)
        sheet.autoSizeColumn(1)
        sheet.autoSizeColumn(2)

        return this
    }

    private fun load(response: HttpServletResponse): UserEventsExportService {
        val servletOutputStream = response.outputStream
        workbook.write(servletOutputStream)
        workbook.close()
        servletOutputStream.close()

        return this
    }

    companion object {
        const val USER_TABLE_NAME = "Пользователи участвовавшие в мероприятиях"
        const val HEADER_USER = "Пользователь"
        const val HEADER_EVENTS = "Мероприятие"
        const val HEADER_TYPE = "Вид мероприятия"
    }
}
