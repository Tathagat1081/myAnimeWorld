package com.project.rest;

import com.project.bean.AnimeDetail;
import com.project.services.AnimeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
public class AnimeImageController
{
    @Autowired
    public AnimeServices animeServices;
        @RequestMapping("/hello")
        public String sayHi()
        {
            return "Hi,welcome to my Anime world.I am Tathagat,creator of this page.I am a third year Engineering student pursuing BTech in Computer Science from N.I.T Andhra Pradesh.My hobbies are singing,watching Anime. ";
        }
        @RequestMapping("/detail")
        public List<AnimeDetail> getAnimeDetails()
        {
           return  animeServices.getAnimeDetail();
        }
}
