import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Make sure to include this line
})
export class AppComponent {
  username: string = 'John Smith';


  pageTitle:string="pipes in angular";
  users:any[]=[


    {id:101,name:'john',city:'Delhi',salary:2,dob:new Date("05/10/1989")},
    {id:101,name:'john',city:'Delhi',salary:2,dob:new Date("05/10/1989")},
    {id:101,name:'john',city:'Delhi',salary:2,dob:new Date("05/10/1989")},
    {id:101,name:'john',city:'Delhi',salary:2,dob:new Date("05/10/1989")},




  ];



}

