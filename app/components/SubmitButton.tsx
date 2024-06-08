"use client"

//Shadcn UI
import {Button} from "@/components/ui/button";

//Icons
import { Loader2 } from "lucide-react";
import { Heart } from "lucide-react";

//React hook - gives info about last form submission
import { useFormStatus } from "react-dom";


export function CreationSubmit(){
  //Get pending status info - tells you if the form is actively submitting
    const {pending} = useFormStatus();

    return(
    <>
    {pending ? (<Button disabled size="lg">
        <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait
    </Button>)
     :
     (<Button type="submit" size="lg">Next</Button>)
     }
    </>
    )
}

export function AddToFavoriteButton() {
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <Button
            variant="outline"
            size="icon"
            disabled
            className="bg-primary-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="bg-primary-foreground"
            type="submit"
          >
            <Heart className="w-4 h-4" />
          </Button>
        )}
      </>
    );
  }
  
  export function DeleteFromFavoriteButton() {
    
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <Button
            variant="outline"
            size="icon"
            disabled
            className="bg-primary-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="bg-primary-foreground"
            type="submit"
          >
            <Heart className="w-4 h-4 text-primary" fill="#E21C49" />
          </Button>
        )}
      </>
    );
  }

  export function ReservationSubmitButton(){
    const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled>
          <Loader2 className="w-4 h-4 animate-spin mr-2" /> Please wait...
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          Make a Reservation!
        </Button>
      )}
    </>
  );
  }