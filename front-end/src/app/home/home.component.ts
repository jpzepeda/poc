import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../_services/anime.service';
import { Anime } from '../_models/anime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animes: Anime[] = [];
  name: string;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.getAll();
  }

  add() {
    this.animeService.add(this.name);
    this.getAll();
  }

  update(anime: Anime) {
    console.log(this.animeService.update(anime));
    this.getAll();
  }

  delete(id: string) {
    console.log(this.animeService.delete(id));
    this.getAll();
  }

  getAll() {
    this.animeService.getAll()
      .then(animes => this.animes = animes)
      .then(animes => console.log(animes));
  }

}
