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
 *
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

        this.state = {
            status: 0, // 0 - nothing, 1 - staged, 2 - loading, 3 - loaded
            visible: false
        };

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
            status: this.state.status === 1 && visible ? 2 : this.state.status
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.load && this.state.status === 0) {

            this.setState({
                status: this.state.visible || !this.props.loadWhenInViewport ? 2 : 1
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

        return <div className={`LazyAsset ${this.props.className}`} style={ { ...styles.LazyAsset, ...this.props.style} }>

                <div className={"LazyAsset__Wrapper"} style={{...styles.LazyAsset__Wrapper, ...extraStyles}} ref={this.wrapper}>

                    <div className={"LazyAsset__WrapperOverflow"}
                         style={{...styles.LazyAsset__WrapperOverflow, transition: `opacity ${this.props.animationTime}s`, opacity: this.state.status === 3 ? 1 : 0}}>

                        {this.props.images.length > 0 &&
                        <img
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
    preload: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.object),
    loaded: PropTypes.bool,
    backgroundColor: PropTypes.string,
};

LazyAsset.defaultProps = {
    className: "",
    style: {},
    animationTime: 1,
    loadWhenInViewport: false,
    sizes: "100vw",
    preload: false,
    images: [],
    loaded: false,
    backgroundColor: "lightgrey"
};


export default LazyAsset;
