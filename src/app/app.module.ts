import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './_layout/navbar/navbar.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './_routes/routes';
import { HomeComponent } from './_static/home/home.component';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxGalleryModule } from 'ngx-gallery';
import { DesignComponent } from './_static/design/design.component';
import { HardwareComponent } from './_static/hardware/hardware.component';
import { SoftwareComponent } from './_static/software/software.component';
import { AboutComponent } from './_static/about/about.component';
import { WorkComponent } from './_static/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DesignComponent,
    HardwareComponent,
    SoftwareComponent,
    AboutComponent,
    WorkComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    NgxGalleryModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
