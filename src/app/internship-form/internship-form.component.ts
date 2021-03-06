import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InternshipValidator } from './internship-form.validators';
import { ReportsService } from 'app/internship-form/internship-form.service';
import { InternshipsListComponent } from 'app/internships-list/internships-list.component';

@Component({
  selector: 'app-internship-form',
  templateUrl: './internship-form.component.html' ,
  styleUrls: ['./internship-form.component.css']
})
export class InternshipFormComponent implements OnInit {
  public internshipForm: FormGroup;

//Dependency injection will send in an object in the cosntructor at runtime
  constructor(fb: FormBuilder, private router: Router, private internshipsList: InternshipsListComponent) {

    this.internshipForm = fb.group({
      // controlname: ['initial value', rules]
      'initials' : ['', [Validators.required,
                         InternshipValidator.getInitialsValidator()]],
      'studentname' : ['', Validators.required],
      // 'datepicker' : ['', Validators.required],
      'idNumber' : ['', [Validators.required, InternshipValidator.getIdValidator()]],
      'companyName' : ['', Validators.required],
      'names' : ['', Validators.required],
      'thoughts' : ['', ],
      'needs' : ['', ],
      'studentCompetencies' : ['', ],
      'opportunities' : ['', ],
      'miscellaneous' : ['', ],
      'suitable' : ['', Validators.required]
    })
  }

  submitInternship(internshipForm): void {

    if (internshipForm.valid) {
     this.router.navigate(['internships']);
     this.internshipsList.addReport(internshipForm);
    }
    console.log(internshipForm);
  }

  ngOnInit() {
  }
}
