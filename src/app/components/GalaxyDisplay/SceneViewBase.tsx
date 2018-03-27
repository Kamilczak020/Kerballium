import * as React from 'react';
import * as THREE from 'three';
import * as style from './style.css';
import { sizeable } from '../../Utility/Sizeable/Sizeable';
import { SceneControllerBase, ISceneController } from './SceneControllerBase';

export interface SceneViewBaseProps {
    // Props injected by decorator
    componentHeight?: number;
    componentWidth?: number;
}

export interface SceneViewBaseState {
    isPrimaryDrag?: boolean;
    isSecondaryDrag?: boolean;
    mousePosX?: number;
    mousePosY?: number;
}

export abstract class SceneViewBase<BaseProps extends SceneViewBaseProps,
    BaseState extends SceneViewBaseState> extends React.Component<BaseProps, BaseState> {
    protected sceneController?: ISceneController;
    protected canvas?: HTMLCanvasElement;

    constructor(props: BaseProps, context: BaseState) {
        super(props, context);
    }

    public componentDidUpdate?(prevProps: BaseProps, prevState: BaseState, prevContext: any) {
        // Only manipulate canvas size if either width or height has changed.
        if (this.props.componentWidth !== prevProps.componentWidth ||
            this.props.componentHeight !== prevProps.componentHeight) {
                this.sceneController.setSize(this.props.componentWidth, this.props.componentHeight);
        }

        // Only run when our mouse actually moved.
        if (this.state.mousePosX !== prevState.mousePosX ||
            this.state.mousePosY !== prevState.mousePosY) {
            // Only run during drag, and skip instances where we start / stop dragging inside canvas.
            // On primary mouse button drag, pan camera.
            if ((this.state.isPrimaryDrag === prevState.isPrimaryDrag) && this.state.isPrimaryDrag) {
                this.sceneController.panCamera(
                    prevState.mousePosX,
                    this.state.mousePosX,
                    prevState.mousePosY,
                    this.state.mousePosY,
                );
            }
            // On Secondary mouse button drag, rotate camera.
            if ((this.state.isSecondaryDrag === prevState.isSecondaryDrag) && this.state.isSecondaryDrag) {
                this.sceneController.rotateCamera(
                    prevState.mousePosX,
                    this.state.mousePosX,
                    prevState.mousePosY,
                    this.state.mousePosY,
                );
            }
        }
    }

    /**
     * On mouse button press, set the corresponding drag state to true.
     * @param e Mouse event
     */
    public handleMouseDown?(e: React.MouseEvent<HTMLDivElement>) {
        if (e.button === 0) {
            this.setState({
                isPrimaryDrag: true,
                mousePosX: e.clientX,
                mousePosY: e.clientY,
            });
        }

        if (e.button === 2) {
            this.setState({
                isSecondaryDrag: true,
            });
        }
    }

    /**
     * On mouse button release, set the corresponding drag state to false.
     * @param e Mouse event
     */
    public handleMouseUp?(e: React.MouseEvent<HTMLDivElement>) {
        if (e.button === 0) {
            this.setState({
                isPrimaryDrag: false,
            });
        }

        if (e.button === 2) {
            this.setState({
                isSecondaryDrag: false,
            });
        }
    }

    /**
     * On mouse move during drag, update mouse position.
     * @param e Mouse event
     */
    public handleMouseMove?(e: React.MouseEvent<HTMLDivElement>) {
        // Handle only if during drag
        if (this.state.isPrimaryDrag || this.state.isSecondaryDrag) {
            this.setState({
                mousePosX: e.clientX,
                mousePosY: e.clientY,
            });
        }
    }

    public handleScroll?(e: React.WheelEvent<HTMLDivElement>) {
        this.sceneController.zoomCamera(e.deltaY);
    }

    public render(): React.ReactNode {
        return (
            <div className={style.canvasWrapper}
                onMouseDown={(e) => this.handleMouseDown(e)}
                onMouseUp={(e) => this.handleMouseUp(e)}
                onMouseMove={(e) => this.handleMouseMove(e)}
                onWheel={(e) => this.handleScroll(e)}>
                <canvas className={style.canvas3d} ref={element => { this.canvas = element; }} />
            </div>
        );
    }
}
