export class HttpHeader {
    public method: string;
    public headers: any;
    public body: any;

    constructor() {
        this.headers = {
            'Content-Type': 'application/json', // set the default content type to be json
        };
        this.body = undefined;
    }
}

export default HttpHeader;