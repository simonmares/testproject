import facepaint from "facepaint";

/**
 * A helper type to mark a component's prop responsive.
 *
 * It can be either the value itself or an n-tuple based on number of breakpoints.
 */
export type ResponsiveStyleProp<T> = T | [T] | [T, T] | [T, T, T];

/**
 * Provides media queries (=> mq) convenient API
 *
 * see https://github.com/emotion-js/facepaint
 */
export const mq = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);
