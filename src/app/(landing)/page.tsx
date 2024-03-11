import ClientsReviewSection from "./_components/ClientsReviewSection";
import FeaturesSection from "./_components/FeaturesSection";
import GetStartedSection from "./_components/GetStartedSection";
import HeroSection from "./_components/HeroSection";
import ShowcaseSection from "./_components/ShowcaseSection";





function LeadingPage (){


    return (<div className="w-full min-h-full pt-12">

        {/* Hero Section */}
        <HeroSection/>

        {/* Features Section */}
        <FeaturesSection/>

        {/* Showcase Section */}
        <ShowcaseSection/>

        {/* Clients Review Section */}
        <ClientsReviewSection/>

        {/* Get Started Now Section */}
        <GetStartedSection/>
    
    
    </div>);

}



export default LeadingPage ;