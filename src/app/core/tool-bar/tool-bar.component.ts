import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/loading/loading.service';

import { AuthService } from '../auth/services/auth.service';
import { TemaService } from '../services/tema.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  @Output() public onToggleTheme: EventEmitter<any>;

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean>

  mostrarCarregamento$!: Observable<boolean>

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private temaService: TemaService) {

    this.onToggleTheme = new EventEmitter()

    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      )
  }

  ngOnInit(): void {
    this.mostrarCarregamento$ = this.loadingService.estaCarregando()
  }

  toggleTheme() {
    this.onToggleTheme.emit()
  }

  sair() {
    this.authService.logout()
      .subscribe(() => {
        this.temaService.removerTemaUsuario()
        this.router.navigate(['/login'])
      })
  }
}
