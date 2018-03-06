import * as React from 'react';
import * as ResizeObserverAPI from 'resize-observer-polyfill';

export interface InjectedProps {
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

        return class Sizeable extends React.Component<TOriginalProps, State> {
            public static displayName = `sizeable(${getDisplayName(WrappedComponent)})`;
            private observer: ResizeObserver;

            constructor(props: ResultProps) {
                super(props);

                this.state = {
                    componentHeight: 0,
                    componentWidth: 0,
                };
            }

            public render(): JSX.Element {
                return (
                    <WrappedComponent {...this.props} {...this.state} />
                );
            }
        };
}

function getDisplayName(wrappedComponent: React.ComponentClass) {
    return wrappedComponent.displayName || wrappedComponent.name || 'Component';
}
