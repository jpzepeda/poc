package com.anime.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.anime.entities.*;

@Repository
public interface AnimeRepository extends CrudRepository<AnimeEntity, Long> {

}
