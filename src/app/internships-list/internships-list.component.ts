import { Component, OnInit } from '@angular/core';
import { InternshipFormComponent } from '../internship-form/internship-form.component';
import { ReportsService } from '../internship-form/internship-form.service';
import { FormGroup } from "@angular/forms/src/model";

@Component({
  selector: 'app-internships-list',
  templateUrl: './internships-list.component.html',
  styleUrls: ['./internships-list.component.css']
})
export class InternshipsListComponent implements OnInit {
  errorMessage: string;
  reports: InternshipFormComponent[];
  mode = 'Observable';

  constructor(private reportService: ReportsService) { }

  ngOnInit() {
    this.reportService.getReports()
                      .subscribe(
                        reports => this.reports = reports,
                        error => this.errorMessage = <any>error
                      );
    setTimeout(() => {
          console.log(this.reports);
    console.log(this.errorMessage);}
    , 3000);

  }

  addReport(report: FormGroup) {
    this.reportService.create(report)
                   .subscribe(
                     internship  => this.reports.push(internship),
                     error =>  this.errorMessage = <any>error);
  }
}
