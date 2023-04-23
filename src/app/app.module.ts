import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './componenets/nabvar/nabvar.component';
import { TareasComponent } from './componenets/tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componenets/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    TareasComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
