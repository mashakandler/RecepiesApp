import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Recepie from 'src/models/recepie';
import RecipeIndex from '../mock/rcepies';
import DataService from 'src/services/service.service';
import { Observable,from,fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  
  @ViewChild("buttonElem") btn: ElementRef;
  imgUrl = "https://www.sela.co.il/Media/image/home/logoSiteIcon.svg";
  imgWidth = 300;

  title = 'recepieApp';
  recepiesList: Recepie[];
  filteredList: Recepie[];
  numbers: number[];
  filter:String = "";
  data: any[];
  arr: number[];

  constructor(private service: DataService){
    this.recepiesList = RecipeIndex;
    
  }

  ngOnInit() {

    this.service.getData().subscribe((data)=>{
        this.data = data;
    })
    // let inter= from(interval(1000))

    // inter.subscribe((item)=>{
    //   console.log(item)
    // });

    // let clickStream$=fromEvent(this.btn.nativeElement, "click")
    
    // clickStream$.subscribe((item)=>{
    //   console.log(item)
    // });
    
    this.service.arrObsarvable.subscribe(next =>{
        this.arr = next;
        debugger;
    });


      
  }


  filterHandler(event){
    this.filter = event.value;
    this.filteredList = this.recepiesList.filter((item)=>{
        return item.recipe.toLocaleLowerCase().includes(event.value);
    })
  }
}
