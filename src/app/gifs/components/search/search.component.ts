import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
    .input-group-text {
      cursor: pointer;
    }
    `
  ]
})
export class SearchComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    search: [ , [ Validators.required ]]
  });

  constructor( private fb: FormBuilder,
               private gifsService: GifsService ) { }

  ngOnInit(): void {
    this.myForm.reset({
      search: ''
    });
  }

  fieldIsValid( field: string ): boolean | null {
    return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;
  }

  search() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    const search: string = this.myForm.value['search'];

    this.gifsService.search(search);
    this.myForm.reset();
  }

}
