import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Employee } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  employees: Employee[];
  
  constructor(private employeeService: ProductService) {
      this.employees = employeeService.getEmployees();
  }

}
