import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HousingService } from 'src/app/services/housing.service';
import { Property } from '../Property.interface';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties!: Array<Property>;
  sellRent = 1;

  constructor(private housingService: HousingService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
