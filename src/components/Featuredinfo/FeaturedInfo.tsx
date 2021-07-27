import { ArrowDown, ArrowUp } from "@icons"

import {
    FeaturedInfoWrapper,
    FeaturedItem,
    FeaturedMoeny,
    FeaturedMoenyRate,
    FeaturedMoneyContainer,
    FeaturedSubTitle,
    FeaturedTitle,
} from "./featured.styled"

export const FeaturedInfo = () => {
    return (
        <FeaturedInfoWrapper>
            <FeaturedItem>
                <FeaturedTitle>Revenue</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoeny>$2,415</FeaturedMoeny>
                    <FeaturedMoenyRate>
                        -11.4 <ArrowDown className="featuredIcon negative" />
                    </FeaturedMoenyRate>
                </FeaturedMoneyContainer>
                <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Sells</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoeny>$4,415</FeaturedMoeny>
                    <FeaturedMoenyRate>
                        -1.4 <ArrowDown className="featuredIcon negative" />
                    </FeaturedMoenyRate>
                </FeaturedMoneyContainer>
                <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Cost</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoeny>$4,415</FeaturedMoeny>
                    <FeaturedMoenyRate>
                        -1.4 <ArrowUp className="featuredIcon positive" />
                    </FeaturedMoenyRate>
                </FeaturedMoneyContainer>
                <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
            </FeaturedItem>
        </FeaturedInfoWrapper>
    )
}
