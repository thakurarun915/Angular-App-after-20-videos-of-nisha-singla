import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import{RouterModule,Routes} from '@angular/router';
const routes: Routes =[
  
    {path:'users',component:UserComponent},
    {path:'About',component:AboutComponent},
    {path:'contact',component:ContactComponent},
  
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
    HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
