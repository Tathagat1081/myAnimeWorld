package com.project.rest;

import com.project.bean.AnimeDetail;
import com.project.services.AnimeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AnimeImageController {
    @Autowired
    public AnimeServices animeServices;

    @RequestMapping("/hello")
    public String sayHi() {
        return animeServices.sayHello();
    }

    @RequestMapping("/detail")
    public List<AnimeDetail> getDetail() {
        return animeServices.getAnimeDetail();
    }
    @RequestMapping("/favourites")
    public List<AnimeDetail>  getFavourites(){
        return animeServices.getFavourites();
    }
}
