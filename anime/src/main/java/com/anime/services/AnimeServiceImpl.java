package com.anime.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.anime.entities.AnimeEntity;
import com.anime.repository.AnimeRepository;

public class AnimeServiceImpl implements AnimeService{
	
	@Autowired
	private AnimeRepository animeRepository;

	@Override
	public String addAnime(String name) {
		AnimeEntity anime = new AnimeEntity();
		anime.setName(name);
		animeRepository.save(anime);
		return "Saved";
	}

	@Override
	public Iterable<AnimeEntity> getAllAnime() {
		return animeRepository.findAll();
	}

	@Override
	public String deleteAnime( String id) {
		animeRepository.deleteById(new Long(id));
		return "Deleted!";
		
	}

	@Override
	public String updateAnime(String name, String id) {
		Optional<AnimeEntity> value = animeRepository.findById(new Long(id));
		AnimeEntity animeEntity = value.get();
		animeEntity.setName(name);
		animeRepository.save(animeEntity);
		return "Updated!";
	}

}
