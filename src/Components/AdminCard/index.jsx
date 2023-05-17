import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { getSearchElement } from "../../API/AdminApi";
import { stringFormatter } from "../../Utils/stringFormatter";
import { Typography } from "../Typography"

export const AdminCard = ({ element, found, setFound, setData }) => {
    const [collection, setCollection] = useState("")
    const excludedKeys = ["email", "fullName", "role", "duration"]
    const urlKeys = ["profilePhoto", "thumbnailUrl", "trackUrl",]

    const handleValueClick = async (value) => {
        const response = await getSearchElement(value)
        if (response.ok) {
            console.log(response.result)
            setFound(value)
            setData(response.result)
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

    return (
        <div className='flex flex-col gap-3 w-full h-fit bg-[#5B83B0] rounded-lg p-4'>
            <div>
                {Object.keys(element).map((key, index) => {
                    const isFound = element[key] === found;
                    const formattedKey = stringFormatter(key);
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

                                <div key={key} className={`flex justify-start gap-1 px-1 ${index % 2 === 0 && 'bg-gray-600 bg-opacity-30'}`}>
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
                                                                onClick={() => handleValueClick(element)}
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
                                                        color={`${element[key] != "" ? 'primary' : 'transparent'}`}
                                                        styles="hover:text-white cursor-pointer"
                                                        onClick={() => handleCopyClipboard(element[key])}
                                                    />
                                                    <Typography
                                                        text={`${element[key] != "" ? element[key] : 'void'}`}
                                                        type="p2"
                                                        color="black"
                                                        family="lato"
                                                        styles={`text-4xl ${(!excludedKeys.includes(key) && element[key].length !== 0) && 'hover:text-blue-400 cursor-pointer'} ${isFound && 'bg-yellow-400'}`}
                                                        onClick={() => handleValueClick(element[key])}
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
        </div>
    );
}
