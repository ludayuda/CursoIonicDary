import { RestaurantsService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[]=[];
 
  constructor(private restaurantsService:RestaurantsService) {

    this.loadRestaurants();
 
     /* this.restaurants.push(
        {
          "id": "730635c0-dd3b-42a6-906c-fb0fcfb202b3",
          "nombre": "Toro Restaurante",
          "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/17/a0/bb/85/t-bone-steak.jpg",
          "direccion": "Carrera 80 # 32 ee 04, Medellín Colombia",
          "telefono": "+57 300 7603091",
          "sitioWeb": "http://www.facebook.com/ToroRestauranteMedellin",
          "latitud": 6.252487,
          "longitud": -75.591399,
          "productos": null,
          "calificacion": 1
      } );*/


 
   }

   ngOnInit(): void {
    
  }

  loadRestaurants(){

    this.restaurantsService.getRestaurants()
    .subscribe((data: RestaurantModel[])=>{
      this.restaurants=data;
    });

  }


 
}
