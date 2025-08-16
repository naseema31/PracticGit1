import {test as baseTest} from './pom-fixture'
import CommonUtils from '../utils/CommonUtils'

type CommonFixtureType={
    CommonUtils:CommonUtils

}
export const test=baseTest.extend<CommonFixtureType>({
    CommonUtils:async({},use)=>{
        use(new CommonUtils())
    }
})