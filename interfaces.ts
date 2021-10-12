export interface Command {
    relative: boolean;
};

export interface MoveCommand extends Command {                     // M
    x: number;
    y: number;
};

export interface LineCommand extends Command {                     // L
    x: number;
    y: number;
};

export interface HorizontalLineCommand extends Command {           // H
    x: number;
};

export interface VerticalLineCommand extends Command {             // V
    y: number;
};

export interface BezierCurveCommand extends Command {              // C
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x: number;
    y: number;
};

export interface SmoothBezierCurveCommand extends Command {        // S
    x2: number;
    y2: number;
    x: number;
    y: number;
};

export interface QuadraticCurveCommand extends Command {           // Q
    x1: number;
    y1: number;
    x: number;
    y: number;
};

export interface SmoothQuadraticCurveCommand extends Command {     // T
    x: number;
    y: number;
};

export interface ArcCommand extends Command {
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcFlag: number,
    sweepFlag: number,
    x: number,
    y: number,
};
