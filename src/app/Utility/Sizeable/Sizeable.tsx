import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ResizeObserverAPI from 'resize-observer-polyfill';

export interface InjectedProps {
    namae: string;
}

export interface State {
    componentHeight: number;
    componentWidth: number;
}

export function sizeable<TOriginalProps extends {}>(
    WrappedComponent: React.ComponentClass<TOriginalProps>,
    ): React.ComponentClass<TOriginalProps & InjectedProps> {
        // Truncate our props into one, so its pretty
        type ResultProps = TOriginalProps & InjectedProps;

        return class extends React.Component<ResultProps, State> {
            public static displayName = `sizeable(${getDisplayName(WrappedComponent)})`;
            private observerTarget: Element;
            private observer: ResizeObserver;

            // Declare our debounced function
            private debouncedHandle = debounce((entry) => this.handleSizeChange(entry), 200);

            private handleSizeChange(entries: ResizeObserverEntry[]) {
                for (const entry of entries) {
                    if (!entry) {
                        return;
                    }

                    const { height, width } = entry.contentRect;
                    this.setState({
                        componentHeight: height,
                        componentWidth: width,
                    });
                }
            }

            public constructor(props: ResultProps) {
                super(props);

                this.state = {
                    componentHeight: 0,
                    componentWidth: 0,
                };
            }

            public componentDidMount() {
                const target = ReactDOM.findDOMNode(this);
                // Im not sure if this could ever happen, but we can always just be safe.
                if (!target) {
                    throw new TypeError('Could not find this component in the react DOM. Make sure that the component has not been removed');
                }

                this.observer = new ResizeObserverAPI((entries) => this.debouncedHandle(entries));

                this.observer.observe(target);
                this.observerTarget = target;
            }

            public componentWillUnmount() {
                this.observer = null;
            }

            public render(): React.ReactNode {
                return (
                    React.Children.only(
                        <WrappedComponent {...this.props} {...this.state} />,
                    )
                );
            }
        };
}

function getDisplayName(wrappedComponent: React.ComponentClass): string {
    return wrappedComponent.displayName || wrappedComponent.name || 'Component';
}

function debounce(func: (param: any) => void, delay = 50) {
    let timer = null;
    return (passParam: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(passParam), delay);
    };
}
