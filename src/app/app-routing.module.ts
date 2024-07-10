import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddressComponent } from './address/address.component';
import { ComponyComponent } from './compony/compony.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'users/:id', component: UsersComponent ,

    children:[
      {path:'address', component :AddressComponent},
      {path:'compony', component :ComponyComponent}
    ]
  } // Correct route for user details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
