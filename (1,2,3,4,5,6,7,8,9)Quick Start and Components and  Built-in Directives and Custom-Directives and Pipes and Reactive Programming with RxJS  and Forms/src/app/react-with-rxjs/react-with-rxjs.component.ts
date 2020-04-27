import { Component, OnInit,Input } from '@angular/core';
import { map, filter, take } from "rxjs/operators";
import { interval, pipe } from "rxjs";

@Component({
  selector: 'app-react-with-rxjs',
  templateUrl: './react-with-rxjs.component.html',
  styleUrls: ['./react-with-rxjs.component.css']
})
export class ReactWithRxjsComponent implements OnInit {
n=1
hello=true
  constructor() { }

  ngOnInit() {

    this.startcoundown();
    
////////////// Task-1 //////////////////////

    interval(1000)
    
      .pipe(
        take(5),
        map(v => Date.now())
        
      )
      .subscribe(value => console.log("Subscriber: " + value));
      
      interval(1000)
      
        .pipe(
          take(5),
          
          
        )
        .subscribe(value => console.log("value: " + value));
      
      
  }




  ////////////////////////// Task-2 /////////////////////


  @Input() init:number=null;
  public counter:number=0;
  public min:number=null;

  startcoundown()
  {
    this.init=60;
    this.min=1;
    if(this.init && this.init>0)
    {
      this.counter = this.init;
      this.docountdown();
    }
  }
  docountdown()
  {
    setTimeout(()=>{
      this.hello=!this.hello
      this.counter=this.counter-1;
      this.proccessCountdown();
    },1000)
  }
  proccessCountdown()
  {
    //console.log("count is ",this.counter);
    
    if(this.counter==0)
    {
      if(this.min==0)
      {
      location.replace('')

      }
      else
      {
        this.counter=60;
        this.min=this.min-1;
        this.docountdown();
      }
      
    }
    else{
      this.docountdown();
    }
  }



}
