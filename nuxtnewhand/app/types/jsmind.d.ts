declare module 'jsmind' {
  export interface JsMindOptions {
    container: string | HTMLElement;
    editable?: boolean;
  }
  export class JsMind {
    constructor(options: JsMindOptions);
    show(data: any): void;
  }
}