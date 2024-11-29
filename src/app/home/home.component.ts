
import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit.model';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/CartService'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule,RouterModule]
})

export class HomeComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService,private catservice:CartService) {}

  ngOnInit(): void {
    this.retrieveProduits();
  }

  retrieveProduits(): void {
    this.produitService.getAll()
    .then((response) => {
      this.produits = response;
      console.log("🚀 ~ HomeComponent ~ .then ~ response:", response)
    })
    .catch((error) => {
      console.error('Error fetching produits', error);
    });

  }
  addToCart(produit:Produit):void{
    try {
      let produits=this.catservice.addToCart(produit)
      console.log("🚀 ~ HomeComponent ~ addToCart ~ produits:", produits)
    
    } catch (error) {
      console.log("🚀 ~ HomeComponent ~ addToCart ~ error:", error)
    }
    
  }
  deleteProduit(id: number):void{
    this.produitService.delete(id)
    .then((data) => {
     console.log("🚀 ~ HomeComponent ~ .then ~ data:", data)
     alert("product deleted")
     this.retrieveProduits();
    })
    .catch((error) => {
      console.error('Error fetching produits', error);
    });
  }


}
