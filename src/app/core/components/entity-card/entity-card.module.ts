import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityCardComponent } from './entity-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
    declarations: [EntityCardComponent],
    exports: [
        EntityCardComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class EntityCardModule { }
