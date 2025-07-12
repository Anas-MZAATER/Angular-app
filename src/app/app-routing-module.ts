import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';


const routes: Routes = [
  {path : "home" , component : Home },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : "products" , component : Products }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
