import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatButtonModule,MatInputModule,MatListModule,MatDividerModule,
  MatIconModule,MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: []
})
export class SharedModule { }
