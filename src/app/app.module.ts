import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersService } from './users.service';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { ComponyComponent } from './compony/compony.component'; // Import CommonModule

const routes: Routes = [ 
  { path: 'users', component: UserComponent },
  { path: 'users/:id', component: UsersComponent },

  // Uncomment and correct the following line if you have a `UsersComponent`:
  //  { path: 'users/:id', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    UserComponent,
    ChildComponent,
    AboutComponent,
    ContactComponent,
    AddressComponent,
    ComponyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
