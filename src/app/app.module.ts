import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowSidebarComponent } from './components/show-sidebar/show-sidebar.component';
import { ShowsSelectedPaneComponent } from './components/shows-selected-pane/shows-selected-pane.component';
import { VideoComponent } from './components/video/video.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { ShowsComponent } from './components/shows/shows.component';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { LoginComponent } from './components/login/login.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowSidebarComponent,
    ShowsSelectedPaneComponent,
    VideoComponent,
    MenubarComponent,
    ShowsComponent,
    ProgressSpinnerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ProgressSpinnerModule,
    ToolbarModule,
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    CardModule,
    DataViewModule,
    PanelModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
