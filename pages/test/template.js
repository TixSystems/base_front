import thtml from './template.html'

export function hello() {
    return `
    <svg class="flex w-1/3 overflow-hidden" viewBox="0 0 224.9704 224.97037" version="1.1" id="svg1" xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs id="defs1">
            <filter x="-0.2160293" width="1.4320586" y="-0.2160293" height="1.4320586"
                style="color-interpolation-filters:sRGB" id="filter8">
                <feGaussianBlur result="result8" stdDeviation="14.140541" in="SourceGraphic" id="feGaussianBlur2" />
                <feComposite operator="xor" in2="SourceGraphic" result="result22" id="feComposite2" />
                <feComposite k2="1" operator="arithmetic" result="result20" in2="result22" in="result22"
                    id="feComposite3" k1="0" k3="0" k4="0" />
                <feComposite in2="result22" in="result20" operator="over" result="result6" id="feComposite4" />
                <feOffset in="result6" result="result21" id="feOffset4" />
                <feDisplacementMap in2="result20" result="result4" scale="100" yChannelSelector="A" xChannelSelector="A"
                    in="result21" id="feDisplacementMap4" />
                <feComposite in2="SourceGraphic" k1="1" operator="arithmetic" result="fbSourceGraphic" k3="0.5"
                    in="result4" id="feComposite5" k2="0" k4="0" />
                <feComposite in2="result4" result="result12" operator="in" in="fbSourceGraphic" id="feComposite6" />
                <feComposite in2="SourceGraphic" operator="in" result="result18" id="feComposite7" />
                <feComposite result="result19" in2="SourceGraphic" operator="in" in="result18" id="feComposite8" />
            </filter>
            <filter height="1.3423844" y="-0.17119221" width="1.3423844" x="-0.17119221"
                style="color-interpolation-filters:sRGB" id="filter27">
                <feGaussianBlur stdDeviation="11.205658" result="result8" in="SourceGraphic" id="feGaussianBlur21" />
                <feComposite in="result8" in2="result8" operator="xor" result="result18" id="feComposite21" />
                <feComposite in="result8" k1="1" k2="0.5" operator="arithmetic" result="result16" in2="result18"
                    id="feComposite22" k3="0" k4="0" />
                <feComposite in2="result8" result="result6" operator="atop" in="result16" id="feComposite23" />
                <feOffset result="result17" in="result6" id="feOffset23" />
                <feDisplacementMap in2="result16" in="result17" xChannelSelector="A" yChannelSelector="A" scale="100"
                    result="result4" id="feDisplacementMap23" />
                <feComposite in2="result4" result="result2" operator="arithmetic" in="result17" k3="1"
                    id="feComposite24" k1="0" k2="0" k4="0" />
                <feComposite in2="result17" result="fbSourceGraphic" in="result2" operator="out" id="feComposite25" />
                <feComposite in="fbSourceGraphic" in2="fbSourceGraphic" operator="over" result="result14"
                    id="feComposite26" />
                <feComposite result="result15" in2="SourceGraphic" operator="in" in="result14" id="feComposite27" />
            </filter>
            <filter height="1.1071691" y="-0.053584568" width="1.1071691" x="-0.053584568"
                style="color-interpolation-filters:sRGB" id="filter40">
                <feGaussianBlur stdDeviation="3.507463" result="result8" in="SourceGraphic" id="feGaussianBlur34" />
                <feComposite in2="result8" operator="xor" id="feComposite34" />
                <feComposite k2="1" operator="arithmetic" result="result16" in2="result8" id="feComposite35" k1="0"
                    k3="0" k4="0" />
                <feComposite in2="result16" result="result6" operator="xor" in="result16" id="feComposite36" />
                <feOffset result="result17" in="result16" id="feOffset36" />
                <feDisplacementMap in2="result16" xChannelSelector="A" yChannelSelector="A" scale="100" result="result4"
                    in="result17" id="feDisplacementMap36" />
                <feComposite in2="result4" result="result2" operator="arithmetic" in="SourceGraphic" k1="1" k3="1"
                    id="feComposite37" k2="0" k4="0" />
                <feComposite in2="result2" result="fbSourceGraphic" in="result6" operator="in" id="feComposite38" />
                <feComposite in2="SourceGraphic" operator="in" result="result14" id="feComposite39" />
                <feComposite result="result15" in2="SourceGraphic" operator="in" in="result14" id="feComposite40" />
            </filter>
            <filter style="color-interpolation-filters:sRGB" id="filter41" x="-0.60230397" y="-0.37224433"
                width="2.2046079" height="1.7444887">
                <feGaussianBlur stdDeviation="7.4386345" id="feGaussianBlur41" />
            </filter>
            <filter style="color-interpolation-filters:sRGB" id="filter42" x="-0.2105747" y="-0.23578143"
                width="1.4211494" height="1.4715629">
                <feGaussianBlur stdDeviation="2.276944" id="feGaussianBlur42" />
            </filter>
            <filter style="color-interpolation-filters:sRGB" id="filter43" x="-0.15728499" y="-1.2695146"
                width="1.31457" height="3.5390293">
                <feGaussianBlur stdDeviation="6.2085218" id="feGaussianBlur43" />
            </filter>
        </defs>
        <g id="layer1" transform="translate(6.3205784,-41.434392)">
            <ellipse id="sombra"
                style="display:inline;opacity:0.607321;fill:#000000;fill-opacity:0.93838;stroke:none;stroke-width:3;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter43)"
                id="path42" cx="107.78091" cy="227.04466" rx="47.367687" ry="5.8685627"
                transform="matrix(1.1907931,0,0,1.6984541,-20.563852,-157.39464)" />
            <g id="g41" style="display:inline">

                <circle style="display:inline;fill:{{color}};fill-opacity:1;stroke-width:0;stroke-linejoin:round"
                    id="path1" cx="107.00299" cy="145.53593" r="78.547905" />
                <g id="g1" style="display:inline">
                    <circle style="display:inline;fill:#e3e3e3;fill-opacity:1;stroke-width:0;stroke-linejoin:round"
                        id="path2" cx="105.22454" cy="145.53593" r="45.943111" />
                    <circle
                        style="display:inline;opacity:0.658902;fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:3;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                        id="path41" cx="104.96067" cy="154.26297" r="55.332165"
                        transform="translate(0.83836614,-8.3836608)" />
                    <text
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:52.6919px;line-height:22.0287px;font-family:sans-serif;-inkscape-font-specification:sans-serif;text-align:end;letter-spacing:-0.0509921px;word-spacing:-1.40229px;text-anchor:end;display:inline;opacity:0.607321;fill:#000000;fill-opacity:1;"
                        x="135.17139" y="164.8252" id="text1">
                        <tspan id="tspan1" class="flex justify-center items-center"
                            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;fill:#000000;"
                            x={{x}} y="164.8252">{{number}}</tspan>
                    </text>
                </g>
                <circle
                    style="display:inline;opacity:0.364393;fill:#f2f2f2;fill-opacity:1;stroke-width:0;stroke-linejoin:round;filter:url(#filter8)"
                    id="circle2" cx="107.00299" cy="145.53593" r="78.547905" />
                <circle
                    style="display:inline;opacity:0.389351;fill:#000000;fill-opacity:0.753521;stroke-width:0;stroke-linejoin:round;filter:url(#filter27)"
                    id="circle8" cx="107.00299" cy="145.53593" r="78.547905" />
                <circle
                    style="display:inline;opacity:0.336106;fill:#5f5f5f;fill-opacity:0.723592;stroke-width:0;stroke-linejoin:round;filter:url(#filter40)"
                    id="circle27" cx="107.00299" cy="145.53593" r="78.547905" />
                <ellipse
                    style="display:inline;opacity:0.658902;fill:#ffffff;fill-opacity:1;stroke-width:0;stroke-linejoin:round;filter:url(#filter41)"
                    id="path40" cx="111.2606" cy="168.55637" rx="14.820359" ry="23.979845"
                    transform="rotate(-13.778393,13.451906,-8.3309858)" />
                <path id="rect41"
                    style="display:inline;opacity:0.53411;mix-blend-mode:normal;fill:#ffffff;stroke-width:1.79628;stroke-linejoin:round;filter:url(#filter42)"
                    d="m 65.506713,103.70281 c 11.205834,-9.486977 15.271605,-8.163753 19.93761,-7.791951 l 6.013586,15.106881 c -4.892751,-0.66258 -13.217844,2.33547 -19.937611,7.79195 z"
                    transform="matrix(1.2519132,-0.24149441,0.19935295,1.0334508,-40.900052,7.8719672)" />
            </g>
        </g>
    </svg>
    `
}

export function ranking() {
    return `
    <div></div>
    `
}