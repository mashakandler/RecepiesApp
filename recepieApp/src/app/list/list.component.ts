import { Component, OnInit, Input } from '@angular/core';
import Recepie from 'src/models/recepie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: Recepie[]
  constructor() { }

  ngOnInit() {
  }

}
