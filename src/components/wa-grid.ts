import { LitElement, css, html, customElement, property } from 'lit-element'

@customElement('wa-grid')
export class waGrid extends LitElement {

  @property({ type: Number, reflect: true }) columns = 12;
  @property({ type: String, reflect: true }) spacing = "m";

  attributeChangedCallback(name, oldval, newval) { super.attributeChangedCallback(name, oldval, newval); this.dispatchEvent(new Event(`${name}-changed`)) }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
      }
      :host(:not([fit-content])) {
        height: 100%;
        width: 100%;
      }
      ::slotted(*) {
        width: auto;
        min-width: 0;
        min-height: 0;
      }
      /* spacing */
      :host([spacing="s"]) { grid-gap: 8px; }
      :host([spacing="m"]) { grid-gap: 12px; }
      :host([spacing="l"]) { grid-gap: 16px; }
      /* columns and rows */
      ::slotted(*[grid-cols="0"]) { display: none; }
      ::slotted(*:not([grid-cols])),
      ::slotted(*[grid-cols="1"]) { grid-column: span 1; }
      ::slotted(*[grid-cols="2"]) { grid-column: span 2; }
      ::slotted(*[grid-cols="3"]) { grid-column: span 3; }
      ::slotted(*[grid-cols="4"]) { grid-column: span 4; }
      ::slotted(*[grid-cols="5"]) { grid-column: span 5; }
      ::slotted(*[grid-cols="6"]) { grid-column: span 6; }
      ::slotted(*[grid-cols="7"]) { grid-column: span 7; }
      ::slotted(*[grid-cols="8"]) { grid-column: span 8; }
      ::slotted(*[grid-cols="9"]) { grid-column: span 9; }
      ::slotted(*[grid-cols="10"]) { grid-column: span 10; }
      ::slotted(*[grid-cols="11"]) { grid-column: span 11; }
      ::slotted(*[grid-cols="12"]) { grid-column: span 12; }
      ::slotted(*:not([grid-rows])),
      ::slotted(*[grid-rows="1"]) { grid-row: span 1; }
      ::slotted(*[grid-rows="2"]) { grid-row: span 2; }
      ::slotted(*[grid-rows="3"]) { grid-row: span 3; }
      ::slotted(*[grid-rows="4"]) { grid-row: span 4; }
      ::slotted(*[grid-rows="5"]) { grid-row: span 5; }
      ::slotted(*[grid-rows="6"]) { grid-row: span 6; }
      ::slotted(*[grid-rows="7"]) { grid-row: span 7; }
      ::slotted(*[grid-rows="8"]) { grid-row: span 8; }
      ::slotted(*[grid-rows="9"]) { grid-row: span 9; }
      ::slotted(*[grid-rows="10"]) { grid-row: span 10; }
      ::slotted(*[grid-rows="11"]) { grid-row: span 11; }
      ::slotted(*[grid-rows="12"]) { grid-row: span 12; }
      /* tablet */
      @media only screen and (max-width: 1025px) {
        ::slotted(*[grid-cols-m="0"]) { display: none; }
        ::slotted(*[grid-cols-m="1"]) { grid-column: span 1; }
        ::slotted(*[grid-cols-m="2"]) { grid-column: span 2; }
        ::slotted(*[grid-cols-m="3"]) { grid-column: span 3; }
        ::slotted(*[grid-cols-m="4"]) { grid-column: span 4; }
        ::slotted(*[grid-cols-m="5"]) { grid-column: span 5; }
        ::slotted(*[grid-cols-m="6"]) { grid-column: span 6; }
        ::slotted(*[grid-cols-m="7"]) { grid-column: span 7; }
        ::slotted(*[grid-cols-m="8"]) { grid-column: span 8; }
        ::slotted(*[grid-cols-m="9"]) { grid-column: span 9; }
        ::slotted(*[grid-cols-m="10"]) { grid-column: span 10; }
        ::slotted(*[grid-cols-m="11"]) { grid-column: span 11; }
        ::slotted(*[grid-cols-m="12"]) { grid-column: span 12; }
        ::slotted(*[grid-rows-m="1"]) { grid-row: span 1; }
        ::slotted(*[grid-rows-m="2"]) { grid-row: span 2; }
        ::slotted(*[grid-rows-m="3"]) { grid-row: span 3; }
        ::slotted(*[grid-rows-m="4"]) { grid-row: span 4; }
        ::slotted(*[grid-rows-m="5"]) { grid-row: span 5; }
        ::slotted(*[grid-rows-m="6"]) { grid-row: span 6; }
        ::slotted(*[grid-rows-m="7"]) { grid-row: span 7; }
        ::slotted(*[grid-rows-m="8"]) { grid-row: span 8; }
        ::slotted(*[grid-rows-m="9"]) { grid-row: span 9; }
        ::slotted(*[grid-rows-m="10"]) { grid-row: span 10; }
        ::slotted(*[grid-rows-m="11"]) { grid-row: span 11; }
        ::slotted(*[grid-rows-m="12"]) { grid-row: span 12; }
      }
      /* tablet */
      @media only screen and (max-width: 767px) {
        ::slotted(*[grid-cols-s="0"]) { display: none; }
        ::slotted(*[grid-cols-s="1"]) { grid-column: span 1; }
        ::slotted(*[grid-cols-s="2"]) { grid-column: span 2; }
        ::slotted(*[grid-cols-s="3"]) { grid-column: span 3; }
        ::slotted(*[grid-cols-s="4"]) { grid-column: span 4; }
        ::slotted(*[grid-cols-s="5"]) { grid-column: span 5; }
        ::slotted(*[grid-cols-s="6"]) { grid-column: span 6; }
        ::slotted(*[grid-cols-s="7"]) { grid-column: span 7; }
        ::slotted(*[grid-cols-s="8"]) { grid-column: span 8; }
        ::slotted(*[grid-cols-s="9"]) { grid-column: span 9; }
        ::slotted(*[grid-cols-s="10"]) { grid-column: span 10; }
        ::slotted(*[grid-cols-s="11"]) { grid-column: span 11; }
        ::slotted(*[grid-cols-s="12"]) { grid-column: span 12; }
        ::slotted(*[grid-rows-s="1"]) { grid-row: span 1; }
        ::slotted(*[grid-rows-s="2"]) { grid-row: span 2; }
        ::slotted(*[grid-rows-s="3"]) { grid-row: span 3; }
        ::slotted(*[grid-rows-s="4"]) { grid-row: span 4; }
        ::slotted(*[grid-rows-s="5"]) { grid-row: span 5; }
        ::slotted(*[grid-rows-s="6"]) { grid-row: span 6; }
        ::slotted(*[grid-rows-s="7"]) { grid-row: span 7; }
        ::slotted(*[grid-rows-s="8"]) { grid-row: span 8; }
        ::slotted(*[grid-rows-s="9"]) { grid-row: span 9; }
        ::slotted(*[grid-rows-s="10"]) { grid-row: span 10; }
        ::slotted(*[grid-rows-s="11"]) { grid-row: span 11; }
        ::slotted(*[grid-rows-s="12"]) { grid-row: span 12; }
      }
    `
  }

  render() {
    return html`
      <link rel="stylesheet" href="../wa-styles.css">
      <slot></slot>
    `
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      // update columns
      if (propName === "columns") {
        this.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`
      } 
      // update rows
      else if (propName === "rows") {
        this.style.gridTemplateRows = `repeat(${this.columns}, 1fr)`
      }
    });
  }
}
