import { School } from './../school.model';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-school-update',
  templateUrl: './school-update.component.html',
  styleUrls: ['./school-update.component.css']
})
export class SchoolUpdateComponent implements OnInit {

  public schoolForm: FormGroup;

  school: School;

  constructor(
    private schoolService: SchoolService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')

    this.schoolService.readById(id).subscribe(school => {
      console.log(school);
      this.school = school
    })

    this.schoolForm = new FormGroup({
      $key: new FormControl(null),
      name: new FormControl('', Validators.required)
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.schoolForm.controls[controlName].hasError(errorName);
  }

  updateSchool(schoolFormValue): void {
    if (this.schoolForm.valid) {
      this.executeSchoolUpdate(schoolFormValue);
    }
  }

  private executeSchoolUpdate = (schoolFormValue) => {
    let school: School = {
      name: schoolFormValue.name
    }
 
    this.schoolService.update(this.school).subscribe(() => {
      this.schoolService.showMessage('Escola Pública alterada com sucesso!')
      this.router.navigate(['/schools'])
    })  
  }

  cancel(): void {
    this.router.navigate(['/schools'])
  }

}
