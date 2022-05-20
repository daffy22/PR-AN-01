import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifResponse.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  @Input() gif!: Gif;

  constructor() {}

}
