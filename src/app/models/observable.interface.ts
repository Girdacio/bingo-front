export interface Observable {
    update(): void;
    getNivel(): number;
    notify(): void;
}