import { Injectable } from '@angular/core';
import axios from 'axios';  // Import Axios
import { Produit } from '../models/produit.model';

const baseUrl = '/api/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }

  // Get all products
  async getAll(): Promise<Produit[]> {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching products!', error);
      throw error;
    }
  }

  // Get a single product by ID
  async get(id: any): Promise<Produit> {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`There was an error fetching the product with id ${id}`, error);
      throw error;
    }
  }

  // Create a new product
  async create(data: any): Promise<any> {
    try {
      const response = await axios.post(baseUrl, data);
      return response.data;
    } catch (error) {
      console.error('There was an error creating the product!', error);
      throw error;
    }
  }

  // Update an existing product
  async update(id: any, data: any): Promise<any> {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`There was an error updating the product with id ${id}`, error);
      throw error;
    }
  }

  // Delete a product by ID
  async delete(id: any): Promise<any> {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`There was an error deleting the product with id ${id}`, error);
      throw error;
    }
  }
}
