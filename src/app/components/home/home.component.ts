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
        this.searchSuperHeroes(params['superhero-search']);
    })
  }

  searchSuperHeroes(id?: string, search?: string): void {
    this.heroSub = this.httpService
      .getSuperHeroList(id, search)
      .subscribe((superHeroList: APIResponse<SuperHero>) => {
        this.superheroes = superHeroList;

        
        this.superheroes.map((superhero: any) => {
          let lowerCaseSearchedName = id.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase()
          let lowerCaseMatchedHero = superhero.name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase()
          
        // if searched hero name matches an existing hero name then the id superhero is sent to openSuperHeroDetails
        if(lowerCaseSearchedName === lowerCaseMatchedHero) {
          this.openSuperHeroDetails(superhero.id)
        }
       })              
    });
  } 
 
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


