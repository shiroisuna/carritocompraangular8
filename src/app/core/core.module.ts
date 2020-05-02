import { CarritoService } from './../model/carrito.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterpageComponent } from './masterpage/masterpage.component';
import { TopBarComponent } from './masterpage/top-bar/top-bar.component';
import { MainContentComponent } from './masterpage/main-content/main-content.component';
import { HomeModule } from './../home/home.module';
import { AboutModule } from './../about/about.module';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  

      {
        path: "",
        component: HomeModule
        // loadChildren: "./../home/home.module#HomeModule"
      },
      {
        path: "about",
        component: AboutModule
        // loadChildren: "./../about/about.module#AboutModule"
      }
   
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot( routes ),
    SharedModule,
    HomeModule,
    AboutModule,
  ],
  declarations: [
    MasterpageComponent,
    TopBarComponent,
    MainContentComponent,
  ],
  exports: [
    MasterpageComponent, RouterModule
  ]
})
export class CoreModule { }
