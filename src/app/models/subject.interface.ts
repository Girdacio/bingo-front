import { Observable } from "./observable.interface";

export interface Subject {
    add(component: Observable): void;
    remove(component: Observable): void;
    notify(nivel: number): void;
}