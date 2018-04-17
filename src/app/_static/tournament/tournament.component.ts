import { Component, OnInit } from '@angular/core';
import { teamInfo } from './teamInfo';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  AllTeam: teamInfo;


  constructor() { }

  ngOnInit() {
  }

}
