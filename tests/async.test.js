import { shallowMount } from '@vue/test-utils'
import AsyncComponent from '../src/js/components/AsyncComponent.vue'

describe('Async', () => {
    const wrapper = shallowMount(AsyncComponent, {
        mocks : {
            $http : {
                get: () => new Promise(resolve => resolve({ 
                    body: [{
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org"
                    }] 
                }))
            }
        }
    })

    it('users is null when component is created', () => {
        expect(wrapper.vm.users).toBe(null)
    })
    
    it('fetches async when a button is clicked', () => {
        wrapper.find('button').trigger('click')
        wrapper.vm.$nextTick(() => {
            expect(wrapper.html()).toMatchSnapshot()
        })
    })
})
