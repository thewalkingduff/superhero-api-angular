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
  // shows long list of SuperHeroes on homepage
  getSuperHeroList(
    id?: string,
    search?: string
  ): Observable<APIResponse<SuperHero>> {
    if (null) {
    } else{
      return this.http.get<APIResponse<SuperHero>>(`${env.BASE_URL}/all.json`);
    }
  }


  // when you click on a SuperHero or Search for a SuperHero
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
}

   
