package com.project.bean;

import java.util.List;

public class AnimeDetail{
        private String id; // private = restricted access
        private String name;
        private Integer episodes;
        private Float rating;
        private List<String>characters;
        // Getter
        public String getId() {
            return id;
        }
        public String getName(){
            return name;
        }
        public Integer getEpisodes(){
            return episodes;
        }
        public Float getRating(){
            return rating;
        }
        public List<String> getCharacters(){
            return characters;
        }

        // Setter
        public void setName(String newName) {
            this.name=newName;
        }

    public void SetId(String newId)
        {
            this.id = newId;
        }
    public void SetEpisodes(Integer newEpisodes){
            this.episodes = newEpisodes;
    }
    public void SetRating(Float newRating){
            this.rating = newRating;
    }
    public void SetCharacters(List<String> newCharacters){
            this.characters = newCharacters;
    }
}
