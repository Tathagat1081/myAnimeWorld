package com.project.services;

import com.project.bean.AnimeDetail;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnimeServices {

    public List<AnimeDetail> getAnimeDetail()
     {
    AnimeDetail anime1 = new AnimeDetail();
    anime1.setName("naruto");
    AnimeDetail anime2 = new AnimeDetail();
    anime2.setName("onepiece");
   List<AnimeDetail> animeInformation=new ArrayList<>();
   animeInformation.add(anime1);
   animeInformation.add(anime2);
   return animeInformation;
      }

}
