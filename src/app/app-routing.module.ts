import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details.component';
import { MarketplaceComponent } from './marketplace.component';
import { AppComponent } from'./app.component';

const routes: Routes = [
  { path: '', redirectTo: '/marketplace', pathMatch: 'full' },
  { path: 'detail/:id', component: CarDetailsComponent },
  { path: 'home', component: AppComponent },
  { path: 'marketplace', component: MarketplaceComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }