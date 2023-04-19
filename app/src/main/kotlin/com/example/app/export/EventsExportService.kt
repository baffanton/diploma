package com.example.app.export

import com.example.app.dto.EventsDto
import com.example.app.services.EventsService
import jakarta.servlet.http.HttpServletResponse
import org.apache.poi.hssf.usermodel.HSSFRow
import org.apache.poi.hssf.usermodel.HSSFSheet
import org.apache.poi.hssf.usermodel.HSSFWorkbook
import org.springframework.stereotype.Service

@Service
class EventsExportService
constructor(
    private val eventsService: EventsService,
) {
    private lateinit var workbook: HSSFWorkbook
    private lateinit var sheet: HSSFSheet
    private lateinit var header: HSSFRow

    fun generateExcel(response: HttpServletResponse) {
        val events = eventsService.getAll()

        this.createBook()
            .createHeader()
            .fillSheet(events)
            .styleColumn()
            .load(response)
    }

    private fun createBook(): EventsExportService {
        this.workbook = HSSFWorkbook()
        this.sheet = workbook.createSheet(USER_TABLE_NAME)
        this.header = sheet.createRow(0)

        return this
    }

    private fun createHeader(): EventsExportService {
        this.header.createCell(0).setCellValue(HEADER_NAME)
        this.header.createCell(1).setCellValue(HEADER_DESCRIPTION)
        this.header.createCell(2).setCellValue(HEADER_ADDRESS)
        this.header.createCell(3).setCellValue(HEADER_DATE)
        this.header.createCell(4).setCellValue(HEADER_TYPE)

        return this
    }

    private fun fillSheet(events: List<EventsDto>): EventsExportService {
        var index = 1
        events.forEach { userDto ->
            run {
                val dataRow = sheet.createRow(index)
                dataRow.createCell(0).setCellValue(userDto.name)
                dataRow.createCell(1).setCellValue(userDto.description)
                dataRow.createCell(2).setCellValue(userDto.address)
                dataRow.createCell(3).setCellValue(userDto.date.toString())
                dataRow.createCell(4).setCellValue(userDto.type)
                index++
            }
        }

        return this
    }

    private fun styleColumn(): EventsExportService {
        sheet.autoSizeColumn(0)
        sheet.autoSizeColumn(1)
        sheet.autoSizeColumn(2)
        sheet.autoSizeColumn(3)
        sheet.autoSizeColumn(4)

        return this
    }

    private fun load(response: HttpServletResponse): EventsExportService {
        val servletOutputStream = response.outputStream
        workbook.write(servletOutputStream)
        workbook.close()
        servletOutputStream.close()

        return this
    }

    companion object {
        const val USER_TABLE_NAME = "Мероприятия"
        const val HEADER_NAME = "Название мероприятия"
        const val HEADER_DESCRIPTION = "Описание"
        const val HEADER_ADDRESS = "Адресс"
        const val HEADER_DATE = "Дата"
        const val HEADER_TYPE = "Вид награды"
    }
}
