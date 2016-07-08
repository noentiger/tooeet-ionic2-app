import { Component } from '@angular/core';
import { Api } from '../../services/api/api';
import { Dish } from '../../services/api/dish';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Api]
})

export class HomePage {

  errorMessage: string;
  dishes: Dish[];
  mode = 'Observable';
  constructor (private api: Api) {}

  // ngOnInit() { this.getMyDishes(); }
  onPageWillEnter() { this.getMyDishes(); }

  getMyDishes() {
    this.api.getMyDishes()
     .subscribe(
       dishes => this.dishes = dishes,
       error =>  this.errorMessage = <any>error);
  }

}
