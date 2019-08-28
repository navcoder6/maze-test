import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MazeExplorerComponent } from './maze-explorer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MazeExplorerComponent],
  exports:[MazeExplorerComponent]
})
export class MazeExplorerModule { }
