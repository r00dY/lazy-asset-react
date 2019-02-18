import React from 'react';

import {storiesOf} from '@storybook/react';

import LazyAsset from '../LazyAsset.js';

const CAT_LANDSCAPE = [
    {
        url: "/cat/cat_420.png",
        w: 420,
        h: 236
    },
    {
        url: "/cat/cat_768.png",
        w: 768,
        h: 430
    },
    {
        url: "/cat/cat_1024.png",
        w: 1024,
        h: 534
    },
    {
        url: "/cat/cat_1280.png",
        w: 1280,
        h: 717
    },
    {
        url: "/cat/cat_1600.png",
        w: 1600,
        h: 896
    },
    {
        url: "/cat/cat_1920.png",
        w: 1920,
        h: 1075
    }
];

const CAT_PORTRAIT = [
    {
        url: "/cat/cat_p420.png",
        w: 420,
        h: 489
    },
    {
        url: "/cat/cat_p768.png",
        w: 768,
        h: 894
    },
    {
        url: "/cat/cat_p920.png",
        w: 1024,
        h: 1071
    }
];


const styles = {
    imageLabel: {
        position: "absolute",
        top: "-10px",
        left: "-10px",
        height: "calc(100% + 20px)",
        width: "calc(100% + 20px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 0, 0, 0.2)"
    }
};

function renderAllModes(options, loaded) {

    options = options || {};

    return (
        <div>
            <h3>Natural</h3>
            <LazyAsset
                mode={"natural"}
                sizes={"100vw"}
                alt={"alternative text"}
                images={CAT_LANDSCAPE}

                style={{
                    width: "600px",
                }}

                load={loaded}

                {...options}
            />
            <h3>Cover</h3>
            <LazyAsset
                mode={"cover"}
                sizes={"100vw"}
                alt={"alternative text"}
                images={CAT_LANDSCAPE}

                style={{
                    width: "600px",
                    height: "400px"
                }}

                load={loaded}

                {...options}
            />
            <h3>Contain (landscape)</h3>
            <LazyAsset
                mode={"contain"}
                sizes={"100vw"}
                alt={"alternative text"}
                images={CAT_LANDSCAPE}

                style={{
                    width: "600px",
                    height: "600px"
                }}

                load={loaded}

                {...options}
            />

            <h3>Contain (portrait)</h3>
            <LazyAsset
                mode={"contain"}
                sizes={"100vw"}
                alt={"alternative text"}
                images={CAT_PORTRAIT}

                style={{
                    width: "600px",
                    height: "600px"
                }}

                load={loaded}

                {...options}
            />

            <h3>Cover (to 1000px), natural (to 1500px), contain (from 1500px)</h3>
            <LazyAsset
                media={[
                    {
                        media: "screen",
                        mode: "cover",
                        images: CAT_PORTRAIT
                    },
                    {
                        media: "screen and (min-width: 1000px)",
                        mode: "natural",
                        images: CAT_LANDSCAPE
                    },
                    {
                        media: "screen and (min-width: 1500px)",
                        mode: "contain",
                        images: CAT_LANDSCAPE
                    }
                ]}
                sizes={"100vw"}
                alt={"alternative text"}

                style={{
                    width: "600px",
                    height: "600px",
                    border: "1px solid black"
                }}

                load={loaded}

                {...options}
            />

        </div>
    );
}

class LazyAssetStory__Options extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState({
            loaded: true
        });
    }

    render() {
        return <div>
            <h2>Standard</h2>

            <p>Things to test</p>
            <ul>
                <li>Tag should be <em>img</em></li>
                <li><em>alt</em> tag should be present</li>
                <li>animation should be fade</li>
                <li>class should be added</li>
                <li><em>sizes</em> param should be properly filled</li>
            </ul>

            <div style={{marginBottom: "16px"}}>
                <button onClick={this.handleClick}>Load images</button>
            </div>

            {renderAllModes({
                className: "testClassAdded"
            }, this.state.loaded)}

            <h2>Placeholder + extra markup (edges out of image) + no fade animation</h2>

            <div style={{marginBottom: "16px"}}>
                <button onClick={this.handleClick}>Load images</button>
            </div>

            {renderAllModes({
                placeholder: "/pattern.png",
                children: <div style={styles.imageLabel}><h1>Bang</h1></div>,
                animationTime: 0
            }, this.state.loaded)}

        </div>
    }
}

class LazyAssetStory__LoadOnScroll extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            load: false
        }
    }

    componentDidMount() {
        this.setState({
            load: true
        });
    }

    render() {
        return <div>
            <h2>Lazy loading</h2>

            {[...Array(30)].map((e, i) =>
                <LazyAsset
                    mode={"natural"}
                    sizes={"100vw"}
                    images={[
                        {
                            url: `//via.placeholder.com/555x${300 + i*10}`,
                            w: 555,
                            h: 300 + i*10
                        }
                    ]}

                    style={{
                        width: "400px",
                        marginBottom: "40px"
                    }}

                    load={this.props.load ? this.props.load : this.state.load} // if we pass "load=true" then image is preloaded
                    loadWhenInViewport={true}
                    offset={this.props.offset}
                />
            )}

        </div>
    }
}

storiesOf('LazyAsset', module)
    .add('options', () => <LazyAssetStory__Options/>)
    .add('load on scroll', () => <LazyAssetStory__LoadOnScroll/>)
    .add('load on scroll (with 100vh offset)', () => <LazyAssetStory__LoadOnScroll offset={{top: -window.innerHeight, bottom: -window.innerHeight}}/>)
    .add('load on scroll (all images preloaded)', () => <LazyAssetStory__LoadOnScroll load={true}/>);


