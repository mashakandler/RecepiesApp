import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import DataService from 'src/services/service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filter = new EventEmitter();
  show = false;
  arr :number[];
  
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.arrObsarvable.subscribe(next =>{
      this.arr = next;
  });
  }

  updateList(value) {
      this.filter.emit({value: value})
      this.arr.push(4)
      this.service.updateArr(this.arr)
  }

}
