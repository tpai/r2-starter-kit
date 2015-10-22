export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";

export function nextPage () {
	return {
		type: NEXT_PAGE
	};
}
export function prevPage () {
	return {
		type: PREV_PAGE
	};
}