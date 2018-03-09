import * as React from 'react';
import * as THREE from 'three';
import * as style from './style.css';
import { sizeable } from '../../Utility/Sizeable/Sizeable';

export interface SceneProps {
    // Props injected by decorator
    componentHeight?: number;
    componentWidth?: number;
}

export interface SceneState {
    isDrag?: boolean;
    mousePosX?: number;
    mousePosY?: number;
}

@sizeable(50)
export class Scene extends React.Component<SceneProps, SceneState> {
    private scene?: THREE.Scene;
    private camera?: THREE.PerspectiveCamera;
    private renderer?: THREE.WebGLRenderer;
    private material?: THREE.Material;
    private cube?: THREE.Mesh;
    private mount?: HTMLDivElement;
    private frameId?: number;
    private canvas?: HTMLCanvasElement;

    constructor(props: SceneProps, context: SceneState) {
        super(props, context);

        this.state = {
            isDrag: false,
            mousePosX: undefined,
            mousePosY: undefined,
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
    }

    public componentDidMount?() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            this.props.componentWidth / this.props.componentHeight,
            0.1,
            1000,
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvas });
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
        const cube = new THREE.Mesh(geometry, material);

        camera.position.z = 4;
        scene.add(cube);
        renderer.setClearColor('#000000');
        renderer.setSize(this.props.componentWidth, this.props.componentHeight);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.material = material;
        this.cube = cube;

        this.start();
    }

    public componentDidUpdate?(prevProps: SceneProps, prevState: SceneState, prevContext: any) {
        // Only update canvas size if it changed
        if (prevProps.componentHeight !== this.props.componentHeight ||
            prevProps.componentWidth !== this.props.componentWidth) {
                this.renderer.setSize(this.props.componentWidth, this.props.componentHeight);

                this.camera.aspect = this.props.componentWidth / this.props.componentHeight;
                this.camera.updateProjectionMatrix();
        }

        // Handle our camera movement on drag
        if (prevState.mousePosX !== this.state.mousePosX ||
            prevState.mousePosY !== this.state.mousePosY) {
                // MousePosX and MousePosY are initialized as undefined.
                // On the first tick of drag we do nothing - this lets us avoid that huge snap.
                if ((prevState.mousePosX !== undefined || prevState.mousePosY !== undefined) &&
                    (this.state.mousePosX !== undefined || this.state.mousePosY !== undefined)) {
                    const deltaX = prevState.mousePosX - this.state.mousePosX;
                    const deltaY = prevState.mousePosY - this.state.mousePosY;

                    this.camera.position.x += deltaX * 0.01;
                    this.camera.position.y += deltaY * 0.01;
                }
            }
    }

    public componentWillUnmount?() {
        this.stop();
    }

    public start?() {
        if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate);
        }
    }

    public stop?() {
        cancelAnimationFrame(this.frameId);
    }

    public animate?() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    public renderScene?() {
        this.renderer.render(this.scene, this.camera);
    }

    public handleMouseDown?(e: React.MouseEvent<HTMLDivElement>) {
        this.setState({
            isDrag: true,
            mousePosX: undefined,
            mousePosY: undefined,
        });
    }

    public handleMouseUp?() {
        this.setState({
            isDrag: false,
        });
    }

    public handleMouseMove?(e: React.MouseEvent<HTMLDivElement>) {
        // Handle only if mouse is being moved
        if (this.state.isDrag) {
            this.setState({
                mousePosX: e.clientX,
                mousePosY: e.clientY,
            });
        }
    }

    public render(): React.ReactNode {
        return (
            <div className={style.canvasWrapper}
                onMouseDown={(e) => this.handleMouseDown(e)}
                onMouseUp={() => this.handleMouseUp()}
                onMouseMove={(e) => this.handleMouseMove(e)}>
                <canvas className={style.canvas3d} ref={element => { this.canvas = element; }} />
            </div>
        );
    }
}
