import { AiOutlineCopy } from "react-icons/ai";
import { getSearchElement } from "../../API/AdminApi";
import { stringFormatter } from "../../Utils/stringFormatter";
import { Button } from "../Button";
import { Typography } from "../Typography"

export const AdminCard = ({ element, found, setFound, setData, collection, setShowBanModal, setCurrentBan, setIsBanned, setActiveButton }) => {
    const excludedKeys = ["email", "fullName", "role", "duration", "name", "isPrivate", "uploadedAt", "genre", "createdAt"]
    const urlKeys = ["profilePhoto", "thumbnailUrl", "trackUrl"]
    let updatedIndex = 1

    const handleValueClick = async (value, key) => {
        if (!excludedKeys.includes(key) && element[key].length !== 0 && typeof element[key] !== "boolean") {
            const response = await getSearchElement(value)
            if (response.ok) {
                setFound(value)
                setActiveButton(null)
                setData(response.result)
            }
        }
    }

    const handleCopyClipboard = (text) => {
        if (text !== "") {
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Text copied to clipboard:', text);
                })
                .catch((error) => {
                    console.error('Failed to copy text:', error);
                });
        }
    };

    const handleClick = (state) => {
        const collectionInSingular = collection.slice(0, -1)
        let name = ""
        if (element["fullName"] !== undefined) {
            name = element["fullName"]
        } else {
            name = element["name"]
        }
        setCurrentBan([collectionInSingular.toLowerCase(), name, element["_id"]])
        if(state==="ban"){
            setIsBanned(false)
        } else {
            setIsBanned(true)
        }
        setShowBanModal(true)
    }

    return (
        <div className={`flex flex-col gap-3 w-full h-fit ${element["isBanned"] ? 'bg-[#b05b5b] ': 'bg-[#5B83B0] '} rounded-lg p-4`}>
            <div>
                {Object.keys(element).map((key) => {
                    const isFound = element[key] === found;
                    const formattedKey = stringFormatter(key);
                    updatedIndex++;
                    if (key === "collection") {
                        updatedIndex++;
                    }
                    return (
                        <>
                            {key === "collection"
                                ? <Typography
                                    text={element[key]}
                                    type="big"
                                    color="white"
                                    family="lato"
                                    styles="text-4xl w-[10%] mb-4"
                                />
                                :
                                <div key={key} className={`flex justify-start gap-1 px-1 ${updatedIndex % 2 === 0 && 'bg-gray-600 bg-opacity-30'}`}>
                                    <Typography
                                        text={`${formattedKey}:`}
                                        type="p2"
                                        color="white"
                                        family="lato"
                                        styles="text-4xl w-[10%]"
                                    />
                                    <div className="flex">
                                        {Array.isArray(element[key]) && element[key].length > 0
                                            ?
                                            <ul>
                                                {element[key].map((element, index) => {
                                                    const isFound = element === found;
                                                    return (
                                                        <li key={element + index} className="flex gap-4">
                                                            <Typography
                                                                text={<AiOutlineCopy />}
                                                                type="p2"
                                                                color="primary"
                                                                styles="hover:text-white cursor-pointer"
                                                                onClick={() => handleCopyClipboard(element)}
                                                            />
                                                            <Typography
                                                                text={element}
                                                                type="p2"
                                                                color="black"
                                                                family="lato"
                                                                styles={`text-4xl ${(!excludedKeys.includes(key)) && 'hover:text-blue-400 cursor-pointer'} ${isFound && 'bg-yellow-400'}`}
                                                                onClick={() => handleValueClick(element, key)}
                                                            />
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            :
                                            urlKeys.includes(key)
                                                ?
                                                <div className="flex gap-4">
                                                    <Typography
                                                        text={<AiOutlineCopy />}
                                                        type="p2"
                                                        color="primary"
                                                        styles="hover:text-white cursor-pointer"
                                                        onClick={() => handleCopyClipboard(element[key])}
                                                    />
                                                    <a className={`w-full text-xs sm:text-md font-normal lato hover:text-blue-400 cursor-pointer transition duration-500 ${isFound && 'bg-yellow-400'}`}
                                                        href={element[key]}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >{element[key]}</a>
                                                </div>
                                                :
                                                <div className="flex gap-4">
                                                    <Typography
                                                        text={<AiOutlineCopy />}
                                                        type="p2"
                                                        color={`${element[key] != "" && typeof element[key] !== "boolean" ? 'primary' : 'transparent'}`}
                                                        styles={`${element[key] != "" && typeof element[key] !== "boolean" && 'hover:text-white cursor-pointer'}`}
                                                        onClick={() => handleCopyClipboard(element[key])}
                                                    />
                                                    <Typography
                                                        text={`${element[key] != "" ? element[key] : 'void'}`}
                                                        type="p2"
                                                        color="black"
                                                        family="lato"
                                                        styles={`text-4xl ${(!excludedKeys.includes(key) && element[key].length !== 0 && typeof element[key] !== "boolean" ) && 'hover:text-blue-400 cursor-pointer'} ${isFound && 'bg-yellow-400'}`}
                                                        onClick={() => handleValueClick(element[key], key)}
                                                    />
                                                </div>
                                        }
                                    </div>
                                </div>
                            }
                        </>
                    );
                })}
            </div>
            {element["isBanned"] === false || element["isBanned"] === undefined
                ? <div className="w-full h-6">
                    <Button
                        text={`ban ${element["fullName"] !== undefined ? element["fullName"] : element["name"]}`}
                        color="danger"
                        size="sm"
                        onClick={()=>handleClick("ban")}
                    />
                </div>
                :
                <div className="w-full h-6">
                    <Button
                        text={`remove ban from ${element["fullName"] !== undefined ? element["fullName"] : element["name"]}`}
                        color="primary"
                        size="sm"
                        onClick={()=>handleClick("removeBan")}
                    />
                </div>
            }
        </div>
    );
}
