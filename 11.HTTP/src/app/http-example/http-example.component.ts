import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
public employees=[];

  constructor(private _searchService :SearchService) { }

  ngOnInit(): void {
    this._searchService.getEmployees()
    .subscribe(data => this.employees=data);
  }

}
