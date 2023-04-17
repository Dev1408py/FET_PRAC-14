import { Injectable } from '@angular/core';
import { Employee } from './product.model';

@Injectable({
providedIn: 'root'
})

export class ProductService{
  private empls: Employee[] = [
    { id: 1, name: 'Dev Patel', position: 'Developer',salary:17465 },
    { id: 2, name: 'Dhairya Jadav', position: 'Manager',salary:88465 },
    { id: 3, name: 'Devarsh Bandya', position: 'Sales',salary:43536 },
    { id: 4, name: 'Shelby Patel', position: 'Marketing',salary:97354 }
  ];
  getEmployees(): Employee[] {
      return this.empls;
  }
}