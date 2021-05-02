import { LitElement } from 'lit-element';
import '../icon';
import '../text';
/**
 * @prop {String} label - If set, defines the text label shown above the bar.
 * @prop {String} info - If set, defines the info text shown below of the bar.
 * @prop {'success'|'warning'|'error'|undefined} status - If set, shows a status icon besides the information text. Possible values are `success`, `warning` and `error`.
 * @prop {String} color - If set, defines the color of the bar.
 * @prop {'s'|'m'|'l'} size - (Only if radial is true) Defines the size of the bar. Possible values are `s`, `m` and `l`.
 * @prop {Number} value - Defines the value of the bar. Must be a number from 0 to 100.
 * @prop {Boolean} radial - If set to true, the bar will become a circle instead of a linear bar.
 * @prop {Boolean} showProgress - If set to true, the value (in %) will be visible.
 */
export declare class korProgressBar extends LitElement {
  label: any;
  info: any;
  status: 'success' | 'warning' | 'error' | undefined;
  color: any;
  size: 's' | 'm' | 'l';
  value: any;
  radial: boolean;
  showProgress: boolean;
  static get styles(): import('lit-element').CSSResult[];
  render(): import('lit-element').TemplateResult;
  attributeChangedCallback(name: any, oldval: any, newval: any): void;
  getStatusIcon(): string;
  getSize(): number;
}
