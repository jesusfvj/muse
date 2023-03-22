import { Typography } from '../../../Typography'
import { Logo } from '../../../Logo';
import { BodyTitle } from './BodyTitle';
import { EditUserPhoto } from './EditUserPhoto';
import { ProfileInputSection } from './ProfileInputSection';

export const Body = () => {
    return (
        <>
            <Logo logoSize="sm" extraClassesParent="xs:hidden pt-10"/>
            <div className="xs:px-[5rem]">
                <div className='flex flex-col xs:flex-row justify-between items-center xs:pt-[3rem]'>
                    <BodyTitle />
                    <EditUserPhoto />
                </div>
                <div className='pt-[4rem] pb-[3rem] flex justify-center items-center xs:justify-start xs:items-center'>
                    <Typography text="Settings" type="section" color="white" family="lato" styles="text-4xl" />
                </div>
                <ProfileInputSection />
            </div>
        </>
    )
}