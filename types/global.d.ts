// Global JSX + React shim for linting without installed React types
declare const React: any;

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}





