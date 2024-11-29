// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produit } from '../models/produit.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Produit[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() {}

  // Ajouter un article au panier
  addToCart(item: Produit): Produit[] {
    this.cartItems.push(item);
    this.updateCartItemCount();
    return this.cartItems;
  }

  // Supprimer un article du panier par son id
  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.updateCartItemCount();
  }

  // Vider le panier
  clearCart(): void {
    this.cartItems = [];
    this.updateCartItemCount();
  }

  // Obtenir le nombre d'articles dans le panier
  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  // Obtenir les articles du panier
  getCartItems() {
    return [...this.cartItems];
  }

  // Mettre à jour le nombre d'articles dans le panier
  private updateCartItemCount(): void {
    this.cartItemCount.next(this.cartItems.length);
  }
}
