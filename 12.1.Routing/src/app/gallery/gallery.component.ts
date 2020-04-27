import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  concepts()
  {
   
  }
}
