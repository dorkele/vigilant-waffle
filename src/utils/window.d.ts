export declare global {
  interface Window {
    ChiliPiper: {
      submit: (id: string, route: string, options: any) => void;
      scheduling: (id: string, route: string, options: any) => void;
    };
    lintrk: (track: "track", { conversion_id: number }) => void;
  }
}
