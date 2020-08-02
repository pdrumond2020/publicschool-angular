import { Component, OnInit } from '@angular/core';
import { Grade } from '../grade.model';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-grade-read',
  templateUrl: './grade-read.component.html',
  styleUrls: ['./grade-read.component.css']
})
export class GradeReadComponent implements OnInit {

  grades: Grade[] 
  displayedColumns = ['id', 'schoolName', 'name', 'action']

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService.read().subscribe(grades => {
      console.log(grades)
      this.grades = grades     
    })
  }
}
