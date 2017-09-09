package com.anime.models;

public class Anime {
	
	private final long id;
	private final String name;
	
	public Anime(long id, String name){
		this.id = id;
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public long getId() {
		return id;
	}
	
}
