import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateList(value) {
      this.filter.emit({value: value})
  }

}
