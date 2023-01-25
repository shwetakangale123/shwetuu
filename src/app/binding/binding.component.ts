import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  public sampleText:string = "";
  public link:string = "";
  public fullName:string="shweta"

  constructor() { }

  ngOnInit(): void {
    this.sampleText="hello this is Interpolation";
    this.link="https://www.google.com/";

    
  }
  clickEvent(){
    console.log("this is for event")
  }
}
