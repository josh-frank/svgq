class SvgParser {
    
    svg: String;

    static validOpeningTag = /<\w[^<>]*\s?>/mi;
    static validClosingTag = /<\/\w+>/i;
    static validTag = /<\w[^<>]*\s?>|<\/\w+>/mgi;
    static cleanUpWhiteSpace = /[\n\t]/mgi;
    
    static tagName = /(?<=<)\w+/gi;
    static attribute = /\w+=[`'"][^`'"]*[`'"]/gi
    static attributeName = /\w+(?=\=)/gi
    static attributeValue = /(?<=\=["'`])[^"'`]*(?<!["'`])/gi

    static parse = ( svg: String ) => svg.match( this.validTag )?.reduce( ( parsedSvg: any[], tag: String ) => {
        const cleanUpTag = tag.replace( this.cleanUpWhiteSpace, "" );
        const tagName: RegExpMatchArray | null = cleanUpTag.match( this.tagName );
        const attributes = cleanUpTag.match( this.attribute )?.reduce( ( parsedAttributes, attribute ) => {
            const matchName = attribute.match( this.attributeName );
            const matchValue = attribute.match( this.attributeValue );
            if ( matchName && matchValue ) return { ...parsedAttributes, [ matchName[ 0 ] ]: matchValue[ 0 ] };
            else return parsedAttributes;
        }, {} );
        return tagName ? [ ...parsedSvg, { [ tagName[ 0 ] ]: attributes } ] : parsedSvg;
    }, [] );

    // static parseChildren = ( svg: String, cursor: number ) => {
    //     const parsedTags: any[] = [];
    //     while ( cursor < svg.length ) {
    //         const matchNextOpeningTag = svg.match( this.validOpeningTag ), matchNextClosingTag = svg.match( this.validClosingTag );
    //         // console.log( { matchNextOpeningTag, matchNextClosingTag } );
    //         if ( matchNextOpeningTag || matchNextClosingTag ) {}
    //     }
    //     return parsedTags;
    // };

}

module.exports = { SvgParser };

// if ( tagName ) switch ( tagName[ 0 ] ) {
//     case "svg": return [ ...parsedSvg, { ...attributes } as SvgTag ]
//     case "ellipse": return [ ...parsedSvg, { ...attributes } as EllipseTag ]
//     case "image": return [ ...parsedSvg, { ...attributes } as ImageTag ]
//     case "line": return [ ...parsedSvg, { ...attributes } as LineTag ]
//     case "path": return [ ...parsedSvg, { ...attributes } as PathTag ]
//     case "polygon": return [ ...parsedSvg, { ...attributes } as PolygonTag ]
//     case "polyline": return [ ...parsedSvg, { ...attributes } as PolylineTag ]
//     case "rect": return [ ...parsedSvg, { ...attributes } as RectTag ]
//     case "use": return [ ...parsedSvg, { ...attributes } as UseTag ]
//     default: return parsedSvg;
// }
