import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage-service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  isAuthenticated = false;
  isCollapsed = true;

  constructor(private dataStorageServive: DataStorageService,
              private authService: AuthService){}



  ngOnInit() {
   this.userSub = this.authService.user.subscribe(user =>{
    this.isAuthenticated = !!user;
   });
  }

  onSaveData(){
this.dataStorageServive.storeRecipes();
  }

  onFetchData(){
    this.dataStorageServive.fetchRecipes().subscribe();
  }

  OnLogout(){
  this.authService.logout();
  }

  ngOnDestroy() {
  this.userSub.unsubscribe();
  }
  
  toggleCollapse() {

    this.isCollapsed = !this.isCollapsed;
  }

}
