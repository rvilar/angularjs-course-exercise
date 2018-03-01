import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ListItemDetailComponent } from './list-item-detail/list-item-detail.component';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'list-detail/:id', component: ListItemDetailComponent}
  { path: '', redirectTo: 'shopping-list', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}
