import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { School } from '../school.model';

@Component({
  selector: 'app-school-delete',
  templateUrl: './school-delete.component.html',
  styleUrls: ['./school-delete.component.css']
})
export class SchoolDeleteComponent implements OnInit {

  school: School

  constructor(
    private schoolService: SchoolService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.schoolService.readById(id).subscribe(school => {
      this.school = school
    })
  }

  deleteSchool(): void {
    this.schoolService.delete(this.school.id).subscribe(() => {
      this.schoolService.showMessage('Escola pública deletada com sucesso!')
      this.router.navigate(['/schools'])
    })
  }

  cancel(): void {
    this.router.navigate(['/schools'])
  }

}
