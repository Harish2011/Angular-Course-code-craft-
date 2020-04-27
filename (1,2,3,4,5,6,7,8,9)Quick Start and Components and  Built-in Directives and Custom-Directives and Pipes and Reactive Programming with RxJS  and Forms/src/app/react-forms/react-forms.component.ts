import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-react-forms',
  templateUrl: './react-forms.component.html',
  styleUrls: ['./react-forms.component.css']
})
export class ReactFormsComponent implements OnInit {

 

  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  mobile = new FormControl("", Validators.required);

  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      
      "name": this.name,
      "mobile": this.mobile,
      "comment": this.comment,
      "email": this.email
    });
    this.form.valueChanges
        .subscribe( data => {
          if (this.form.valid) {
            data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
            data.lastUpdateTS = new Date();
            console.log(JSON.stringify(data))
          }
        });
  }

  onSubmit() {
    console.log("Form submitted!");
  }

  ngOnInit(): void {
  }

}
