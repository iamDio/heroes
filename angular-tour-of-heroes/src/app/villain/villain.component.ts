import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {
  villain: Villain = {
    id:1,
    name:'Monster',
    superPower: 'summon spirts from hades'
  }


  constructor() { }

  ngOnInit() {
  }

}
