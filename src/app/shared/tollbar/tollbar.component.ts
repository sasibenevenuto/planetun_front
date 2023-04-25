import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-tollbar',
  templateUrl: './tollbar.component.html',
  styleUrls: ['./tollbar.component.scss']
})
export class TollbarComponent implements OnInit {

  isLoadingResults: boolean = false;

  constructor(
    public snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  clearLocalStorage(){
    localStorage.setItem("email", "");
    localStorage.setItem("nomeUsuario", "");
    localStorage.setItem('mpManagerToken', "");
    this.router.navigate(['/login']);
  }

  logout() {

    var email = localStorage.getItem('email')?.toString() ?? "";
    this.userService.logout(email).subscribe(() => {
      this.clearLocalStorage();
    },
      (err) => {
        this.errorCustom(err);
        this.clearLocalStorage();
        return;
      });
  }

  errorCustom(err: any) {
    this.isLoadingResults = false;
    if (err.error && err.status != 500) {
      this.snackBar.open(err.status + ": " + err.error.returnMessage, 'Ocultar', {
        duration: 5000,
      });
    }
    else {
      this.snackBar.open("500: Erro ao processar requisição", 'Ocultar', {
        duration: 5000,
      });
    }
  }


}
