import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // obtener info
  public getByUrl(url: string) {
    return this.http.get(url);
  }
  //Usando la enviroment - Nos trae todos los datos desde nuestra url base
  public getPokemons() {
    return this.http.get(`${environment.PokeApiBase}/pokemon`)
  }
  //Obtener pokemon por el nombre
  public getPokemonByName(name: string) {
    return this.http.get(`${environment.PokeApiBase}/pokemon/${name}`);
  }
}
