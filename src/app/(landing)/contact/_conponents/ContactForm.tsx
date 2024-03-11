import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";



function ContactForm() {


    return (<form className="w-full flex flex-col gap-4 md:w-[22em] lg:w-[28em] min-h-[25em] p-5 rounded-md bg-card border  ">

        <div className="w-full flex flex-col gap-2">
            <Label className="" htmlFor="name">
                Name
            </Label>
            <Input id="name" className="w-full " placeholder="John Do" />
        </div>

        <div className="w-full flex flex-col gap-2">
            <Label className="" htmlFor="email">
                Email
            </Label>
            <Input id="email" type="email" className="w-full " placeholder="example@gmail.com" />
        </div>

        <div className="w-full flex flex-col gap-2">
            <Label className="" htmlFor="sub">
            Subject 
            </Label>
            <Select>
                <SelectTrigger id="sub" className="w-full ">
                    <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Question</SelectItem>
                    <SelectItem value="dark">Bug</SelectItem>
                    <SelectItem value="system">Meet</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="w-full flex flex-col gap-2">
            <Label className="" htmlFor="email">
                Message
            </Label>
            <Textarea id="Message" className="w-full resize-none " placeholder="Your message" />
        </div>


        <div className="w-full flex justify-end">
            <Button className="w-[9em]" >Send</Button>
        </div>


    </form>)
}


export default ContactForm ;