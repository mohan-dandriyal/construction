declare module "aos" {
  interface AOSOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    disable?: boolean | (() => boolean);
  }

  const AOS: {
    init(options?: AOSOptions): void;
    refreshHard(): void;
  };

  export default AOS;
}
