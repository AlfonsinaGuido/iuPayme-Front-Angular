import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { History } from 'src/app/models/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  transactions: History[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllHistory().subscribe(
      data => {
        this.transactions = data;
      }
    )
  }

}