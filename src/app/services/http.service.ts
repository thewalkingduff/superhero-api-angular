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
      return this.http.get<APIResponse<SuperHero>>(`${env.BASE_URL}/all.json`);
    }
  }


  getSuperHeroDetails(id: string): Observable<SuperHero> {
    const superHeroInfoRequest = this.http.get(`${env.BASE_URL}/id/${id}.json`);

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

  getSuperHero(id: string): Observable<SuperHero> {
    const superHeroInfoRequest = this.http.get(`${env.BASE_URL}/id/${id}.json`);
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

  // getSuperHero(name: string): Observable<SuperHero> {
  //   const superHeroBio = this.http.get(`${env.BASE_URL}/search/${name}`);
  //   console.log('got superHeroBio!:,', superHeroBio)
 
  //   return forkJoin({
  //     superHeroBio,
  //   }).pipe(
  //     map((resp: any) => {
  //       return {
  //         ...resp['superHeroBio'],
  //       };
  //     })
  //   );
  // }

  // getSuperHero(name: string):  {
  //   const superHeroBio = this.http.get(`${env.BASE_URL}/search/${name}`);
  //   console.log('got superHeroBio!: ', superHeroBio)
 
    
  // }
  
}

   
