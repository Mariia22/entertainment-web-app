import React from "react"
import { EntertainmentCard } from "../../../entities/entertainment/model/types"
import { HeaderSection } from "../HeaderSection/HeaderSection"
import { CardsLayout } from "../../../widgets/CardsLayout/CardsLayout"

interface EntertainmentProps {
    header: string
    entertainments: EntertainmentCard[]
}

export const EntertainmentSection: React.FC<EntertainmentProps> = ({
    header,
    entertainments,
}) => {
    return (
        <section className="pl-8">
            <HeaderSection>{header}</HeaderSection>
            {entertainments.length > 0 ? (
                <CardsLayout cards={entertainments} />
            ) : (
                <p className="mt-6 text-md text-contrast">
                    {header} are not found
                </p>
            )}
        </section>
    )
}
