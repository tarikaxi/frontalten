import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ViewProduitComponent } from './view-produit/view-produit.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-product', component: AddProduitComponent },
  { path: 'produit/:id', component: ViewProduitComponent },
  { path: 'panier', component: PanierComponent }
];
