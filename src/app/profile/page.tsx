import HeroProfile from "@/app/components/HeroProfile";
/* import ValueProfile from "@/app/components/ValueProfile"; */
import DescriptionProfile from "@/app/components/DescriptionProfile";
import StatsSection from "@/app/components/StatsSection";
export default function Profile() {
    return (
        <>
            <HeroProfile />
            {/* <ValueProfile /> */}
            <StatsSection />
            <DescriptionProfile />
        </>
    );
}