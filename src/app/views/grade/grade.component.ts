import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/header/header.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Turmas',
      icon: 'post_add',
      routeUrl: '/grades'
    }
  }

  ngOnInit(): void {
  }

  navigateToGradeCreate(): void {
    this.router.navigate(['/grade/create'])
  }

}
