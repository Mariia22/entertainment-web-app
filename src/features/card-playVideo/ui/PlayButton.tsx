import React from "react"
import PlayIcon from "../../../app/assets/icons/icon-play.svg"
import { Button } from "../../../shared/ui/Button/Button"
import { textsAndPlaceholders } from "../../../shared/model/appTextsAndPlaceHolders"

export const PlayVideoButton: React.FC = () => {
    return (
        <Button styles="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[117px] h-12 py-2 pl-2 pr-3 bg-text bg-opacity-25 rounded-[28.5px] text-[18px] font-medium ">
            <PlayIcon />
            {textsAndPlaceholders.button.play}
        </Button>
    )
}
