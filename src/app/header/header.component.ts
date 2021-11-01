import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  public date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void { }



  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout() {
    localStorage.clear;
    if (confirm("Do you want to logout?")) {
      this.router.navigate(['/login']);
    }
  }
}
