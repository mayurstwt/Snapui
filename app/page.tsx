import SimpleNavbarEight from "./Navbars/SimpleNavbarEight/page";
import SimpleNavbarFive from "./Navbars/SimpleNavbarFive/page";
import SimpleNavbarFour from "./Navbars/SimpleNavbarFour/page";
import SimpleNavbarNine from "./Navbars/SimpleNavbarNine/page";
import SimpleNavbarOne from "./Navbars/SimpleNavbarOne/page";
import SimpleNavbarSeven from "./Navbars/SimpleNavbarSeven/page";
import SimpleNavbarSix from "./Navbars/SimpleNavbarSix/page";
import SimpleNavbarTen from "./Navbars/SimpleNavbarTen/page";
import SimpleNavbarThree from "./Navbars/SimpleNavbarThree/page";
import SimpleNavbarTwo from "./Navbars/SimpleNavbarTwo/page";

export default function Home() {
  return (<>
    <div className="flex flex-col gap-y-40">
    <SimpleNavbarFour/>
    <SimpleNavbarThree/>
    <SimpleNavbarTwo/>
    <SimpleNavbarOne />
    <SimpleNavbarFive/>
    <SimpleNavbarSix/>
    <SimpleNavbarSeven/>
    <SimpleNavbarEight/>
    <SimpleNavbarNine/>
    <SimpleNavbarTen/>
    </div>
  </>)
}
