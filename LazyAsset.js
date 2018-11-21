import React from "react";
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

/**
 * TODO:
 *
 * - videos
 * - contain mode
 * - IE / Edge fallbacks
 * - onLoad callbacks
 * - picture (different images and modes per media query)
 * - lazy video
 */
const styles = {
    LazyAsset: {
        position: 'relative'
    },
    LazyAsset__Wrapper: {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    LazyAsset__WrapperOverflow: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden"
    },
    img: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "50% 50%",
        // IE fallback
        backgroundPosition: "center center",
        backgroundSize: "cover"
    }
};

class LazyAsset extends React.Component {
    constructor(props) {
        super(props);
        // this.state.status explained
        // 0 - props.load = false. There was actually nothing done with image so far
        // 1 - props.load = true. Image is set to be downloaded but is not loading yet (when props.loadWhenInViewPort = true and image is not in viewport)
        // 2 - props.load = true. Image is being downloaded (srcset for <img> is set).
        // 3 - props.load = true. Image is downloaded.
        this.state = {
            status: props.load === true ? 2 : 0,
            visible: false
        };
        this.image = React.createRef();
        this.wrapper = React.createRef();
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    _getSrcset(images) {
        let result = "";
        images.forEach((image) => {
            result += `${image.url} ${image.w}w, `;
        });
        return result;
    }

    handleImageLoaded() {
        this.setState({
            status: 3
        });
    }

    handleVisibilityChange(visible) {
        this.setState({
            visible: visible,
            status: this.state.status === 1 && visible && (this.wrapper.current.clientWidth > 0) ? 2 : this.state.status
        });
    }

    componentDidUpdate(prevProps) {
        /* handle setting load*/
        if (this.props.load && this.state.status === 0) {
            this.setState({
                status: (this.state.visible || !this.props.loadWhenInViewport) && (this.wrapper.current.clientWidth > 0) ? 2 : 1
            });
        }
    }

    componentDidMount() {
        // If image is loaded before onLoad event makes it to be registered
        if (this.image.current && this.image.current.complete && this.image.current.naturalWidth > 0 && this.state.status === 2) {
            this.setState({
                status: 3
            });
        }
    }

    render() {
        // Extra styles for LazyAsset__Wrapper
        let extraStyles = {};
        if (this.props.mode === "natural") {
            extraStyles.paddingBottom = `${(this.props.images[0].h / this.props.images[0].w * 100)}%`;
            extraStyles.height = "auto";
        }
        if (this.props.placeholder) {
            extraStyles.backgroundImage = `url(${this.props.placeholder})`;
        }
        if (this.props.backgroundColor) {
            extraStyles.backgroundColor = this.props.backgroundColor;
        }
        return <div className={`LazyAsset ${this.props.className}`} style={{...styles.LazyAsset, ...this.props.style}}>
            <VisibilitySensor onChange={this.handleVisibilityChange} partialVisibility={true}
                              offset={this.props.offset}>
                <div ref={this.wrapper} className={"LazyAsset__Wrapper"}
                     style={{...styles.LazyAsset__Wrapper, ...extraStyles}}>
                    <div className={"LazyAsset__WrapperOverflow"}
                         style={{
                             ...styles.LazyAsset__WrapperOverflow,
                             transition: `opacity ${this.props.animationTime}s`,
                             opacity: this.state.status === 3 ? 1 : 0
                         }}>
                        {this.props.images.length > 0 &&
                        <img
                            ref={this.image}
                            style={styles.img}
                            sizes={this.props.sizes}
                            alt={this.props.alt}
                            srcSet={this.state.status >= 2 ? this._getSrcset(this.props.images) : ''}
                            onLoad={this.handleImageLoaded}
                        />
                        }
                    </div>
                    {this.props.children}
                </div>
            </VisibilitySensor>
        </div>
    }
}

LazyAsset.propTypes = {
    mode: PropTypes.oneOf(["cover", "natural"]).isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    animationTime: PropTypes.number,
    placeholder: PropTypes.string,
    loadWhenInViewport: PropTypes.bool,
    sizes: PropTypes.string,
    alt: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object),
    loaded: PropTypes.bool,
    backgroundColor: PropTypes.string,
    offset: PropTypes.object,
};

LazyAsset.defaultProps = {
    className: "",
    style: {},
    animationTime: 1,
    loadWhenInViewport: false,
    sizes: "100vw",
    images: [],
    load: false,
    backgroundColor: "lightgrey",
    offset: {top: 0, bottom: 0}
};

export default LazyAsset;