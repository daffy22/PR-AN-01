import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifResponse.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {

  gifs: Gif[] = [];

  get results() {
    return this.gifsService.getGifs;
  }

  constructor(private gifsService: GifsService) { }

}
