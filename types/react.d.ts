// Minimal React type shim for scaffolded environment without installed deps
declare module "react" {
	const React: any;
	export default React;
	export function useState<T = any>(initial: T): [T, (v: T) => void];
	export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
	export function useRef<T = any>(initial?: T | null): { current: T | null };
}

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}


