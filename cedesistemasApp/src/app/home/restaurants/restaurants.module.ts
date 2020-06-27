import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { RestaurantsComponent } from "./restaurants.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: RestaurantsComponent,
      },
    ]),
  ],
})
export class RestaurantsModule {}
