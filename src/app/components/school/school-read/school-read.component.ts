import { Component, OnInit } from '@angular/core';

import { School } from '../school.model';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-read',
  templateUrl: './school-read.component.html',
  styleUrls: ['./school-read.component.css']
})
export class SchoolReadComponent implements OnInit {

  schools: School[] 
  displayedColumns = ['id', 'name', 'action']

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.read().subscribe(schools => {
      console.log(schools)
      this.schools = schools     
    })
  }

}
