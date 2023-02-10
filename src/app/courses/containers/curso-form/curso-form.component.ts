import { Curso } from './../../model/curso';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form = this.fb.group({
    _id: [''],
    name: [''],
    category: ['']
  })



  constructor(private fb: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    const curso: Curso = this.route.snapshot.data['curso'];
    this.form.setValue({
      _id: curso._id,
      name: curso.name,
      category: curso.category
    })
    console.log(curso)
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(res => {
      if(res){
        this.success()
        this.location.back()
      }
    }, error => {
     this.handleError()
    })
  }
  onCancel(){
    this.location.back()
  }

  private handleError(){
    this.snackBar.open("Ocorreu um erro","", {
      duration: 2000
    });
  }

  private success(){
    this.snackBar.open("Curso salvo com sucesso","",{
      duration: 2000
    })
  }

}
