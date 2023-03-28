import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.less']
})
export class CursosComponent {
  nomePortal: string;
  cursos: string[];

  constructor(private cursoService: CursosService) {
    this.nomePortal = 'Trainning Angular';

    this.cursos = this.cursoService.getCurso();
  }
}
