import { MinzeElement, MinzeProps, MinzeEvents } from 'minze'

export interface MinzeReactiveProps {
  str: string
  arr: number[]
  obj: {
    nested: {
      prop: string
    }
  }
}

export class MinzeReactiveProps extends MinzeElement {
  reactive: MinzeProps = [
    ['str', 'initial text', true],
    ['arr', [1, 2, 3], true],
    [
      'obj',
      {
        nested: {
          prop: 'initial value'
        }
      },
      true
    ]
  ]

  html = () => `
    <div class="str">${this.str}</div>
    <div class="arr">${this.arr}</div>
    <div class="obj">${this.obj.nested.prop}</div>
    <button></button>
  `

  handleClick = () => {
    this.str = 'changed text'
    this.arr.push(4)
    this.obj.nested.prop = 'changed value'
  }

  eventListeners: MinzeEvents = [['button', 'click', this.handleClick]]
}
