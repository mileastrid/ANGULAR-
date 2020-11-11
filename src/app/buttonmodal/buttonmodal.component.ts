import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonmodal',
  templateUrl: './buttonmodal.component.html',
  styleUrls: ['./buttonmodal.component.css'],
})
export class ButtonmodalComponent implements OnInit {
  modalShow: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ShowModal() {
    this.modalShow = !this.modalShow;
  }
}
