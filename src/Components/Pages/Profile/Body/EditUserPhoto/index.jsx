export const EditUserPhoto = () => {
    return (
        <div className="w-[10rem] h-[10rem] flex justify-center items-center xs:w-[22rem] xs:h-[15rem] bg-[#373737] rounded-full drop-shadow-lg cursor-pointer mt-[3rem] xs:mt-0">
            <div className="w-[3rem] h-[3rem] xs:w-[8rem] xs:h-[8rem] hover:xs:w-[5rem] hover:xs:h-[5rem] bg-[url('../../../../src/assets/icons/userIcon.png')] hover:bg-[url('../../../../src/assets/icons/editIcon.png')] bg-no-repeat bg-cover bg-center"></div>
        </div>
    )
}
