import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/produit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-produit',
  standalone: true,
  templateUrl: './view-produit.component.html',
  styleUrl: './view-produit.component.scss',
  imports: [CommonModule,RouterModule]

})
export class ViewProduitComponent implements OnInit{
produit: Produit | null = null;

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    const produitId = this.route.snapshot.paramMap.get('id');
    if (produitId) {
      this.retrieveProduitDetails(produitId);
    }
  }

  retrieveProduitDetails(id: string): void {
    this.produitService.get(id).then((produit) => {
      this.produit = produit;
      console.log("🚀 ~ ViewProduitComponent ~ this.produitService.get ~ produit:", produit)
    })
    .catch((error) => {
      console.error('Error fetching product details', error);
    });
     
  }
}