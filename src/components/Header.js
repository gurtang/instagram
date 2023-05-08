import React from 'react';
import Image from "next/image";

function Header() {
    return (
        <div className={"flex items-center justify-between max-w-6xl "}>
            {/*left*/}
            <div className={""}>
                <div className={"cursor-pointer h-24 w-24 relative hidden lg:inline-grid"}>
                    <Image alt={"Instagram"} src={"https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"} layout={"fill"} className={"object-contain"}/>
                </div>
                <div className={"cursor-pointer h-24 w-10 relative  lg:hidden"}>
                    <Image alt={"Instagram"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"} layout={"fill"} className={"object-contain"}/>
                </div>
            </div>
            <h1>Right side</h1>
            {/*middle*/}
            {/*right*/}
        </div>
    );
}

export default Header;