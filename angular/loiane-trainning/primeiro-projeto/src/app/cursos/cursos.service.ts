import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  constructor() {}

  getCurso() {
    return ['NodeJS', 'ReactJS', 'Angular', 'Rust'];
  }
}
