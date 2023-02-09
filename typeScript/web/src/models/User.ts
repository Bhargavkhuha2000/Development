interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(prosNane: string): string | number {
    return this.data[prosNane];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
