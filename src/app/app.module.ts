import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationStatusComponent } from './components/authentication-status/authentication-status.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './pages/home/home.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { CharactersComponent } from './components/characters/characters.component';
import { DetailCharacterComponent } from './components/detail-character/detail-character.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticationStatusComponent,
    LogoutComponent,
    HomeComponent,
    EpisodeComponent,
    CharactersComponent,
    DetailCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...environment.auth,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
