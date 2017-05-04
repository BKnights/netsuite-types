interface LogArg {
    title?: string;
    details: any;
}

interface LogFunction {
	(options:LogArg): null;
}

export var debug: LogFunction;
export var audit: LogFunction;
export var error: LogFunction;
export var emergency: LogFunction;
