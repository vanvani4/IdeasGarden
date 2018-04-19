import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  searchForm: FormGroup;
  show = true;
  ser: string;

  constructor(private fb: FormBuilder,  private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  search(searchForm: FormGroup) {
    this.ser = searchForm.value.search;
    console.log(this.ser);
    
  }

}
