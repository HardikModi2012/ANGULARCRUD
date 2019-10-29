import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees : Employee[] = [
  {
    id: 1,
    name: 'mark',
    gender: 'Male',
    contactPrefrence: 'Email',
    email: 'mark@gmail.com',
    dateOfBirth: new Date('10/25/2015'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/mark.png'
  },
  {
    id: 2,
    name: 'mary',
    gender: 'Female',
    contactPrefrence: 'Phone',
    phonenumber: 1234567890,
    dateOfBirth: new Date('10/25/2015'),
    department: 'HR',
    isActive: true,
    photoPath: 'assets/images/mary.png'
  } 
]
  constructor() { }

  ngOnInit() {
  }

}
