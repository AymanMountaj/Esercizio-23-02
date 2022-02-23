import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import * as UserSrv from 'src/app/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})
export class UtenteComponent implements OnInit, OnDestroy {

  utente: User | undefined
  sub!:Subscription
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params:Params) => {
      const id = +params['id'];
      this.utente = UserSrv.getUtente(id);
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
