import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { InternshipFormComponent } from './internship-form.component';


let comp:    InternshipFormComponent;
let fixture: ComponentFixture<InternshipFormComponent>;
let de:      DebugElement;
let el:      HTMLElement;
let input:   HTMLInputElement;

import {FormsModule, ReactiveFormsModule, FormGroup} from "@angular/forms";

describe('InternshipFormComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        InternshipFormComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ], // declare the test component
    });

    fixture = TestBed.createComponent(InternshipFormComponent);
    comp = fixture.componentInstance;

    input = fixture.debugElement.query(By.css("input")).nativeElement;
    el = fixture.debugElement.nativeElement; //the component. (Beware of *ngIf invisible elements)
  });


  it('should create a `FormGroup` comprised of `FormControl`s', () => {
    comp.ngOnInit();
    expect(comp.internshipForm instanceof FormGroup).toBe(true);
  });

  it('form should start out invalid', () => {
    comp.ngOnInit();
    // fixture.detectChanges(); // This is for after you change something
    expect(comp.internshipForm.valid).toBeFalsy();
  });


  // it('should display error message - initials', () => {
  //   input.value = '';
  //   fixture.detectChanges();
  //   let msgs = el.querySelectorAll('p.help-block');
  //   expect(msgs[0].innerHTML).toContain('Initials are invalid');
  // });


});