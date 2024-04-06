import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";




export default function StorageProgressCard() {


    return (<Card x-chunk="dashboard-02-chunk-0">
        <CardContent className="p-4 ">

            <div className="mb-2">
                <Progress value={20} className="h-2 mb-1" />
                <div className="w-full">
                    <span className="w-full text-center text-sm text-foreground/80">
                        500 MB of 15 GB used
                    </span>
                </div>
            </div>
            <Button size="sm" className="w-full">
                Get More Storage
            </Button>
        </CardContent>
    </Card>)

}