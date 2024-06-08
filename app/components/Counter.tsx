"use client";

//Shadcn UI
import { Button } from "@/components/ui/button";

//Icons
import { Minus, Plus } from "lucide-react";

//React hook
import { useState } from "react";

//Counter button for add or substract given items
export function Counter({name}: {name:string}){
    const [amount, setAmount]= useState(0);

    function increase(){
        setAmount(amount+1);
    }

    function decrease(){
        if(amount > 0){
            setAmount(amount-1)
        }
    }

    return(
<div className="flex items-center gap-x-4">
    <input type="hidden" value={amount} name={name}/>
    <Button variant="outline" size="icon" type="button" onClick={decrease}>
        <Minus className="h-4 w-4 text-primary"/>
    </Button>
    <p className="font-medium text-lg">{amount}</p>
    <Button variant="outline" size="icon" type="button" onClick={increase}>
        <Plus className="h-4 w-4 text-primary"/>
    </Button>
</div>
    )
}