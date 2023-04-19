package com.example.app.export

import com.example.app.dto.UserDto
import com.example.app.services.UserService
import jakarta.servlet.http.HttpServletResponse
import org.apache.poi.hssf.usermodel.HSSFRow
import org.apache.poi.hssf.usermodel.HSSFSheet
import org.apache.poi.hssf.usermodel.HSSFWorkbook
import org.springframework.stereotype.Service

@Service
class UserExportService
constructor(
    private val userService: UserService,
) {
    private lateinit var workbook: HSSFWorkbook
    private lateinit var sheet: HSSFSheet
    private lateinit var header: HSSFRow

    fun generateExcel(response: HttpServletResponse) {
        val users = userService.getAll()

        this.createBook()
            .createHeader()
            .fillSheet(users)
            .styleColumn()
            .load(response)
    }

    private fun createBook(): UserExportService {
        this.workbook = HSSFWorkbook()
        this.sheet = workbook.createSheet(USER_TABLE_NAME)
        this.header = sheet.createRow(0)

        return this
    }

    private fun createHeader(): UserExportService {
        this.header.createCell(0).setCellValue(HEADER_ID)
        this.header.createCell(1).setCellValue(HEADER_USERNAME)
        this.header.createCell(2).setCellValue(HEADER_ROLE)
        this.header.createCell(3).setCellValue(HEADER_GENDER)
        this.header.createCell(4).setCellValue(HEADER_AGE)

        return this
    }

    private fun fillSheet(users: List<UserDto>): UserExportService {
        var index = 1
        users.forEach { userDto ->
            run {
                val dataRow = sheet.createRow(index)
                dataRow.createCell(0).setCellValue(userDto.id)
                dataRow.createCell(1).setCellValue(userDto.username)
                dataRow.createCell(2).setCellValue(userDto.role)
                dataRow.createCell(3).setCellValue(userDto.gender)
                dataRow.createCell(4).setCellValue(userDto.age.toDouble())
                index++
            }
        }

        return this
    }

    private fun styleColumn(): UserExportService {
        sheet.autoSizeColumn(0)
        sheet.autoSizeColumn(1)
        sheet.autoSizeColumn(2)
        sheet.autoSizeColumn(3)
        sheet.autoSizeColumn(4)

        return this
    }

    private fun load(response: HttpServletResponse): UserExportService {
        val servletOutputStream = response.outputStream
        workbook.write(servletOutputStream)
        workbook.close()
        servletOutputStream.close()

        return this
    }

    companion object {
        const val USER_TABLE_NAME = "Пользователи"
        const val HEADER_ID = "Идентификатор"
        const val HEADER_USERNAME = "Логин"
        const val HEADER_ROLE = "Роль"
        const val HEADER_GENDER = "Пол"
        const val HEADER_AGE = "Возраст"
    }
}
