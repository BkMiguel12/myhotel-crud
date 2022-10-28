import { Team } from "../models/Team.model";

export class AddNewTeam {
    static readonly type = '[Team] Add';

    constructor(public payload: Team) {
    }
}

export class GetTeams {
    static readonly type = '[Team] Get';
}

export class UpdateTeam {
    static readonly type = '[Team] Update';

    constructor(public payload: Team, public id: number) {
    }
}

export class DeleteTeam {
    static readonly type = '[Team] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedTeam {
    static readonly type = '[Team] Set';

    constructor(public payload: Team) {
    }
}