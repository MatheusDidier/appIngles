import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento: boolean = true;
  public venceu: boolean;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    if (tipo == "derrota") {
      this.venceu = false;
    }
    else {
      this.venceu = true;
    }
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.venceu = undefined;
  }

}
