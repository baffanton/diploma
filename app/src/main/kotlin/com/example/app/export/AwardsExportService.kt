package com.example.app.export

import com.example.app.dto.AwardsDto
import com.example.app.services.AwardsService
import jakarta.servlet.http.HttpServletResponse
import org.apache.poi.hssf.usermodel.HSSFRow
import org.apache.poi.hssf.usermodel.HSSFSheet
import org.apache.poi.hssf.usermodel.HSSFWorkbook
import org.springframework.stereotype.Service

@Service
class AwardsExportService
constructor(
    private val awardsService: AwardsService,
) {
    private lateinit var workbook: HSSFWorkbook
    private lateinit var sheet: HSSFSheet
    private lateinit var header: HSSFRow

    fun generateExcel(response: HttpServletResponse) {
        val awards = awardsService.getAll()

        this.createBook()
            .createHeader()
            .fillSheet(awards)
            .styleColumn()
            .load(response)
    }

    private fun createBook(): AwardsExportService {
        this.workbook = HSSFWorkbook()
        this.sheet = workbook.createSheet(USER_TABLE_NAME)
        this.header = sheet.createRow(0)

        return this
    }

    private fun createHeader(): AwardsExportService {
        this.header.createCell(0).setCellValue(HEADER_NAME)
        this.header.createCell(1).setCellValue(HEADER_DESCRIPTION)
        this.header.createCell(2).setCellValue(HEADER_TYPE)
        this.header.createCell(3).setCellValue(HEADER_POINTS)

        return this
    }

    private fun fillSheet(awards: List<AwardsDto>): AwardsExportService {
        var index = 1
        awards.forEach { userDto ->
            run {
                val dataRow = sheet.createRow(index)
                dataRow.createCell(0).setCellValue(userDto.name)
                dataRow.createCell(1).setCellValue(userDto.description)
                dataRow.createCell(2).setCellValue(userDto.type)
                dataRow.createCell(3).setCellValue(userDto.points.toDouble())
                index++
            }
        }

        return this
    }

    private fun styleColumn(): AwardsExportService {
        sheet.autoSizeColumn(0)
        sheet.autoSizeColumn(1)
        sheet.autoSizeColumn(2)
        sheet.autoSizeColumn(3)

        return this
    }

    private fun load(response: HttpServletResponse): AwardsExportService {
        val servletOutputStream = response.outputStream
        workbook.write(servletOutputStream)
        workbook.close()
        servletOutputStream.close()

        return this
    }

    companion object {
        const val USER_TABLE_NAME = "Награды"
        const val HEADER_NAME = "Название награды"
        const val HEADER_DESCRIPTION = "Описание"
        const val HEADER_TYPE = "Вид награды"
        const val HEADER_POINTS = "Кол-во очков"
    }
}
