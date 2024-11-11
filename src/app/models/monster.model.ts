export class Monster {
    name: string;
    hp: number;
    figureCaption: string;

    attackName: string;
    attackStrength: number;
    attackDescription: string;

    constructor(
        name?: string,
        hp?: number,
        figureCaption?: string,
        attackName?: string,
        attackStrength?: number,
        attackDescription?: string
    ) {
        this.name = name ?? "My Monster";
        this.hp = hp ?? 40;
        this.figureCaption = figureCaption ?? "N°001 - My Monster";
        this.attackName = attackName ?? "My Attack";
        this.attackStrength = attackStrength ?? 10;
        this.attackDescription = attackDescription ?? "My Attack Description";
    }
}