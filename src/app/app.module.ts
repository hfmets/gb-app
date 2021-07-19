import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowSidebarComponent } from './show-sidebar/show-sidebar.component';
import { ShowsSelectedPaneComponent } from './shows-selected-pane/shows-selected-pane.component';
import { VideoComponent } from './video/video.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShowSidebarComponent,
    ShowsSelectedPaneComponent,
    VideoComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToolbarModule,
    MenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
