import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent {
  @ViewChild('myModal', { static: false }) myModal: ElementRef;
  constructor() { }
  @Input() legenda = 'Procurando IP...';

  ngOnInit(): void {
    // this.modal = new ElementRef(document.getElementById('myModal'));
  }

  open() {
    this.myModal.nativeElement.style.display = 'flex';
  }

  close() {
    this.myModal.nativeElement.style.display = 'none';
  }

}
