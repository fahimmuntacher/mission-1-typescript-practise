// conditional type: which type depends on the condition

type A = null;
type B = number;

type C = A extends null ? true : false;

type RichPeopleVehicle = {
    bike: string,
    car: string,
    jet: string
}

type checkVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

type hasBike = checkVehicle<"carddds">