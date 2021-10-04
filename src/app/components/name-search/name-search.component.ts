import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { SuperHero } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.scss']
})
export class NameSearchComponent implements OnInit, OnDestroy {

  superHeroName: string;
  superhero: SuperHero;
  routeSub: Subscription;
  heroSub: Subscription;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.superHeroName = params['superhero-search'];
      this.getSuperHero(this.superHeroName)
      console.log('this.superHeroName: ', this.superHeroName)
    })
  }

  getSuperHero(name: string):void {
    console.log('name: ', name)
    this.heroSub = this.httpService
      .getSuperHero(name)
      .subscribe((superHeroResp: SuperHero) => {
        this.superhero = superHeroResp;
      })
  }

  ngOnDestroy(): void {
    if(this.heroSub) {
      this.heroSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }


}
