import React, { FC, useRef } from 'react'
interface Props {
    url: string;
    title?: string
}

export const ImageCard: FC<Props> = ({ url, title }) => {
    const image = useRef<HTMLImageElement>(null);
    const handleFullScreen = () => {
        if (!image.current) return;
        // console.log(image.current);
        const element = image.current;
        return (
            document.fullscreenElement
        );
    };

    const toggleFullScreen = () => {
        if (!image.current) return;
        const element = image.current;
        if (handleFullScreen()) {
            document.exitFullscreen();
        } else {
            element.requestFullscreen();
        }
    };
    return (
        <div className="flex justify-center items-center">
            <img
                src={url}
                alt="Imagen del proyecto"
                title='Imagen del proyecto'
                className="modal__img"
                onDoubleClick={toggleFullScreen}
                ref={image}
            />
        </div>
    );
};