import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { SuperHero } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  superHeroId: string;
  superhero: SuperHero;
  routeSub: Subscription;
  heroSub: Subscription;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.superHeroId = params['id'];
      this.getSuperHeroDetails(this.superHeroId)
    })
  }

  getSuperHeroDetails(id: string):void {
    this.heroSub = this.httpService
      .getSuperHeroDetails(id)
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
