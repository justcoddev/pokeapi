import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public nombre: string = "";
  public pokeDetails: any = null;
  constructor(private activeRoute: ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.nombre = params['name'];
    });
    this.getDetailByName(this.nombre);
  }

  getDetailByName(name: string) {
    this.ApiService
      .getPokemonByName(name)
      .subscribe(resp => {
        this.pokeDetails = resp;
      })
  }
}
