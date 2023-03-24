export const EditUserPhoto = () => {
    return (
        <div className="flex justify-center items-center w-[10rem] h-[10rem] xs:max-w-[12rem] xs:w-[12rem]
        xs:h-[12rem] sm:max-w-[12rem] lg:w-[18rem] lg:h-[18rem] lg:max-w-[18rem] bg-[#373737] rounded-full drop-shadow-lg cursor-pointer">
            <div className="w-[3rem] h-[3rem] xs:w-[6rem] xs:h-[6rem] lg:w-[8rem] lg:h-[8rem]
            hover:xs:w-[5rem] hover:xs:h-[5rem] bg-[url('../../../../src/assets/icons/userIcon.png')]
            hover:bg-[url('../../../../src/assets/icons/editIcon.png')] bg-no-repeat bg-cover bg-center"></div>
        </div>
    )
}
