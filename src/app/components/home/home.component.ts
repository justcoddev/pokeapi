import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemons: any;
  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getPokemonAll();
  }

  getPokemonAll() {
    this.ApiService
      .getPokemons()
      .subscribe(resp => {
        this.pokemons = resp;
        // console.log(" ~ file: home.component.ts ~ line 21 ~ HomeComponent ~ getPokemonAll ~ this.pokemons", this.pokemons)
      });
  }
  getMore(url: string) {
    this.ApiService
      .getByUrl(url)
      .subscribe((resp: any) => {
        this.pokemons.results = [... this.pokemons.results, ...resp.results]; //Partiendo de un array añade otro array al
        this.pokemons.next = resp.next;
      });
  }

  goToDetail(name: string){
    this.router.navigate(['/details', name])
  }
}
