import Image from "next/image"
import HeaderItem from './HeaderItem'
import {
    HomeIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    BadgeCheckIcon,
} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />

            </div>
            <Image
                className="object-contain "
                height={100}
                width={200}
                src="https://links.papareact.com/ua6"
            />
        </header>
    )
}

export default Header