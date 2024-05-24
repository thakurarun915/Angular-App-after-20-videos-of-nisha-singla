import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']

})
export class BindingComponent implements OnInit{
   pageTitle:string = "Data Binding in angular";

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  changeTitle(){
    this.pageTitle = "Data Binding";
  }

}
