import React from "react";
import Link from 'next/link';
import { Carousel } from "react-responsive-carousel";

const CarouselList = (props) => {
    return (
        <>
            <Carousel infiniteLoop showStatus={false} showThumbs={false} dynamicHeight={false}  className="my-6" >
                {props.galleries.map((gallery) => (
                    <Link key={gallery} href="galleries/[id]" as={`/galleries/${gallery.id}`} >
                        <a href={`/galleries/${gallery.id}`}>
                            <div>
                                <img className="object-cover object-center" style={{ height: "600px" }} alt={gallery.keywords} src={props.server + '/uploads/banner/' + gallery.sourceFile} />
                            </div>
                        </a>
                    </Link>
                ))}
            </Carousel>
        </>
    )
}
export default CarouselList