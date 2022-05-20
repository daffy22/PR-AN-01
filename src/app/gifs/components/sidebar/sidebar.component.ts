import { Component, EventEmitter, Output } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    .item {
      cursor: pointer;
    }
    `
  ]
})
export class SidebarComponent {

  @Output() onSearch = new EventEmitter<string>();

  get history() {
    return this.gifsService.getHistory;
  }

  constructor( private gifsService: GifsService) {}

  searchByHistory(search: string) {
    this.onSearch.emit(search);
  }

  clean() {
    this.gifsService.cleanHistory();
  }
}
