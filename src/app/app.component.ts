import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-school';



  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;

  //@ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
    .pipe(
      map(() => content.scrollTop)
    )
    .subscribe({
      next: (value: number) =>  this.determineHeader(value)
    })
  }

  determineHeader(scrollTop: number): void {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    // this.breakPointObserver.observe(['(max-width: 800px)']).subscribe({
    //   next: (res) => {
    //       if(res.matches) {
    //         //this.sidenav.mode = 'push';
    //         //this.sidenav.close()
    //         this.isSmallScreen = true;

    //       } else {
    //         //this.sidenav.mode = 'side';
    //         //this.sidenav.open()
    //         this.isSmallScreen = false;
    //       }
    //   }
    // })

    this.breakPointObserver
    .observe(['(max-width: 800px)'])
    .subscribe((res) => this.isSmallScreen = res.matches);

    // this.breakPointObserver.observe(['(max-width: 800px)'])
    // .pipe(pluck('matches'))
    // .subscribe({
    //   next: (res: boolean) => this.isSmallScreen = res;
    // })
  }

  get sideNavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
