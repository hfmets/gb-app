import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Shows',
        icon: 'pi pi-video',
        routerLink: ['/shows']
      },
      {
        label: 'Login',
        icon: 'pi pi-user-plus',
        routerLink: ['/login']
      }
    ]
  }

}
