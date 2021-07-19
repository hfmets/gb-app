import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowSidebarComponent } from './show-sidebar/show-sidebar.component';
import { ShowsSelectedPaneComponent } from './shows-selected-pane/shows-selected-pane.component';

const routes: Routes = [
  { path: 'shows/:id', component: ShowsSelectedPaneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
