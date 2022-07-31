import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConectionService } from '../services/conection.service';
import Validation from '../utils/validations';


@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.css']
})
export class ReporteServicioComponent implements OnInit {
  submitted = false;

  constructor(private formBuilder: FormBuilder, public restApi: ConectionService, public router: Router,
    private datePipe: DatePipe
  ) { }

  reportForm = new FormGroup({
    idTecnico: new FormControl(''),
    idServicio: new FormControl(''),
    fInicio: new FormControl(''),
    fFin: new FormControl(''),
  });

  datos: string = '';

  ngOnInit(): void {


    this.reportForm = this.formBuilder.group(
      {
        idTecnico: ['', Validators.required],
        idServicio: ['', Validators.required],
        fInicio: ['', Validators.required],
        fFin: ['', Validators.required]
      },
      {
        validators: [Validation.match('fInicio', 'fFin')]
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.reportForm.controls;
  }

  save() {
    this.submitted = true;
    if (this.reportForm.invalid) {
      return;
    }

    const date1 = this.datePipe.transform(this.reportForm.value.fInicio, 'yyyy-MM-dd HH:mm')
    const date2 = this.datePipe.transform(this.reportForm.value.fFin, 'yyyy-MM-dd HH:mm')
    this.reportForm.value.fInicio = date1;
    this.reportForm.value.fFin = date2;

    console.log(this.reportForm.value.fInicio);

    this.datos = JSON.stringify(this.reportForm.value);

    this.restApi.createService(this.reportForm.value).subscribe((data: {}) => {
      console.log(data);
      this.router.navigate(['/home']);
    });

  }

  onReset(): void {
    this.submitted = false;
    this.reportForm.reset();
  }

}
