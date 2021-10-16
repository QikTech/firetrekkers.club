import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs'; 

import { HeaderComponent } from './components/header/header.component';
import { PageComponentComponent } from './components/page-component/page-component.component';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PlacesComponent } from './places/places.component';
import { ShowPlacesComponent } from './places/show-places/show-places.component';
import { AddEditPlacesComponent } from './places/add-edit-places/add-edit-places.component';

import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageComponentComponent,
    FooterComponent,
    PlacesComponent,
    ShowPlacesComponent,
    AddEditPlacesComponent,
    // MatTabsModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
