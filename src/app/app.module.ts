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

const routes: Routes = [
  { path: 'user', component: UserComponent },
  // Uncomment and correct the following line if you have a `UsersComponent`:
   { path: 'users/:id', component: UsersComponent },
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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
