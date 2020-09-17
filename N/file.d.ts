export interface File {
    description: string;
    encoding: string|Encoding;
    fileType: Type;
    folder: number;
    readonly id: number;
    isInactive: boolean;
    isOnline: boolean;
    readonly isText: boolean;
    name: string;
    readonly path: string;
    readonly size: number;
    readonly url: string;
    save: () => number;
    getContents: () => string;
    getReader: () => FileReader; // Since 2019.1
    /** Method used to return the iterator of segments delimited by a separator. Separator is included in each segment. Empty separator is not allowed */
    getSegments: (options: { separator: string }) => FileIterator; // Since 2019.1
    resetStream: () => void;
    appendLine: (option: FileAppendLineOptions) => File;
    lines: { iterator: () => FileIterator; };
    }

/** Use for special read operations. Reads from a file until a specified delimiter is reached. Reads an arbitrary number of characters from a file. Since 2019.1. */
interface FileReader {
    /**
     * Returns string from current position to the next occurrence of options.tag.
     * Returns the rest of the string if tag is not found. Returns null if reading is already finished.
     * All types of characters are supported. If there's a character that does not exist until the end of the file, the rest of the file is returned.
     */
    readUntil: (options: { tag: string }) => string;
    /**
     * Returns the next options.number characters from the current position.
     * Returns less than the number if there is not enough characters to read in the file.
     * Returns null if reading is already finished.
     */
    readChars: (options: { number: number }) => string;
}

interface FileIterator {
    each: (options: any) => boolean;
}

interface FileAppendLineOptions {
    /** Internal ID of the file as a number or a string, or the relative file path to the file in the file cabinet. */
    value: string;
}

interface FileLoadOptions {
    /**  Internal ID of the file as a number or a string, or the relative file path to the file in the file cabinet. */
    id: (number | string);
}

interface FileDeleteOptions {
    /** Internal ID of the file. */
    id: (number | string);
}

interface FileCreateOptions {
    /** The file name. */
    name: string;
    /** The file type. */
    fileType: Type;
    /** The file content. */
    contents?: string;
    /** The file content. */
    description?: string;
    /**
     * The internal ID of the folder used when the file is saved.
     */
    folder?: number | string;
    /**
     * The file encoding.
     */
    encoding?: Encoding;
    /** The file status. */
    isInactive?: boolean;
    /** The file status. */
    isOnline?:boolean;
}

/** Method used to create a new file in the NetSuite file cabinet. */
export function create(options: FileCreateOptions): File;

/**  Method used to delete an existing file from the NetSuite file cabinet. */
declare function deleteFunc(options: FileDeleteOptions): void;
export {deleteFunc as delete};

/** Method used to load an existing file from the NetSuite file cabinet. */
export function load(options: FileLoadOptions): File;

/** Method used to load an existing file from the NetSuite file cabinet. */
export function load(idOrPath: number | string): File;

/** Enumeration that holds the string values for supported character encoding. */
export enum Encoding {
    UTF8,
    WINDOWS_1252,
    ISO_8859_1,
    GB18030,
    SHIFT_JIS,
    MAC_ROMAN,
    GB2312,
    BIG5,
}

/** Enumeration that holds the string values for supported file types. */
export enum Type {
    AUTOCAD,
    BMPIMAGE,
    CSV,
    EXCEL,
    FLASH,
    FREEMARKER,
    GIFIMAGE,
    GZIP,
    HTMLDOC,
    ICON,
    JAVASCRIPT,
    JPGIMAGE,
    JSON,
    MESSAGERFC,
    MP3,
    MPEGMOVIE,
    MSPROJECT,
    PDF,
    PJPGIMAGE,
    PLAINTEXT,
    PNGIMAGE,
    POSTSCRIPT,
    POWERPOINT,
    QUICKTIME,
    RTF,
    SMS,
    STYLESHEET,
    TAR,
    TIFFIMAGE,
    VISIO,
    WEBAPPPAGE,
    WEBAPPSCRIPT,
    WORD,
    XMLDOC,
    XSD,
    ZIP,
}
