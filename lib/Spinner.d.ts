/// <reference types="react" />
declare type Props = {
    size?: string;
    width?: string;
    fill: boolean;
    colors: string[];
};
/**
 * @param {boolean} clockwise Clockwise flag.
 * @param {boolean} fill Fill flag.
 * @param {number} deg The degree value in 360°.
 */
declare function getD(clockwise: boolean, fill: boolean, deg: number): string;
declare function Spinner({ size, width, fill, colors }: Props): JSX.Element;
export { Spinner as default, getD };
