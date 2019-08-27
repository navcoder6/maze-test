import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MazeExplorerComponent } from './maze-explorer.component';
import {MatButtonModule,MatInputModule,MatListModule,MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [MazeExplorerComponent],
  exports:[MazeExplorerComponent]
})
export class MazeExplorerModule { }
