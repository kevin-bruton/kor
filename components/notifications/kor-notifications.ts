import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {'top-left'|'top-right'|'bottom-left'|'bottom-right'} position - Defines the corner where the notification is located. Possible values are `top-left`, `top-right`, `bottom-left` and `bottom-right`.
 *
 * @slot - Hosts kor-notification-items.
 */

export class korNotifications extends LitElement {
  @property({ type: String, reflect: true }) position:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right' = 'top-right';

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          position: fixed;
          display: flex;
          flex-direction: column;
          max-height: 100%;
          box-sizing: border-box;
          padding: 16px;
          margin: 0;
          width: 320px;
          z-index: 6;
          pointer-events: none;
        }
        ::slotted(*) {
          pointer-events: all;
        }
        :host([position^='top']) {
          top: 0px;
        }
        :host([position^='bottom']) {
          flex-flow: column-reverse;
          bottom: 0px;
        }
        :host([position$='left']) {
          left: 0px;
        }
        :host([position$='right']) {
          right: 0px;
        }
        :host([position^='top']) ::slotted(kor-notification-item[visible]) {
          margin-bottom: 12px;
        }
        :host([position^='bottom']) ::slotted(kor-notification-item[visible]) {
          margin-top: 12px;
        }
      `,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}

if (!window.customElements.get('kor-notifications')) {
  window.customElements.define('kor-notifications', korNotifications);
}
