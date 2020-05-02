import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { MasterpageComponent } from './core/masterpage/masterpage.component';
import { CarritoService } from './model/carrito.service';
// import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    // CarritoService
    
  ],
  // exports: [CarritoService],
  providers: [],
  bootstrap: [ MasterpageComponent ]
})
export class AppModule { }
