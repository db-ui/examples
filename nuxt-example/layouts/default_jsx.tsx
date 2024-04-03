import {DBBrand, DBHeader, DBMainNavigation, DBNavigationItem} from "@db-ui/v-components";
import {NuxtLink} from "#components";
import acidSvg from '~/assets/images/acid.svg'

export default defineComponent({
    setup(_, { slots}){
        return ()=>(
            <div>
                <DBHeader v-slots={{
                    brand() {
                        return <DBBrand imgSrc={acidSvg}>DB Mono Nuxt 3 Example</DBBrand>
                    }
                }}>
                    <DBMainNavigation>
                        <DBNavigationItem active={true}>
                            <NuxtLink to="/" ariaCurrentValue="page">Home</NuxtLink>
                        </DBNavigationItem>
                        <DBNavigationItem>
                            {{
                                default() { return "Gui Elements" },
                                'sub-navigation'() { return (
                                    <div>
                                        <DBNavigationItem>
                                            <NuxtLink to="/" ariaCurrentValue="page">Page 1</NuxtLink>
                                        </DBNavigationItem>
                                        <DBNavigationItem>
                                            <NuxtLink to="/" ariaCurrentValue="page">Page 2</NuxtLink>
                                        </DBNavigationItem>
                                        <DBNavigationItem>
                                            <NuxtLink to="/" ariaCurrentValue="page">Page 3</NuxtLink>
                                        </DBNavigationItem>
                                    </div>
                                )}
                            }}
                        </DBNavigationItem>
                    </DBMainNavigation>
                </DBHeader>
                <h1>TEST</h1>
                {slots.default && slots.default() }
            </div>
        )
    }
})