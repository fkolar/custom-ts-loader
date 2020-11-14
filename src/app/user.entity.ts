import {Rule} from './decorators';

@Rule({
  name: 'ssss'
})
export class UserEntity {
  constructor(public name: string, public age: number) {
  }
}
