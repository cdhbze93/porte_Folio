import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  // Variables
  public left = false;
  public rigth = false;
  public languages = ['HTML', 'CSS', 'JavaScript' , 'NodeJS', 'PHP', 'Python', 'C', 'Angular', 'SQL'];
  constructor() { }

  ngOnInit() {
  }

  toggleSideLeft() {
    this.left = !this.left;
  }

  toggleSideRight() {
    this.rigth = !this.rigth;
  }
}
