package com.project.services;

import com.project.bean.AnimeDetail;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnimeServices {
    public List<AnimeDetail> getFavourites(){
        AnimeDetail anime1= new AnimeDetail();
        anime1.setId("1");
        anime1.setName("One Piece");
        AnimeDetail anime2= new AnimeDetail();
        anime2.setId("2");
        anime2.setName("Naruto");
        AnimeDetail anime3= new AnimeDetail();
        anime3.setId("3");
        anime3.setName("Attack on Titan");
        AnimeDetail anime4= new AnimeDetail();
        anime4.setId("4");
        anime4.setName("Death note");
        AnimeDetail anime5=new AnimeDetail();
        anime5.setId("5");
        anime5.setName("Full Metal Alchemist Brotherhood");
        List<AnimeDetail> favouriteAnime = new ArrayList<>();
        favouriteAnime.add(anime1);
        favouriteAnime.add(anime2);
        favouriteAnime.add(anime3);
        favouriteAnime.add(anime4);
        favouriteAnime.add(anime5);
        return favouriteAnime;
    }
    public List<AnimeDetail> getAnimeDetail() {
        AnimeDetail anime1 = new AnimeDetail();
        anime1.setId("1");
        anime1.setName("Naruto");
        anime1.setEpisodes(720);
        List<String> characters = List.of("Naruto","Sasuke");
        anime1.setCharacters(characters);
        anime1.setOstTitle("Blue Bird");
        anime1.setOstLink("https://youtu.be/sixvkgjsoU4");
        AnimeDetail anime2 = new AnimeDetail();
        anime2.setId("2");
        anime2.setName("Attack on Titan");
        anime2.setOstTitle("Shinzou wo Sassageyo");
        anime2.setOstLink("https://youtu.be/CID-sYQNCew");
        AnimeDetail anime3 = new AnimeDetail();
        anime3.setId("3");
        anime3.setName("Tokyo Ghoul");
        anime3.setOstTitle("Unravel");
        anime3.setOstLink("https://youtu.be/7aMOurgDB-o");
        AnimeDetail anime4 = new AnimeDetail();
        anime4.setId("4");
        anime4.setName("Demon Slayer");
        anime4.setOstTitle("Gurenge");
        anime4.setOstLink("https://youtu.be/pmanD_s7G3U");
        AnimeDetail anime5= new AnimeDetail();
        anime5.setId("5");
        anime5.setName("Your Lie in April");
        anime5.setOstTitle("Hikaru Nara");
        anime5.setOstLink("https://youtu.be/p5kc8hJ3GcA");
        List<AnimeDetail> animeInformation = new ArrayList<>();
        animeInformation.add(anime1);
        animeInformation.add(anime2);
        animeInformation.add(anime3);
        animeInformation.add(anime4);
        animeInformation.add(anime5);
        return animeInformation;
    }

    public String sayHello(){
        return "Hi";
    }

}
