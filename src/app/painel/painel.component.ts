import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import Frase from "../shared/frase.model";
import { FRASES } from "./frase-mock";
import Coracao from "../shared/coracao.model";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;

  public instrucao: string = "Traduza a frase";
  public resposta: string = "";
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();
  public fimDeJogo: boolean = false;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }



  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }
  public verificarResposta(): void {
    if (this.resposta == this.rodadaFrase.frasePtbr) {
      alert("A tradução está correta!");
      if (!(this.rodada == 4)) {
        this.atualizaRodada();
        this.progresso += (1 / this.frases.length) * 100;
        this.resposta = "";
      }
      else {
        this.encerrarJogo.emit("vitoria");
        this.fimDeJogo = true;
        this.resposta = "";
      }
    }
    else {
      alert("A tradução está incorreta!");
      this.tentativas--;
      if (this.tentativas == -1) {
        this.encerrarJogo.emit("derrota");
      }

    }
  }


  public atualizaRodada(): void {

    this.rodadaFrase = this.frases[this.rodada++];

  }
}
