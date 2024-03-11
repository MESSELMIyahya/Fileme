import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ClientCardProps {
    name:string
    job:string
    img:string;
    des:string
}


function ClientCard ({ des,name,job,img }:ClientCardProps){

    return (<div className="p-6 mb-4 rounded-md bg-primary-foreground border shadow-sm break-inside-avoid-column">
        
        <div className="w-full flex items-center gap-2 mb-2">

            <Avatar className="w-12 h-12" >
                <AvatarImage src={img} />
                <AvatarFallback className="bg-card border text-xl">{name.split('')[0].toLocaleUpperCase()}{name.split('')[1].toLocaleUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-center mt-2">
                    <h5 className="text-lg leading-3 text-foreground">{name}</h5>
                    <span className="text-sm text-card-foreground/80">{job}</span>
            </div>
            
        </div>

        <p className="w-full text-base text-foreground">{des}</p>
    
    </div>);
}



const Clients : ({} & ClientCardProps)[] = [
    {
        des:"I've been using @FileMe for two personal projects and it has been amazing being able to use the power of Firebase Storage and don't have to worry about the Security",
        img:'https://avatars.githubusercontent.com/u/107892703?v=4',
        job:'Software Engineer & PREYAH Co-Founder',
        name:"Yahya Messelmi"
    },
    {
        des:"@supabase Putting a ton of well-explained example API queries in a self-building documentation is just a classy move all around. I also love having GraphQL-style nested queries with traditional SQL filtering. This is pure DX delight. A+++. #backend",
        img:'https://avatars.githubusercontent.com/u/107892703?v=4',
        job:'Software Engineer & PREYAH Co-Founder',
        name:"Yahya Messelmi"
    },
    {
        des:"I've been using @FileMe for two personal projects and it has been amazing being able to use the power of Firebase Storage and don't have to worry about the Security",
        img:'https://avatars.githubusercontent.com/u/107892703?v=4',
        job:'Software Engineer & PREYAH Co-Founder',
        name:"Yahya Messelmi"
    },
    {
        des:"Contributing to open-source projects and seeing merged PRs gives enormous happiness! Special thanks to @supabase, for giving this opportunity by staying open-source and being junior-friendly✌🏼",
        img:'https://avatars.githubusercontent.com/u/107892703?v=4',
        job:'Software Engineer & PREYAH Co-Founder',
        name:"Yahya Messelmi"
    },
    {
        des:"Y'all @supabase + @nextjs is amazing! 🙌 Barely an hour into a proof-of-concept and already have most of the functionality in place. 🤯🤯🤯",
        img:'https://avatars.githubusercontent.com/u/107892703?v=4',
        job:'Software Engineer & PREYAH Co-Founder',
        name:"Yahya Messelmi"
    },
    {
        des:"@supabase Putting a ton of well-explained example API queries in a self-building documentation is just a classy move all around. I also love having GraphQL-style nested queries with traditional SQL filtering. This is pure DX delight. A+++. #backend",
        img:'https://avatars.githubusercontent.com/u/107892703?v=4',
        job:'Software Engineer & PREYAH Co-Founder',
        name:"Yahya Messelmi"
    },
    {
        des:"I've been using @FileMe for two personal projects and it has been amazing being able to use the power of Firebase Storage and don't have to worry about the Security",
        img:'https://avatars.githubusercontent.com/u/107892703?v=4',
        job:'Software Engineer & PREYAH Co-Founder',
        name:"Yahya Messelmi"
    },{
        des:"I'm trying @supabase, Firebase alternative that uses PostgreSQL (and you can use GraphQL too) in the cloud. It's incredible 😍",
        img:'https://avatars.githubusercontent.com/u/107892703?v=4',
        job:'Software Engineer & PREYAH Co-Founder',
        name:"Yahya Messelmi"
    }
]


function ClientsReviewSection () {


    return (<section className="container flex flex-col gap-8 justify-center pb-8 pt-16">

        <div className="w-full flex flex-col items-center gap-3 mb-8">
            <h3 className="lg:text-3xl text-2xl text-center font-bold uppercase text-foreground">Loved and used worldwide</h3>
            <p className="lg:text-base text-sm text-center text-muted-foreground">Our software is so simple that people can’t help but fall in love with it</p>
        </div>


        <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
            {
                Clients.map((e,i)=><ClientCard key={e.name} {...e}/>)
            }
        </div>

    
    </section>)

}

export default ClientsReviewSection; 