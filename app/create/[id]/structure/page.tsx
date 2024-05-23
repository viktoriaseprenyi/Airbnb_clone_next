import { SelectedCategory } from "@/app/components/SelectedCategory";
import {createCategoryPage} from "@/app/actions";
import { BottomBar } from "@/app/components/BottomBar";


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