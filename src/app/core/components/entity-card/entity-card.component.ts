import {Component, Input} from '@angular/core';
import {EntityCardModel} from './models/entity-card.model';

@Component({
  selector: 'bcb-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {

  @Input() entity: EntityCardModel;

  constructor() {
  }

}
