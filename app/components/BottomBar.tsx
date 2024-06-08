//Shadcn UI
import { Button } from "@/components/ui/button";

//Next Link
import Link from "next/link";

//Component
import { CreationSubmit } from "./SubmitButton";


export function BottomBar(){
    return(
        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
        <div className="flex justify-between items-center mx-auto px-5 lg:px-10 h-full">
<Button variant={"secondary"} size="lg">
<Link href="/">Cancel</Link>
</Button>
<CreationSubmit/>
        </div>
    </div>
    )
}