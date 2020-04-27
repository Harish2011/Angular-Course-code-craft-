import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departmets',
  templateUrl: './departmets.component.html',
  styleUrls: ['./departmets.component.css']
})
export class DepartmetsComponent implements OnInit {

  departments=
  [
    { "id":1,"name":"HTML"},
    { "id":2,"name":"CSS"},
    { "id":3,"name":"JS"},
    { "id":4,"name":"TS"},
    { "id":5,"name":"SCSS"},
  ]
  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onselect(dp)
  {
    this.router.navigate(['/departments',dp.id]);
  }

}
