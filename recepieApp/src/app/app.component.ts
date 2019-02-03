import { Component } from '@angular/core';
import Recepie from 'src/models/recepie';
import RecipeIndex from '../mock/rcepies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recepieApp';
  recepiesList: Recepie[];
  filteredList: Recepie[];
  filter:String = "";

  constructor(){
    this.recepiesList = RecipeIndex;
  }

  filterHandler(event){
    this.filter = event.value;
    this.filteredList = this.recepiesList.filter((item)=>{
        return item.recipe.toLocaleLowerCase().includes(event.value);
    })
  }
}
