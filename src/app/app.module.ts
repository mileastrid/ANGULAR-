//modulos
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { IndexComponent } from './index/index.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';

//servicios
import { ChatService } from './providers/chat.service';
import { ButtonmodalComponent } from './buttonmodal/buttonmodal.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes', component: QuienesComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'index', component: IndexComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    QuienesComponent,
    ContactoComponent,
    NosotrosComponent,
    IndexComponent,
    ServicioComponent,

    LoginComponent,

    ButtonmodalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
