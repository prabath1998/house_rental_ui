import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property : any;

  // property:any = {
  //   "id":1,
  //   "type" : "House",
  //   "name" : "Birla house",
  //   "price" : 12000
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
