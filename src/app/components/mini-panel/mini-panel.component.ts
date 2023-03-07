import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-panel',
  templateUrl: './mini-panel.component.html',
  styleUrls: ['./mini-panel.component.scss'],
})
export class MiniPanelComponent {
  isExpanded = false;
  togglePanel() {
    if(this.isExpanded){
      this.isExpanded =false;
    }else{
      this.isExpanded = true;
    }
  }
}
