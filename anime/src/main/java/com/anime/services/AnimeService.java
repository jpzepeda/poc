package com.anime.services;

import com.anime.entities.AnimeEntity;

public interface AnimeService {

	String addAnime(String name);
	
	Iterable<AnimeEntity> getAllAnime();

	String deleteAnime(String id);

	String updateAnime(String name, String id);
	
}
