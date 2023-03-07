import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss'],
  animations: [
    trigger('panelState', [
      state(
        'collapsed',
        style({
          height: '0',
          opacity: 0,
        })
      ),
      state(
        'expanded',
        style({
          height: 'auto',
          opacity: 1,
        })
      ),
      transition('collapsed <=> expanded', animate('200ms ease-in-out')),
    ]),
  ],
})
export class PanelsComponent {
  isExpanded = false;
  isMobile: boolean = false;
  @Input() heading: string = '';
  @Input() description: string = '';

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {}

  togglePanel(): void {
    this.isExpanded = !this.isExpanded;
  }
}
