package com.byte.quiniela

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

/**
 * Created by carloscubur on 5/04/18.
 */

@RestController
class StudentController {
    @GetMapping("/dummy-student")
    fun students(@RequestParam name:String):Student {
        val student = Student("1", name)
        return student

    }
}