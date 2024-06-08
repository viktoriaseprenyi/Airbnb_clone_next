//Component
import { SelectedCategory } from "@/app/components/SelectedCategory";

//Action
import {createCategoryPage} from "@/app/actions";

//Shadcn UI
import { BottomBar } from "@/app/components/BottomBar";

//When create a home this is the first page where client can interact with - to select the proper category
export default function StrucutreRoute({params}: {params:{id:string}}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your Home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelectedCategory />
<BottomBar/>
      </form>
    </>
  );
}