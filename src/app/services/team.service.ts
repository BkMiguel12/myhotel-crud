import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../models/Team.model';
import { dataTeams } from '../data/datateams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  private teams: Team[] = [];

  // private teams: Team[] = [
  //   { id: 1, name: 'Barcelona FC', status: 'pass', created_at: '19-05-2022', players: ['Miguel', 'Alejandro'] },
  //   { id: 2, name: 'Real Madrid', status: 'eliminated', created_at: '19-05-2022', players: ['Mendoza', 'Figuera'] },
  //   { id: 3, name: 'Villareal FC', status: 'playing', created_at: '19-05-2022', players: ['John', 'Doe'] },
  //   { id: 4, name: 'Atletico de Madrid', status: 'eliminated', created_at: '19-05-2022', players: ['Carolina', 'Miguel'] },
  // ];

  addBook(team: Team): Observable<Team> {
    dataTeams.push(team);
    return of(team);
  }

  getBooks(): Observable<Team[]> {
    return of(dataTeams);
  }

  updateBook(team: Team): Observable<Team[]> {
    const { id } = team;
    this.teams = dataTeams.filter((item) => item.id !== id);
    this.teams.push(team);
    return of(this.teams);
  }

  deleteBook(id: number): Observable<Team[]> {
    this.teams = dataTeams.filter((item) => item.id !== id);
    return of(this.teams);
  }
}
