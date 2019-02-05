import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import RecipeIndex from 'src/mock/rcepies';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [ 
    { path: 'list', component: ListComponent, data: { items:RecipeIndex } },
    { path: 'page1', component: Page1Component }, 
    { path: 'page2', component: Page2Component },
    { path: '**', component: ListComponent }
  ]; 
  
export const AppRouting = RouterModule.forRoot(appRoutes);