package com.project.bean;

import java.util.List;

public class AnimeDetail {
    private String id; // private = restricted access
    private String name;
    private Integer episodes;
    private Float rating;
    private List<String> characters;
    private String ostTitle;
    private String ostLink;

    // Getter
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getEpisodes() {
        return episodes;
    }

    public Float getRating() {
        return rating;
    }

    public List<String> getCharacters() {
        return characters;
    }

    public String getOstTitle() { return ostTitle;}
    public String getOstLink() { return ostLink;}

    // Setter
    public void setName(String newName) {
        this.name = newName;
    }

    public void setId(String newId) {
        this.id = newId;
    }

    public void setEpisodes(Integer newEpisodes) {
        this.episodes = newEpisodes;
    }

    public void setRating(Float newRating) {
        this.rating = newRating;
    }

    public void setCharacters(List<String> newCharacters) {
        this.characters = newCharacters;
    }

    public void setOstTitle(String ostTitle) { this.ostTitle = ostTitle;}
    public void setOstLink(String ostLink) { this.ostLink =ostLink;}
}
