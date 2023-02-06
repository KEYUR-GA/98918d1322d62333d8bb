import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDIa: MatDialogRef<PopupComponent>

  ) {
    matDIa.disableClose = true

  }

  ngOnInit() {
  }
  close() {
    this.matDIa.close()
  }

}
