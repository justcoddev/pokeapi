import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemons: any;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getPokemonAll();
  }

  getPokemonAll() {
    this.ApiService
      .getPokemons()
      .subscribe(resp => {
        this.pokemons = resp;
        console.log(" ~ file: home.component.ts ~ line 21 ~ HomeComponent ~ getPokemonAll ~ this.pokemons", this.pokemons)
      })
  }
}
