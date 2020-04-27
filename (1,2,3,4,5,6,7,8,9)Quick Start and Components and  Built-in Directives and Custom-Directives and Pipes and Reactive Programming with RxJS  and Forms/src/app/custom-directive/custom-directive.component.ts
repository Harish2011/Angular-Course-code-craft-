import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  constructor() { }
  hide = true;

  hover=true;

  
  jokes=[
    {
      "setup":"What did the cheese say when it looked in the mirror?",
      "punchline":"Hello-me (Halloumi)"
    },
    {
      "setup":"What kind of cheese do you use to disguise a small horse?",
      "punchline":"Mask-a-pony (Mascarpone)"
    },
    {
      "setup":"A kid threw a lump of cheddar at me",
      "punchline":"I thought ‘That’s not very mature’"
    }
  ]

  toggle()
  {
    this.hide=!this.hide
  }

  mouseover()
  {
    this.hover=false;
  }
  mouseout()
  {
    this.hover=true;
    
  }
   

  ngOnInit(): void {
  }

}
