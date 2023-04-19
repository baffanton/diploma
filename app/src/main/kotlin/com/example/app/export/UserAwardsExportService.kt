package com.example.app.export

import com.example.app.dto.UserAwardsDto
import com.example.app.services.UserAwardsService
import jakarta.servlet.http.HttpServletResponse
import org.apache.poi.hssf.usermodel.HSSFRow
import org.apache.poi.hssf.usermodel.HSSFSheet
import org.apache.poi.hssf.usermodel.HSSFWorkbook
import org.springframework.stereotype.Service

@Service
class UserAwardsExportService
constructor(
    private val userAwardsService: UserAwardsService,
) {
    private lateinit var workbook: HSSFWorkbook
    private lateinit var sheet: HSSFSheet
    private lateinit var header: HSSFRow

    fun generateExcel(response: HttpServletResponse) {
        val userAwards = userAwardsService.getAll()

        this.createBook()
            .createHeader()
            .fillSheet(userAwards)
            .styleColumn()
            .load(response)
    }

    private fun createBook(): UserAwardsExportService {
        this.workbook = HSSFWorkbook()
        this.sheet = workbook.createSheet(USER_TABLE_NAME)
        this.header = sheet.createRow(0)

        return this
    }

    private fun createHeader(): UserAwardsExportService {
        this.header.createCell(0).setCellValue(HEADER_USER)
        this.header.createCell(1).setCellValue(HEADER_AWARDS)
        this.header.createCell(2).setCellValue(HEADER_DATE)

        return this
    }

    private fun fillSheet(userAwards: List<UserAwardsDto>): UserAwardsExportService {
        var index = 1
        userAwards.forEach { userDto ->
            run {
                val dataRow = sheet.createRow(index)
                dataRow.createCell(0).setCellValue(userDto.user)
                dataRow.createCell(1).setCellValue(userDto.awards)
                dataRow.createCell(2).setCellValue(userDto.date.toString())
                index++
            }
        }

        return this
    }

    private fun styleColumn(): UserAwardsExportService {
        sheet.autoSizeColumn(0)
        sheet.autoSizeColumn(1)
        sheet.autoSizeColumn(2)

        return this
    }

    private fun load(response: HttpServletResponse): UserAwardsExportService {
        val servletOutputStream = response.outputStream
        workbook.write(servletOutputStream)
        workbook.close()
        servletOutputStream.close()

        return this
    }

    companion object {
        const val USER_TABLE_NAME = "Пользователи получившие награды"
        const val HEADER_USER = "Пользователь"
        const val HEADER_AWARDS = "Награда"
        const val HEADER_DATE = "Дата"
    }
}
