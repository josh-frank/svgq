export class SvgParser {
    
    svg: String;

    static validTag = /(<[\w])([^<]*|[^>]*)/gm;

    static parse( svg: String ) {
        let cursor = 0, parsedComponents = [];
        while ( cursor < svg.length ) {
            const match = svg.slice( cursor ).match( this.validTag );
            if ( match ) {
                parsedComponents.push( match[ 1 ] );
                cursor += match[ 0 ].length;
            } else {
                throw new Error( `Invalid: first error at char ${ cursor }` );
            }
        }
        return parsedComponents;
    }

}