import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { VillainComponent } from './villain/villain.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VillainComponent,
    HeroDetailComponent,
    VillainDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
