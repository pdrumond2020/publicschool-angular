import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { HeaderService } from '../../core/header/header.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Escolas Públicas',
      icon: 'post_add',
      routeUrl: '/schools'
    }
  }

  ngOnInit(): void {
  }

  navigateToSchoolCreate(): void {
    this.router.navigate(['/school/create'])
  }

}
