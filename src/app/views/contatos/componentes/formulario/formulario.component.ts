import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormContatosViewModel } from '../../models/form-contato-view-model';
import { TemaService } from 'src/app/core/services/tema.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() onEnviarContato = new EventEmitter<FormContatosViewModel>()

  @Input() contato?: FormContatosViewModel

  form!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required]),
      favorito: new FormControl(false, [Validators.required]),
    })
    if (this.contato)
      this.form.patchValue(this.contato!)
  }

  onSubmit() {
    if (this.form.valid) {
      this.contato = this.form.value
      this.onEnviarContato.emit(this.contato)
    } ''

  }

  campoValido(campo: string) {
    return (this.form.get(campo)?.hasError('required') && !this.form.get(campo)?.pristine)
      || (this.form.get(campo)?.hasError('email') && !this.form.get(campo)?.pristine)
  }
}
