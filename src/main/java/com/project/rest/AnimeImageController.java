package com.project.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnimeImageController
    {
        @RequestMapping("/hello")
        public String sayHi()
        {
            return "Hi";
        }
}
