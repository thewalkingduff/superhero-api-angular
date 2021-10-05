import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, SuperHero } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  public id!: string;
  public superheroes: any;  
  private routeSub: Subscription;
  private heroSub: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      console.log('params: ', params)
      console.log(params['superhero-search']);
      

        this.searchSuperHeroes(params['superhero-search']);
      // this.getName(params['superhero-search'])
  
      // this.searchSuperHeroes(params['superhero-search'])
      // setTimeout(() => this.getName(params['superhero-search']), 50)
      // this.getName(params['superhero-search'])
      // setTimeout(() => console.log(oneHero), 1000 )      
      // console.log('name: ', name);
     
      
    })
  }
  

  searchSuperHeroes(id?: string, search?: string): void {
    this.heroSub = this.httpService
      .getSuperHeroList(id, search)
      .subscribe((superHeroList: APIResponse<SuperHero>) => {
        this.superheroes = superHeroList;
        console.log('superHeroList: ', superHeroList);
        this.superheroes.map((superhero: any) => {
          let lowerCaseSearchedName = id.toLowerCase()
          let lowerCaseMatchedHero = superhero.name.toLowerCase()
        // console.log('oneHero: ', superhero.name);
        if(lowerCaseSearchedName === lowerCaseMatchedHero) {
          this.openSuperHeroDetails(superhero.id)
        }
      })


               
      });
    } 
   // console.log('superheroes: ', this.superheroes); 
  
      
      

   

    openSuperHeroDetails(id: string): void {
      this.router.navigate(['details', id])
    }
  
    ngOnDestroy(): void {
      if (this.heroSub) {
        this.heroSub.unsubscribe();
      }
  
      if(this.routeSub) {
        this.routeSub.unsubscribe();
      }
    }
}


