import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConectionService } from '../services/conection.service';

@Component({
  selector: 'app-calculo-horas-trabajo',
  templateUrl: './calculo-horas-trabajo.component.html',
  styleUrls: ['./calculo-horas-trabajo.component.css']
})
export class CalculoHorasTrabajoComponent implements OnInit {

  submitted = false;
  Service: any = [];
  Calculo: any = [];

  constructor(private formBuilder: FormBuilder, public restApi: ConectionService, public router: Router) { }

  calculateHoursForm = new FormGroup({
    idTecnico: new FormControl(''),
    semanas: new FormControl(''),
  });


  ngOnInit(): void {


    this.calculateHoursForm = this.formBuilder.group(
      {
        idTecnico: ['', Validators.required],
        semanas: ['', Validators.required],

      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.calculateHoursForm.controls;
  }

  search() {
    this.submitted = true;
    if (this.calculateHoursForm.invalid) {
      return;
    }

    //this.datos = JSON.stringify(this.calculateHoursForm.value);

    this.restApi.getServiceId(this.calculateHoursForm.value.idTecnico).subscribe((data: {}) => {
      this.Service = data;
    });

    this.restApi.getCalculoId(this.calculateHoursForm.value.idTecnico, this.calculateHoursForm.value.semanas).subscribe((data: {}) => {
      this.Calculo = data;
    });


  }


  onReset(): void {
    this.submitted = false;
    this.calculateHoursForm.reset();
  }

}
