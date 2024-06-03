import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

// Define the User and Address interfaces
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle: string = "pipes in angular";
  users: User[] = [];
  errorMessage:string="Loading...."

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    },(err)=>{
      this.errorMessage = "Some internal issue while making api call ";
    }
  );
  }
}



