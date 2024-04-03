import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MyFitComponent } from './pages/my-fit/my-fit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    IndexComponent,
    AboutMeComponent,
    TrainingsComponent,
    DataProtectionComponent,
    GalleryComponent,
    MyFitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
