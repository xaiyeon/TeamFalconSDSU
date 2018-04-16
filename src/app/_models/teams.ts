import { People } from './people';


export class Team {
    public Name: string;
    public MemberCount: number;
    public Members: People[];
    public Description: string;

    constructor(name: string, memberCount: number, members: People[], description: string) {
        this.Name = name;
        this.MemberCount = memberCount;
        this.Members = members;
        this.Description = description;
    }
}

