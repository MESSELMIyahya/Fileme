import ContactCard from "./_conponents/CotnactCard";


export default function ContactPage() {



    return (<section className="container flex flex-col gap-8 justify-center pb-12 pt-16 lg:pt-32">


        <div className="w-full flex flex-col items-center gap-3 mb-8">
            <h3 className="lg:text-4xl text-2xl text-center font-bold uppercase text-primary">Get In Touch</h3>
            <p className="lg:text-base text-sm text-center text-muted-foreground ">Contact us and shear with us your experience or ask your question</p>
        </div>


        <div className="w-full flex justify-center">

        {/* card */}
        <ContactCard/>

        </div>
    </section>);
}