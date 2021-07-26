import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShowSidebarComponent } from './components/show-sidebar/show-sidebar.component';
import { ShowsSelectedPaneComponent } from './components/shows-selected-pane/shows-selected-pane.component';
import { ShowsComponent } from './components/shows/shows.component';

const routes: Routes = [
  { path: 'shows', component: ShowsComponent},
  { path: 'shows/:id', component: ShowsSelectedPaneComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/shows', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
