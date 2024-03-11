import PriceCard from "./_components/PriceCard";
import QuestionSection from "./_components/QuestionsSection";

interface QuestionType {
    question: string;
    answer: string;
} 

const Questions:QuestionType[]= [

    {
        answer:"Yes. Spend caps are on by default on the Pro plan. You can turn spend caps off for usage beyond the plan limits to pay as you grow.",
        question:"Can I cap my usage so my bill doesn't run over?"
    },
    {
        answer:"Spend caps are on by default and you need to toggle them off from your dashboard to enable pay as you grow pricing.",
        question:"I'm worried I could end up with a huge bill at the end of the month."
    },
    {
        answer:"Our Pro plan is charged up front, and billed on a monthly basis. Additional usage costs are also billed at the end of the month.",
        question:"When will I be billed?"
    },
    {
        answer:"Yes, you can pause a project at any time. Our Free plan gives you 2 free projects, but you can have as many paused projects as you want. Just pause and unpause them as needed.",
        question:"Can I pause a free project?"
    },
    {
        answer:"We are working on multi-environment projects. For now, you can create a project for your development backend and production backend. We give you 2 free projects as part of our free plan. This means you could have a development and a production server as part of your free plan.",
        question:"What if I need one project for development and one for production?"
    }

]



function PricingPage() {

    return (<div className="w-full">

        <section className="container flex flex-col gap-8 justify-center pb-12 pt-16 lg:pt-32">

            <div className="w-full flex flex-col items-center gap-3 mb-8">
                <h3 className="lg:text-4xl text-2xl text-center font-bold uppercase text-primary">Predictable pricing, designed to scale</h3>
                <p className="lg:text-base text-sm text-center text-muted-foreground ">All the features that we provide for you to get the best experience</p>
            </div>

            {/* pricing cards */}

            <div className="w-full px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <PriceCard
                    title="FREE"
                    des="Perfect for passion projects & simple websites."
                    price={0}
                    features={{
                        text: 'Get started with:',
                        all: [
                            'Unlimited API requests',
                            '50,000 monthly active users',
                            '500 MB database space',
                            '5 GB bandwidth',
                            '1 GB file storage',
                            'Community support']
                    }}
                />

                <PriceCard
                    title="PRO"
                    des="For production applications with the option to scale."
                    price={25}
                    pup
                    features={{
                        text: 'Everything in the Free plan, plus:',
                        all: [
                            '100,000 monthly active users',
                            '50,000 monthly active users',
                            '8 GB database space',
                            '250 GB bandwidth',
                            '100 GB file storage',
                            'Email support',
                            "Daily backups stored for 7 days",
                            '7-day log retention'
                        ]
                    }}
                />

                <PriceCard
                    title="TEAM"
                    des="Collaborate with different permissions and access patterns."
                    price={599}
                    features={{
                        text: 'Everything in the Pro plan, plus:',
                        all: [
                            'SOC2',
                            'HIPAA available as paid add-on',
                            'Read only and Billing member roles',
                            'SSO for Supabase Dashboard',
                            'Priority email support & SLAs',
                            'Daily backups stored for 14 days',
                            '28-day log retention']
                    }}
                />

                <PriceCard
                    title="ENTERPRISE"
                    des="Collaborate with different permissions and access patterns."
                    price={"Custom"}
                    custom
                    features={{
                        text: 'Everything in the Pro plan, plus:',
                        all: [
                            'Designated Support manager',
                            'Uptime SLAs',
                            'On-premise support',
                            'Private Slack channel',
                            'Custom Security Questionnaires'
                        ]
                    }}
                />

            </div>


        </section>

        {/* Questions Section */}

        <QuestionSection quests={Questions} />

    </div>);
}



export default PricingPage;