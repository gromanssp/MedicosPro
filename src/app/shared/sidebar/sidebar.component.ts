import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // list = document.querySelectorAll('.navigation li');
  activo: string = 'activo';
  
  constructor() { }

  ngOnInit(): void {
  }

  // add hovered class to div
//  activeLink() {
//     list.forEach(item => {
//         item.classList.remove('hovered');
//     });
//     this.classList.add('hovered');
// }

// list.forEach(item => {
//     item.addEventListener('mouseover', activeLink);
// });
}
