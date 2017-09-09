package com.anime.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.anime.entities.AnimeEntity;
import com.anime.services.AnimeService;

@RestController
@RequestMapping("/anime")
public class AnimeController {


    @Autowired
    private AnimeService animeService;
	
	@GetMapping(path="/add") // Map ONLY GET Requests
	public @ResponseBody String addAnime (@RequestParam(value = "name",defaultValue = "Hello") String name){
		return animeService.addAnime(name);
	}

	@GetMapping(path="/all")
	public ResponseEntity <Iterable<AnimeEntity>> getAllAnime() {
		return new ResponseEntity<Iterable<AnimeEntity>>(animeService.getAllAnime(),HttpStatus.OK);
	}
	
	@PostMapping(path="/delete")
	public @ResponseBody String delete(@RequestParam(value = "id") String id) {
		return animeService.deleteAnime(id);
	}
	
	@PutMapping(path="/update")
	public @ResponseBody String update(@RequestParam(value = "id") String id, @RequestParam(value = "id") String name) {
		return animeService.updateAnime(name, id);	
	}


}
