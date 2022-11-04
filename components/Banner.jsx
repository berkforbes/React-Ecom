import Image from "next/image";
import bannerImg from "../public/images/banner-image.jpeg";
import { Button } from "./elements/Button";

export const Banner = () => {

    return (
        <div className="flex">
            <div className="banner__image-container w-full sm:w-1/2">
                <Image alt="banner image" src={bannerImg} />
            </div>
            <div className="banner__description-container w-full sm:w-1/2">
                <div className="flex flex-col w-2/3">
                    <h1 className="text-xl pb-3">Intro New Styles</h1>
                    <p className="pb-3">High Performing</p>
                    <Button>Shop Now</Button>
                </div>
            </div>
        </div>
    )
}