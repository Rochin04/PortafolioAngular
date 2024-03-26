import { Component, OnInit } from '@angular/core';
import { Rochin } from '../Model/rochin';
import { RochinService } from '../Service/rochin.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  Rochins:Rochin[]=[];
  constructor(private rochinService:RochinService){}
  ngOnInit(): void {
    this.rochinService.getRochin().subscribe((result:Rochin[]) => (this.Rochins = result));
    console.log(this.Rochins);
  }
}
