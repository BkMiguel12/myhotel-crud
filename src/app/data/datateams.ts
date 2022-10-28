import { Team } from "../models/Team.model";

export const dataTeams: Team[] = [
  { id: 1, name: 'Barcelona FC', status: 'pass', created_at: '19-05-2022', players: ['Miguel', 'Alejandro'] },
  { id: 2, name: 'Real Madrid', status: 'eliminated', created_at: '19-05-2022', players: ['Mendoza', 'Figuera'] },
  { id: 3, name: 'Villareal FC', status: 'playing', created_at: '19-05-2022', players: ['John', 'Doe'] },
  { id: 4, name: 'Atletico de Madrid', status: 'eliminated', created_at: '19-05-2022', players: ['Carolina', 'Miguel'] },
];