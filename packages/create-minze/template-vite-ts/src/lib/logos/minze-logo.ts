import type { Attrs } from 'minze'
import { MinzeElement } from 'minze'

export interface MinzeLogo {
  width: string
  height: string
}

export class MinzeLogo extends MinzeElement {
  attrs: Attrs = [
    ['width', 347],
    ['height', 146]
  ]

  static observedAttributes = ['width', 'height']

  html = () => `
    <svg width="${this.width}" height="${this.height}" viewBox="0 0 347 146" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M145.097 0.681393V0.548589L72.5485 0.548588L72.5485 72.9644L72.5485 73.097H72.6811L145.097 145.513V145.646H217.645V88.8345L274.324 145.513V145.646H346.872V73.0972H346.74L274.324 0.681439V0.548589L201.775 0.548588V57.3599L145.097 0.681393ZM72.5485 73.0972V145.646H0V73.0972H72.5485Z" fill="url(#paint0_linear_114_127)"/><defs><linearGradient id="paint0_linear_114_127" x1="302.947" y1="38.8066" x2="-5.2241e-05" y2="145.645" gradientUnits="userSpaceOnUse"><stop stop-color="#32FFA0"/> <stop offset="1" stop-color="#37F5DC"/></linearGradient></defs></svg>
  `

  css = () => `
    :host {
      display: inline-block;
    }
  `
}
