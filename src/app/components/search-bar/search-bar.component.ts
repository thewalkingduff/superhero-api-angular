import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // this.router.navigate(['herosearch', form.value.herosearch]) 
    console.log('form.value.herosearch: ', form.value.herosearch)
    window.location.replace(`https://www.superheroapi.com/api.php/4453976851349617/search/${form.value.herosearch}`)
  }

}
