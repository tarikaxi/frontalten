import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from './services/CartService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // S'abonner à l'Observable du service pour récupérer le nombre d'articles
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  // Méthode pour simuler l'ajout d'un article au panier (par exemple lors de l'achat d'un produit)
  addItemToCart() {
    const newItem = { id: 1, name: 'Produit exemple', price: 29.99 };
    this.cartService.addToCart(newItem);
  }
}