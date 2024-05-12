import { Component } from '@angular/core';
import { NbpService } from './nbp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title:string = 'API-Angular'

  constructor(
    private nbpService: NbpService
  ) {}

  ngOnInit() {
    this.nbpService.getNbpData().subscribe({
      next: (data:any) => {
        console.log(data);
      }
    })
  }
}