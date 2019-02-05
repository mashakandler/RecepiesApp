import { Component, OnInit } from '@angular/core';
import Recepie from 'src/models/recepie';
import RecipeIndex from '../mock/rcepies';
import DataService from 'src/services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  
  imgUrl = "https://www.sela.co.il/Media/image/home/logoSiteIcon.svg";
  imgWidth = 300;

  title = 'recepieApp';
  recepiesList: Recepie[];
  filteredList: Recepie[];
  numbers: number[];
  filter:String = "";

  constructor(private service: DataService){
    this.recepiesList = RecipeIndex;
   
    
  }

  ngOnInit() {
    this.service.currentMessage.subscribe(message =>{
        debugger
      })
      this.service.changeMessage(4)
      
  }


  filterHandler(event){
    this.filter = event.value;
    this.filteredList = this.recepiesList.filter((item)=>{
        return item.recipe.toLocaleLowerCase().includes(event.value);
    })
  }
}
