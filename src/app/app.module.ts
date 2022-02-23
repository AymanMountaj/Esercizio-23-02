import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { HomeComponent } from './pages/home/home.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { UsersComponent } from './pages/users/users.component';
import { DettagliComponent } from './pages/dettagli/dettagli.component';
import { UtenteComponent } from './pages/utente/utente.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active-posts',
    component: ActivePostsComponent
  },
  {
    path: 'active-posts/:id',
    component: DettagliComponent
  },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent
  },
  {
    path: 'inactive-posts/:id',
    component: DettagliComponent
  },
  {
    path:'users',
    component:UsersComponent,
    children:[
      {
        path:':id',
        component: UtenteComponent
      }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    NavbarComponent,
    CardComponent,
    UsersComponent,
    DettagliComponent,
    UtenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
