import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      id: 1,
      type: 'Apartment',
      name: 'Birla house',
      price: 12000,
    },
    {
      id: 2,
      type: 'House',
      name: 'Birla house',
      price: 12000,
    },
    {
      id: 3,
      type: 'House',
      name: 'Birla house',
      price: 12000,
    },
    {
      id: 4,
      type: 'House',
      name: 'Birla house',
      price: 12000,
    },
    {
      id: 5,
      type: 'House',
      name: 'Birla house',
      price: 12000,
    },
    {
      id: 6,
      type: 'House',
      name: 'Birla house',
      price: 12000,
    },
    {
      id: 7,
      type: 'House',
      name: 'Birla house',
      price: 12000,
    },
    {
      id: 8,
      type: 'House',
      name: 'Birla house',
      price: 12000,
    },
    {
      id: 9,
      type: 'House',
      name: 'Birla house',
      price: 12000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
