import { mount } from '@vue/test-utils'

import Spacer from '../index'

describe('Spacer', () => {
  it('shoul be render as element', () => {
    const spacer = mount(Spacer)
    expect(spacer.html()).toMatchSnapshot()
  })

  it('should be support inline style', () => {
    const wrapper = mount(<Spacer inline />)
    expect(wrapper.find('.fay-spacer').html()).toContain(
      '<span class="fay-spacer" style="display: inline-block;"></span>',
    )
  })

  it('should be support x and y', () => {
    const wrapper = mount({
      render() {
        return (
          <>
            <Spacer x={'1'} />
            <Spacer y={'2'} />
          </>
        )
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
