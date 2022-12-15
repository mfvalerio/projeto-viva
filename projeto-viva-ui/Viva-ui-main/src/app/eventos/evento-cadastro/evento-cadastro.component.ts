import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { Evento } from 'src/app/model';
import { EventoService } from '../evento.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.component.html',
  styleUrls: ['./evento-cadastro.component.scss']
})
export class EventoCadastroComponent implements OnInit {

  caterories = []
  evento = new Evento();

  constructor(
    private categoriaService: CategoriaService,
    private eventoService: EventoService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title

  ) { }

  ngOnInit(): void {
    const idEvento = this.route.snapshot.params[`id`];
    this.title.setTitle('Cadastro de Evento');
    if(idEvento && idEvento != 'new'){
      this.carregarEvento(idEvento);
    }
    this.carregarCategories();
  }

  carregarEvento(id: number) {
    this.eventoService.buscarPorCodigo(id)
      .then(evento => {
        this.evento = evento;
      })
      // .catch(erro => this.errorHandler.handle(erro));
  }

  get editando(): Boolean {
    return Boolean(this.evento.id);
  }


  carregarCategories(): any {
    return this.categoriaService.listarTodas()
      .then(categories => {
        this.carregarCategories = categories
          .map((category: any) =>
          ({ label: category.nome, value: category.codigo }));
      })
      // .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(eventoForm: NgForm){
    if(this.editando){
      this.atualizarEvento(eventoForm);
    }else{
      this.adicionarEvento(eventoForm);
    }
  }

  adicionarEvento(lancamentoForm: NgForm) {
    this.eventoService.adicionar(this.evento)
      .then(eventoAdicionado => {
        this.messageService.add({ severity: 'success',
          detail: 'Evento adicionado com sucesso!' });
          this.router.navigate(['/eventos', eventoAdicionado.id]);
      })
      // .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarEvento(eventoForm: NgForm) {
    this.eventoService.atualizar(this.evento)
      .then(evento => {
        this.messageService.add({ severity: 'success',
          detail: 'Evento atualizado com sucesso!' });
        this.evento = evento;
      })
      // .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: NgForm){
    form.reset(new Evento());
    this.router.navigate(['/events/new']);
  }

}
