import * as React from 'react';

export interface SatelliteIconProps {
    className?: string;
    width: number;
    height: number;
}

export class SatelliteIcon extends React.Component<SatelliteIconProps> {
    public render() {
        return (
            <svg {...this.props} viewBox='0 0 470 470'>
                <g>
                    <path fill='currentColor' d="m467.803,377.323l-122.025-122.026c-2.929-2.929-7.678-2.929-10.606,0l-30.487,30.487-10.607-10.607 80.111-80.111c2.929-2.929 2.929-7.678 0-10.606l-3.719-3.719 30.052-30.052c1.565-1.565 2.359-3.741 2.169-5.946l-3.146-36.559c-0.474-5.508-3.655-12.343-7.564-16.253l-13.911-13.912c-3.909-3.909-10.744-7.089-16.252-7.564l-36.56-3.146c-0.061-0.005-0.122-0.002-0.183-0.006-0.186-0.011-0.373-0.02-0.56-0.017-0.098,0.001-0.194,0.009-0.291,0.014-0.162,0.008-0.323,0.019-0.484,0.038-0.101,0.012-0.2,0.027-0.3,0.043-0.158,0.025-0.316,0.054-0.472,0.09-0.095,0.021-0.189,0.044-0.283,0.069-0.162,0.043-0.322,0.093-0.481,0.146-0.085,0.029-0.17,0.057-0.253,0.089-0.166,0.063-0.33,0.135-0.492,0.21-0.073,0.034-0.147,0.065-0.219,0.102-0.168,0.085-0.332,0.18-0.495,0.278-0.063,0.038-0.128,0.072-0.189,0.112-0.168,0.109-0.331,0.229-0.492,0.352-0.051,0.039-0.104,0.073-0.154,0.113-0.206,0.166-0.406,0.344-0.598,0.535l-30.052,30.054-3.719-3.719c-2.929-2.929-7.678-2.929-10.606,0l-80.111,80.111-10.607-10.607 30.487-30.487c2.929-2.929 2.929-7.678 0-10.606l-122.027-122.026c-2.929-2.929-7.678-2.929-10.606-2.66454e-15l-71.58,71.58c-2.929,2.929-2.929,7.678 0,10.606l122.026,122.026c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197l30.487-30.487 10.607,10.607-76.943,76.943c-2.929,2.929-2.929,7.678 0,10.606l26.667,26.667-12.041,12.041c-25.787-18.545-56.636-28.558-89.03-28.558-8.921,0-17.895,0.784-26.671,2.331-2.755,0.485-5.01,2.463-5.852,5.13s-0.128,5.582 1.85,7.559l40.259,40.259-6.707,65.303c-0.23,2.245 0.562,4.474 2.158,6.069l21.213,21.213c1.414,1.414 3.324,2.197 5.303,2.197 0.255,0 0.511-0.013 0.767-0.039l65.303-6.706 40.259,40.259c1.428,1.428 3.345,2.197 5.304,2.197 0.753,0 1.514-0.114 2.255-0.347 2.667-0.841 4.645-3.097 5.13-5.852 6.893-39.12-1.763-79.01-23.341-111.435l12.73-12.73 23.091,23.091c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197l76.943-76.943 10.607,10.607-30.487,30.487c-2.929,2.929-2.929,7.678 0,10.606l122.026,122.026c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197l71.58-71.58c2.931-2.929 2.931-7.678 0.001-10.607zm-269.01-247.797l-13.253,13.253-50.407-50.407 13.253-13.253 50.407,50.407zm-172.392-50.446l13.253-13.253 34.497,34.497c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-34.496-34.498 13.253-13.253 34.497,34.497c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-34.497-34.498 13.253-13.253 50.407,50.406-18.554,18.553c-0.006,0.006-23.862,23.861-23.862,23.861-0.003,0.003-18.558,18.558-18.558,18.558l-50.405-50.405zm111.419,111.419l-50.407-50.407 13.253-13.253 50.407,50.407-13.253,13.253zm30.491-30.491c-0.01,0.01-6.632,6.632-6.632,6.632l-50.407-50.407 13.253-13.253 50.407,50.407-6.621,6.621zm156.304-74.62l34.027,34.027c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-24.793-24.793 16.075,1.383c1.971,0.17 5.534,1.829 6.933,3.227l13.91,13.91c1.398,1.399 3.057,4.962 3.227,6.933l2.846,33.082-27.584,27.584-59.997-59.997 24.75-24.75zm-257.41,333.576l-16.169-16.169 5.095-49.613 60.687,60.687-49.613,5.095zm103.262,27.341l-146.772-146.772c3.058-0.203 6.12-0.305 9.176-0.305 31.183,0 60.783,10.28 84.933,29.232 0.05,0.041 0.1,0.081 0.151,0.121 4.325,3.404 8.478,7.082 12.43,11.034 28.231,28.233 42.679,67.248 40.082,106.69zm-19.383-106.135c-3.166-3.862-6.525-7.592-10.093-11.161-2.363-2.363-4.796-4.63-7.283-6.818l10.839-10.839 17.678,17.678-11.141,11.14zm50.141,6.647l-78.042-78.042 157.054-157.054 78.042,78.042-157.054,157.054zm78.276-14.637l13.253-13.253 34.497,34.497c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-34.497-34.497 6.622-6.622c0.01-0.01 6.632-6.632 6.632-6.632l34.497,34.497c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-34.497-34.497 13.253-13.253 50.406,50.406-60.973,60.973-50.405-50.407zm111.42,111.42l-50.406-50.406 13.253-13.253 50.406,50.406-13.253,13.253zm23.86-23.86l-50.406-50.406 13.253-13.253 50.406,50.406-13.253,13.253zm23.859-23.86l-50.406-50.406 13.253-13.253 50.406,50.406-13.253,13.253z"/>
                    <path fill='currentColor' d="m27.301,421.486c-2.929-2.929-7.678-2.929-10.606,0-2.929,2.929-2.929,7.678 0,10.606l21.213,21.213c1.464,1.464 3.384,2.197 5.303,2.197s3.839-0.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-21.213-21.213z"/>
                </g>
            </svg>
        );
    }
}
