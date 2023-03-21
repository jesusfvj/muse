import { Typography } from "../Typography"

export const Logo = ({
    extraClassesParent = "",
    logoSize = "sm",
    fontType = "big"
}) => {
    let size = "";

    switch (logoSize) {
        case "xs":
            size = "w-8 h-8";
            break;
        case "sm":
            size = "w-16 h-16";
            break;
        case "md":
            size = "w-20 h-20";
            break;
        case "lg":
            size = "w-24 h-24";
            break;
        case "xl":
            size = "w-30 h-30";
            break;
        default:
            break;
    }

    return (
        <div className={`w-screen flex flex-col justify-center items-center ${extraClassesParent}`}>
            <img src="../../../../../src/assets/logo/logoWhite.png" alt="muze logo" className={size} />
            <Typography text="Muze" type={fontType} color="white" family="lato" />
        </div>
    )
}
