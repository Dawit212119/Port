// Minimal React type shim for scaffolded environment without installed deps
declare module "react" {
	const React: any;
	export default React;
	export function useState<T = any>(initial: T): [
		T,
		(v: T | ((prev: T) => T)) => void
	];
	export function createContext<T = any>(defaultValue: T): any;
	export function useContext<T = any>(ctx: any): T;
	export function useMemo<T = any>(factory: () => T, deps?: any[]): T;
	export function useCallback<T extends (...args: any[]) => any>(
		fn: T,
		deps?: any[]
	): T;
	export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
	export function useRef<T = any>(initial?: T | null): { current: T | null };
}

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}


