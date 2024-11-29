import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/CartService';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss',
  imports: [CommonModule],
})
export class PanierComponent implements OnInit {
  cartItems:any[]=[];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Obtenir les articles du panier
    this.cartItems = this.cartService.getCartItems();
    // Calculer le total
    this.calculateTotal();
  }

  // Calculer le prix total du panier
  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  // Supprimer un article du panier
  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  // Vider le panier
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.calculateTotal();
  }
}