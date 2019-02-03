import { Component, OnInit, Input } from '@angular/core';
import Recepie from 'src/models/recepie';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item: Recepie;
  
  constructor() { }

  ngOnInit() {
  }

}
