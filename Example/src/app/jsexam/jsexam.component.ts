import { Component, OnInit ,Input} from '@angular/core';
import * as exam from './jsexam.json';
import {FormGroup ,FormBuilder} from '@angular/forms';
import {interval,timer} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jsexam',
  templateUrl: './jsexam.component.html',
  styleUrls: ['./jsexam.component.css']
})
export class JsexamComponent implements OnInit {
  
  success='success'
  ans='';
  que='';
  jsexam:any=(exam as any).default;
  employeeForm: FormGroup;
  constructor(private fb:FormBuilder) { 
  }


 


  ngOnInit() {
    this.employeeForm=this.fb.group({
    
      // ops:[''],
      question1:[],
      question2:[],
      question3:[],
      question4:[],
      question5:[],
      question6:[],
      question7:[],
      question8:[],
      question9:[],
      question10:[],
      question11:[],
      question12:[],
      question13:[],
      question14:[],
      question15:[],
      question16:[],
      question17:[],
      question18:[],
      question19:[],
      question20:[],
      question21:[],
      question22:[],
      question23:[],
      question24:[],
      question25:[],
      question26:[],
      question27:[],
      question28:[],
      question29:[],
      question30:[],
      
    });
    this.startcoundown();
  }

  onLoadDataClick()
  {
    for(var exam of this.jsexam)
    {
      this.ans=exam.answer
      this.que=exam.name
    
    this.employeeForm.setValue({
      
      question1:exam.answer,
      
     
     
    })
    console.log(exam.answer)
  }
  }
  check()
  {
    console.log(this.employeeForm.value);
    for(var exam of this.jsexam)
    {
      this.ans=exam.answer
      if(this.employeeForm.get("exam.name").value==this.ans)
      {
        console.log("correct answer")
      }
      else
      {
        console.log("incorrect answer")
      }

    
  }

  }
  onSubmit():void{
    console.log(this.employeeForm.value);
    for(var exam of this.jsexam)
    {
      this.ans=exam.answer
      if(this.employeeForm.get("exam.name").value==this.ans)
      {
        console.log("correct answer")
      }
      else
      {
        console.log("incorrect answer")
      }

    }
    location.replace('success')
    
  }


  @Input() init:number=null;
  public counter:number=0;
  public min:number=null;

  startcoundown()
  {
    this.init=60;
    this.min=30;
    if(this.init && this.init>0)
    {
      this.counter = this.init;
      this.docountdown();
    }
  }
  docountdown()
  {
    setTimeout(()=>{
      
      this.counter=this.counter-1;
      this.proccessCountdown();
    },1000)
  }
  proccessCountdown()
  {
   
    if(this.counter==0)
    {
      if(this.min==0)
      {
        this.onSubmit();
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
