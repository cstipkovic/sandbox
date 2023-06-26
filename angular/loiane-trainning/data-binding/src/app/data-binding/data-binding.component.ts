import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.less']
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/id/237/200/300';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
