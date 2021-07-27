import classNames from "classnames"
import {
    DetailedHTMLProps,
    HTMLAttributes,
    ImgHTMLAttributes,
    MutableRefObject,
    ReactEventHandler,
    useCallback,
    useEffect,
    useState,
} from "react"
import styled from "styled-components"
type ImageType = DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>
export type IImagetProps = Pick<ImageType, "onLoad" | "onError">
export type IImageProps = Omit<ImageType, keyof IImagetProps> & {
    onImageLoad?: (
        e: ReactEventHandler<HTMLImageElement>,
        ...args: any[]
    ) => void
    onLoadError?: (
        e: ReactEventHandler<HTMLImageElement>,
        ...args: any[]
    ) => void
    ssr?: boolean
    parentRef?: MutableRefObject<HTMLDivElement>
    childRef?: MutableRefObject<HTMLImageElement>
    parentElement?: HTMLAttributes<HTMLDivElement>
    round?: boolean
}

// ReactEventHandler<HTMLImageElement> | undefined;
export function Image(props: IImageProps) {
    const [loading, setLoading] = useState(false)
    const {
        alt,
        src,
        onImageLoad,
        onLoadError,
        ssr = false,
        parentElement,
        parentRef,
        childRef,
        round,
        ...rest
    } = props
    const onLoad = useCallback(e => {
        setLoading(false)
        onImageLoad && onImageLoad(e, src)
        console.log("called")
        // eslint-disable-next-line
    }, [src])

    const onError = useCallback(e => {
      setLoading(false);
      onLoadError && onLoadError(e, src);
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      !ssr && typeof window != "undefined" && setLoading(true);
      // eslint-disable-next-line
    }, [src])
    if (!src) {
        return null
    }
    console.log({ src })
    return (
        <ImageWrapper
            className={classNames("image-comp", {
                loading: loading,
                loaded: !loading,
                round: round,
            })}
            {...parentElement}
            ref={parentRef}>
            {/* eslint-disable-next-line */}
            <img
                onLoad={onLoad}
                src={src}
                alt={alt || "default avatar"}
                onError={onError}
                {...rest}
                ref={childRef}
            />
        </ImageWrapper>
    )
}
const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    &.loading {
        &:before {
            opacity: 1;
            visibility: visible;
        }
    }

    &:before {
        position: absolute;
        left: 50%;
        top: 50%;
        border: 2px solid transparent;
        border-radius: 50%;
        border-top: 2px solid #3f51b5;
        border-right: 2px solid #3f51b5;
        width: 30px;
        height: 30px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
        content: "";
        margin: -15px 0 0 -15px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;
        z-index: 100;
    }

    img {
        max-width: 100%;
    }
    &.round {
        border-radius: 50%;
        img {
            border-radius: 50%;
        }
    }
    /* img:before {
    content: ' ';
    display: block;
    position: absolute;
    height: 50px;
    width: 50px;
    background-image: url(/src/assets/imageNotFound.svg);
  } */
    @keyframes spin {
        0% {
            -webkit-transform: rotate(
                0deg
            ); /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(0deg); /* IE 9 */
            transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */
        }
        100% {
            -webkit-transform: rotate(
                360deg
            ); /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(360deg); /* IE 9 */
            transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */
        }
    }

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(
                0deg
            ); /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(0deg); /* IE 9 */
            transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */
        }
        100% {
            -webkit-transform: rotate(
                360deg
            ); /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(360deg); /* IE 9 */
            transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */
        }
    }
`
