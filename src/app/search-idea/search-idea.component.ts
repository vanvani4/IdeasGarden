import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-idea',
  templateUrl: './search-idea.component.html',
  styleUrls: ['./search-idea.component.css']
})
export class SearchIdeaComponent implements OnInit {

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
