import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-idea',
  templateUrl: './search-idea.component.html',
  styleUrls: ['./search-idea.component.css']
})
export class SearchIdeaComponent implements OnInit {
  
  constructor() { }

  ngOnInit() { }

  search(sear) {
    console.log(sear);
  }
}
