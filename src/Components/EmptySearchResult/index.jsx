import { Typography } from "../Typography"

export const EmptySearchResult = () => {
    return (
        <div className={`flex flex-col gap-3 w-full h-full bg-[#ff8484] opacity-50 rounded-lg p-4 justify-center items-center`}>
            <Typography
                text="The search returned no matching element"
                type="p0"
                color="white"
            />
        </div>
    )
}
