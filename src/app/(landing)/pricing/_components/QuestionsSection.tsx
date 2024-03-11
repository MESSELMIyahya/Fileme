import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"



interface Props {
    quests: { question: string, answer: string }[]
}


function QuestionSection({ quests }: Props) {

    return (<section className="container flex flex-col gap-8 lg:gap-12 items-center pb-8 pt-16 lg:pt-32">

        <div className="w-full flex flex-col items-center gap-3 mb-8">
            <h3 className="lg:text-3xl text-2xl text-center font-bold uppercase text-foreground">Frequently asked questions</h3>
        </div>

        <Accordion type="single" collapsible className="w-full sm:w-[30em] md:w-[40em] lg:w-[45em]" >
            {
                quests.map((e, i)=> 
                <AccordionItem key={`item-${i}`} value={`item-${i}`}>
                    <AccordionTrigger className="text-lg">{e.question}</AccordionTrigger>
                    <AccordionContent className="text-base">{e.answer}</AccordionContent>
                </AccordionItem>)
            }
        </Accordion>

    </section>)
}




export default QuestionSection 