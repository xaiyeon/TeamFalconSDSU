import { Team } from '../../_models/teams';
import { People } from '../../_models/people';

// This file is for creating the teamInfo

// Calling this class comes with pre-loaded data
// tslint:disable-next-line:class-name
export class teamInfo {
    public totalTeams: number;
    public selectTeam: number;
    public teams: Team[];

    constructor() {
        const ee = 'Electrical Engineer';
        const ce = 'Computer Engineer';
        this.selectTeam = 0;
        this.totalTeams = 6;
        this.teams = [
            new Team('Yoko-Zoom Bot', 6,
                [new People('Juan Mederos', '', ee, 'Project Manager'),
                new People('Dylan Caballero', '', ee, 'Presentation Coordinator'),
                new People('Kevyn Cabling', '', ee, 'Report Editor'),
                new People('Tymofiy Dovgan', '', ee, 'Parts Manager'),
                new People('Brandon Castro', '', ce, 'Repository Manager'),
                new People('Dennis Le', '', ce, 'Web Designer')
                ],
                'We will be Yokozuna!'
            ),
            new Team('Aztechs', 7,
                [new People('Michelle Hernandez', '', ee, 'Project Manager'),
                new People('Faisal Al-Jaber', '', ee, 'Presentation Coordinator'),
                new People('Adrian Fernandez', '', ce, 'Report Editor'),
                new People('Mohammad Alsehali', '', ee, 'Parts Manager'),
                new People('Travis Tkachuk', '', ee, 'Repository Manager'),
                new People('Jaclyn Penano', '', ce, 'Web Designer'),
                new People('Patrick Gerardo', '', ce, 'Secretary'),
                ],
                'Hip hip hooray!'
            ),
            new Team('Circuit Breakers', 6,
                [new People('Jefferey Teixeira', '', 'n/a', 'Project Manager'),
                new People('Jeff Presar', '', 'n/a', 'n/a'),
                new People('Janpaul Alamani', '', ce, 'n/a'),
                new People('Blake Caudle', '', 'n/a', 'n/a'),
                new People('Gerard Laconsay', '', 'n/a', 'n/a'),
                new People('Juan Manuel Gutierrez', '', 'n/a', 'n/a')
                ],
                'C-C-Combo- Circuit Breaker!'
            ),
            new Team('Square Up', 6,
                [new People('TBA', '', ee, 'Project Manager'),
                new People('TBA', '', ee, 'n/a'),
                new People('TBA', '', ee, 'n/a'),
                new People('TBA', '', ee, 'n/a'),
                new People('TBA', '', 'n/a', 'n/a'),
                new People('Vincent Chan', '', ce, 'Web Designer')
                ],
                'Champions of the parking lot!'
            ),
            new Team('Team Abigail', 7,
                [new People('Arvin Lieva', '', ce, 'Project Manager'),
                new People('Victor Franco', '', ee, 'Presentation Coordinator'),
                new People('Faye Castillejos', '', ce, 'Report Editor'),
                new People('Frederick Riehl', '', ee, 'Parts Manager'),
                new People('Kathleen Callejo', '', ce, 'Repository Manager'),
                new People('Sirak Zakarias', '', ee, 'Web Designer')
                ],
                'Ready for round five!'
            ),
            new Team('PRJCT AFK', 6,
                [new People('William Mendoza', '', ce, 'Project Manager'),
                new People('Ricardo Lazo', '', ce, 'Presentation Coordinator'),
                new People('Nayeli Corral', '', ce, 'Report Editor'),
                new People('Brendan Zuniga', '', ce, 'Parts Manager'),
                new People('Hayden Nguyen', '', ce, 'Repository Manager'),
                new People('Yaneli Corral', '', ce, 'Web Designer')
                ],
                'Do it, Frank The Tank!'
            )
        ];

    }
}



