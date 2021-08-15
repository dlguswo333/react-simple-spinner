/// <reference types="react" />
declare type Props = {
    size?: string;
    fill: boolean;
    colors: string[];
};
/**
 * @param {number} deg The degree value in 360°.
 */
declare function getD(clockwise: boolean, fill: boolean, deg: number): string;
declare function Spinner({ size, fill, colors }: Props): JSX.Element;
export { Spinner as default, getD };
