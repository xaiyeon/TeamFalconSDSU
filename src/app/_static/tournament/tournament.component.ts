import { Component, OnInit } from '@angular/core';
import { teamInfo } from './teamInfo';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  AllTeam = new teamInfo();
  // only values from 0 to 5
  teamNumber: number = 0;

  constructor() {
    this.AllTeam = new teamInfo();

  }

  ngOnInit() {
    console.log(this.AllTeam);
  }

  teamYoko(e) {
    this.teamNumber = 0;
  }

  teamAZ(e) {
    this.teamNumber = 1;
  }

  teamCB(e) {
    this.teamNumber = 2;
  }

  teamSU(e) {
    this.teamNumber = 3;
  }

  teamA(e) {
    this.teamNumber = 4;
  }

  teamAFK(e) {
    this.teamNumber = 5;
  }

}
