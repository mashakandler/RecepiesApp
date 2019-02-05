import { Component, OnInit, Input } from '@angular/core';
import Recepie from 'src/models/recepie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //@Input() items: Recepie[]
  constructor(private route: ActivatedRoute,
        private router: Router) {}

        ngOnInit() {
          // this.sub = this.route.params.subscribe(params => {      let id = +params['id']; // (+) converts string 'id' to a number      this.service.getProduct(id).then(hero => this.hero = hero);    });  }
        }
}
