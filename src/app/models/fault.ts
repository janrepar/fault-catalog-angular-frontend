export class Fault {
    id?: number;
    title: string = "";
    shortDescription: string = "";
    description: string = "";
    successCriterionRefIds: string[] = [];
    
    // ?TODO: Dodaj se placehoderje za posnetek zaslona, url, element, html koda (jih vpiše uprabnik - pomembno za zapisnik)

    public toString() : string {
        return this.title + "\n"
            + this.shortDescription + "\n"
            + this.description + "\n"
            + this.successCriterionRefIds
    }
}