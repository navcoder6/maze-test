import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MazeExplorerComponent } from './maze-explorer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MazeExplorerComponent],
  exports:[MazeExplorerComponent]
})
export class MazeExplorerModule { }
