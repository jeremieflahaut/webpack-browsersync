import { shallowMount } from '@vue/test-utils'
import AsyncComponent from '../src/js/components/AsyncComponent.vue'


describe('Async', () => {
    it('users is null on created', () => {
        const wrapper = shallowMount(AsyncComponent)
        expect(wrapper.vm.users).toBe(null)
    })
    
    it('fetches async when a button is clicked', (done) => {
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
    
        wrapper.find('button').trigger('click')
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.users).toHaveLength(1)
            done()
          })
      })
})
