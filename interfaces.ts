export interface Tag {
    id?: String;
    lang?: String;
    tabindex?: String;
    "xml:base"?: String;
    "xml:lang"?: String;
    "xml:space"?: String;
    children?: Tag[];
};

export interface SvgTag {
    version?: String
    id?: String
    xmlns?: String
    xlink?: String
    x?: String
    y?: String
    width?: String
    height?: String
    viewBox: String
    background?: String
    space?: String
}

export interface EllipseTag extends Tag {
    cx: String;
    cy: String;
    rx: String;
    ry: String;
};

export interface ImageTag extends Tag {
    x?: String
    y?: String
    width: String
    height: String
    href?: String;
    "xlink:href"?: String;
    preserveAspectRatio: String
    crossorigin: String
};

export interface LineTag extends Tag {
    x1: String;
    y1: String;
    x2: String;
    y2: String;
    pathLength?: String;
};

export interface PathTag extends Tag {
    d: String;
    pathLength?: String;
};

export interface PolygonTag extends Tag {
    points: String;
    pathLength?: String;
};

export interface PolylineTag extends Tag {
    points: String;
    pathLength?: String;
};

export interface RectTag extends Tag {
    x?: String;
    y?: String;
    width: String;
    height: String;
    rx?: String;
    ry?: String;
    pathLength?: String;
};

export interface UseTag extends Tag {
    href?: String;
    "xlink:href"?: String;
    x?: String;
    y?: String;
    width: String;
    height: String;
};

export interface Command {
    relative: boolean;
};

export interface MoveCommand extends Command {                     // M
    x: String;
    y: String;
};

export interface LineCommand extends Command {                     // L
    x: String;
    y: String;
};

export interface HorizontalLineCommand extends Command {           // H
    x: String;
};

export interface VerticalLineCommand extends Command {             // V
    y: String;
};

export interface BezierCurveCommand extends Command {              // C
    x1: String;
    y1: String;
    x2: String;
    y2: String;
    x: String;
    y: String;
};

export interface SmoothBezierCurveCommand extends Command {        // S
    x2: String;
    y2: String;
    x: String;
    y: String;
};

export interface QuadraticCurveCommand extends Command {           // Q
    x1: String;
    y1: String;
    x: String;
    y: String;
};

export interface SmoothQuadraticCurveCommand extends Command {     // T
    x: String;
    y: String;
};

export interface ArcCommand extends Command {
    rx: String,
    ry: String,
    xAxisRotation: String,
    largeArcFlag: String,
    sweepFlag: String,
    x: String,
    y: String,
};
