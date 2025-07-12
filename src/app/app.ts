import {Component, OnInit, signal} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('firstApp');

  public currentRoute : any ;

  // déclares une dépendance que Angular va automatiquement injecter dans ta classe,
  // te permettant d’accéder à toute l’API Router pour le routage dynamic
  // router instance de cette classe injectée dans mon composant via la dépendance, pour l'appeller appeler
  constructor(private router : Router) {
  }

  //executer goHome() à la premier accee
  ngOnInit(): void {
        // throw new Error('Method not implemented.');
    this.goHome();
    }


  goHome() {
    this.currentRoute="home";
    this.router.navigateByUrl("/home");
    // =>injecter la class Router
  }

  goProducts() {
    this.currentRoute="products";
    this.router.navigateByUrl("/products");
  }


}
