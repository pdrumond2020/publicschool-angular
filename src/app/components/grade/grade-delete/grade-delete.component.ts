import { Component, OnInit } from '@angular/core';
import { GradeService } from '../grade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Grade } from '../grade.model';

@Component({
  selector: 'app-grade-delete',
  templateUrl: './grade-delete.component.html',
  styleUrls: ['./grade-delete.component.css']
})
export class GradeDeleteComponent implements OnInit {

  grade: Grade

  constructor(
    private gradeService: GradeService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.gradeService.readById(id).subscribe(grade => {
      this.grade = grade
    })
  }

  delete(): void {
    this.gradeService.delete(this.grade.id).subscribe(() => {
      this.gradeService.showMessage('Turma deletada com sucesso!')
      this.router.navigate(['/grades'])
    })
  }

  cancel(): void {
    this.router.navigate(['/grades'])
  }

}
