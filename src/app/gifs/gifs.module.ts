import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Components
import { ResultComponent } from './pages/result/result.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ResultComponent,
    SearchComponent,
    SidebarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    ReactiveFormsModule
  ]
})
export class GifsModule { }
