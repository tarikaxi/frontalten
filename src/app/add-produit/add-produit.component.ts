import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';   
import { ProduitService } from '../services/produit.service'; 
import { Produit } from '../models/produit.model';  

@Component({
  selector: 'app-add-produit',
  standalone: true,
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss'],
  imports: [CommonModule, RouterModule, ReactiveFormsModule]  
})
export class AddProduitComponent {
  produitForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produitService: ProduitService,
    private router: RouterModule  
  ) {
    this.produitForm = this.fb.group({
      name: ['', [, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      images: [''],
      description: [''],
      rating: ['']
    });
  }

  
  onSubmit(): void {
    if (this.produitForm.invalid) {
      return;
    }

    const newProduit: Produit = this.produitForm.value;
    console.log("🚀 ~ AddProduitComponent ~ onSubmit ~ newProduit:", newProduit)

    this.produitService.create(newProduit)
      .then(() => {
        alert('product added');
        //this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        alert('Erreur');
      });
  }
}
7