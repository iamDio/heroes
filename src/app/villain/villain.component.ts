import { Component, OnInit } from '@angular/core';
import { Villain }           from '../villain';
import { VILLAINS }          from '../mock-villains';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {
  //take the villain class and set it equal to the array of villains
  Villains = VILLAINS ;

  //add a property of selectedVillain on the VillainComponent
  selectedVillain: Villain ;
  constructor() { }

  ngOnInit() {
  }

  //when the onSelect method is called,  git selectedVillain the value of the 1 villain that was clicked on
  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
    console.log(villain)
  }
}
