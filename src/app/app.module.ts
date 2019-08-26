import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MazeExplorerModule } from './maze-explorer/maze-explorer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MazeExplorerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
