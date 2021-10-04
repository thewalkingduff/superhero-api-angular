import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, SuperHero } from '../models';

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private http: HttpClient) { }


  getSuperHeroList(
    id?: string,
    search?: string
  ): Observable<APIResponse<SuperHero>> {
    console.log('search in http.service.ts', search)
    if (null) {
 
      // return this.http.get<APIResponse<SuperHero>>(`https://www.superheroapi.com/api.php/4453976851349617/search/${search}`)
      // params = new HttpParams().set('search', search)
      // console.log('params in http.service.ts', params)
      console.log('search in http.service.ts', search)
    } else{
      return this.http.get<APIResponse<SuperHero>>(`https://evening-taiga-63642.herokuapp.com/https://akabab.github.io/superhero-api/api/all.json`);
    }
  }


  getSuperHeroDetails(id: string): Observable<SuperHero> {
    const superHeroInfoRequest = this.http.get(`https://evening-taiga-63642.herokuapp.com/https://akabab.github.io/superhero-api/api/id/${id}.json`);

    return forkJoin({
      superHeroInfoRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['superHeroInfoRequest'],
        };
      })
    );
  }

  getSuperHero(name: string): Observable<SuperHero> {
    const superHeroBio = this.http.get(`https://evening-taiga-63642.herokuapp.com/https://www.superheroapi.com/api/4453976851349617/search/${name}`);

    return forkJoin({
      superHeroBio,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['superHeroBio'],
        };
      })
    );
  }
  
}

   
